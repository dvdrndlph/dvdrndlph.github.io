/** @license
 *
 * Copyright (c) 2015, 2016 David A. Randolph.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ****************************************************************************
 * Created by David A. Randolph on 8/18/15, on top of the abc2svg
 * example script by Jef Moine.
 */
/*
 * This is a WYSIWYG utility to collect fingering data for abc input.
 *
 * The user will enter a string of digits 1-5, parentheses,
 * hyphens, and slashes to convey the fingering for a given note
 * according to the following rules:
 *
 *     1. All black note heads (including grace notes) may be assigned either
 *        a single finger number or, if ornamented, a series of finger numbers,
 *        enclosed in parentheses.
 *
 *     2. An ornamented note may either be fully fingered in parentheses, or
 *        any repeated finger patterns may be omitted. For example, a trilled
 *        note may be annotated equivalently as
 *
 *            (12121212121)
 *
 *        or
 *
 *            (121)
 *
 *     3. A slash should be used to indicate fingering variations for repeated
 *        sections of music. For example, if the thumb and middle finger are used
 *        to begin the first time through, but index and ring fingers the second time,
 *        it might look like this:
 *
 *            1/23/41234
 *
 *     4. All chord fingerings should be entered from low to high (left to right).
 *
 *     5. A hyphen is used to indicate that a different finger is used to release
 *        the key than the one that struck it. That is, a note that is struck with
 *        the ring finger but released with the thumb, would be annotated like this:
 *
 *            4,1
 *
 *     6. All notes in a tied sequence must have a fingering assigned.
 *
 *     7. Finger shifts or alternative fingerings within an ornamented note
 *        (slashes or hyphens within parentheses) are not allowed.
 *
 *     8. Unless otherwise specified, fingerings for the upper staff are assumed
 *        to be for the right hand and those for the lower staff are assumed to
 *        be for the left. The user toggles this behavior by pressing the "t" key.
 *        Such a change in mode is indicated by embedding a ">" character (for
 *        right hand) or "<" (for left hand) in the output stream.
 *
 */
function AbcDE() {
    'use strict';

    let Options,
        Redo = [],
        Undo = [],
        Previous_Url = '',
        Toggling_Background = false,
        Magnification = 1,
        Preferences = {},
        Sequences = [],
        Grace_Notes_In_Source,
        Autosaver = undefined,
        Md5_Key = '',
        Abc_Images,			// image buffer
        Abc_Fname = "noname.abc",
        Org_Abc_Str,
        Org_Abc_Chars = [],
        My_Abc,				// Abc object
        Timer = 0,
        Input_Buffer = [],
        Open_Ornament = false,
        Trailing_Characters = [],
        Current_Note,
        Current_Line_Number = 0,
        Notes = [],         // Array of note data structures in ts order.
        Notes_On_Line = [],
        Note_At = {},       // Maps start positions in original abc string to note data structures.
        Fingered_Note_At = {}, // Maps start positions in fingered abc to note data structures.
        Sorted_Note_Locations = [],
        Preprocessing_Completed = false,
        Staff_Notes_At_Time = {},
        Voice_Staff = {},
        Ref = [],			// source reference array
        Rerender_Count = 0,
        Fonts_Set_In_Source,
        Numbering_Set_In_Source,
        Toggled = false,
        Colcl = [], 		// colorized classes
        Persist_Annotated = false,
        Ui_In_Place = false;

    let DIDACTYL_URL = '..';
    let CORPORA_URL = DIDACTYL_URL + '/../corpora';
    let HELP_URL = './abcde_help.html';
    let IMAGE_DIR = DIDACTYL_URL + '/image';
    let MEDIA_DIR = DIDACTYL_URL + '/lib/media';
    let DEFAULT_NUMBERING_INTERVAL = 5;
    // let MEDIA_DIR = '../lib/media';
    // let MEDIA_DIR = 'http://nlp.cs.uic.edu/didactyl/abcde/lib/media';

    let SPACE_RE = /\s/g;
    let LH_RE = /</g;
    let RH_RE = />/g;
    let RL_RE = /[><]/g;
    let PHRASE_RE = /([,;\.])/;
    let LINE_RE = /&/g;
    let LAST_HAND_RE = (/.*([<>])[^<>]+$/);
    let ABCD_HDR_RE = /^% abcDidactyl v([\d\.]+)$/;
    let ABCD_FINGERING_RE = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x,;\.]+)$/;
    let ABCD_TERMINAL_RE = /^% abcDidactyl END$/;
    let ABCD_AUTHORITY_RE = /^% Authority: ([^\(]+)(\s+\((\d\d\d\d)\))?$/;
    let ABCD_TRANSCRIBER_RE = /^% Transcriber: (.*)$/;
    let ABCD_TRANSCRIPTION_DATE_RE =
        /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/;
    let ABCD_COMMENT_RE = /^% (.*)$/;

    let TIMEOUT_MS = 300;
    let AUTOSAVE_MS = 4000;

    let ABCDE_DIV_ID = 'abcde';
    let SOURCE_ID = 'abc_source';
    let SOURCE_CLASS_ID = 'source';
    let PREFS_DIV_ID = 'abcde_prefs';
    let CONTROLS_DIV_ID = 'abcde_controls';
    let METADATA_DIV_ID = 'abcde_metadata';
    let KEYPAD_DIV_ID = 'abcde_keypad';
    let RENDERING_DIV_ID = 'abcde_rendering';
    let TARGET_DIV_ID = 'abcde_target';
    let ERROR_DIV_ID = 'abcde_error';

    let MAGNIFICATION_INCREMENT = 0.1;
    let MAX_MAGNIFICATION = 3.0;
    let MIN_MAGNIFICATION = 0.3;

    let Z_CODE = 90;
    let Y_CODE = 89;
    let ENTER_CODE = 13;
    let BACKSPACE_CODE = 8;
    let TAB_CODE = 9;
    let LEFT_ARROW_CODE = 37;
    let RIGHT_ARROW_CODE = 39;

    let SETFONT_COMMANDS =
        "%%setfont-1 Bookman 11\n" +
        "%%setfont-2 Helvetica-Bold 11";
    let GRACE_NOTE_DECORATIONS =
        "%%deco 1 3 fng 8 1 1 1\n" +
        "%%deco 2 3 fng 8 1 1 2\n" +
        "%%deco 3 3 fng 8 1 1 3\n" +
        "%%deco 4 3 fng 8 1 1 4\n" +
        "%%deco 5 3 fng 8 1 1 5";

    function initialize_globals() {
        if (Autosaver) {
            clearInterval(Autosaver);
        }
        Redo = [];
        Undo = [];
        Md5_Key = '';
        Toggling_Background = false;
        Abc_Fname = "noname.abc";
        Grace_Notes_In_Source = undefined;
        Org_Abc_Str = '';
        Org_Abc_Chars = [];
        My_Abc = undefined;				// Abc object
        Input_Buffer = [];
        Open_Ornament = false;
        Trailing_Characters = [];
        Current_Note = undefined;
        Current_Line_Number = 0;
        Notes = [];         // Array of note data structures in ts order.
        Notes_On_Line = [];
        Note_At = {};       // Maps start positions in original abc string to note data structures.
        Fingered_Note_At = {}; // Maps start positions in fingered abc to note data structures.
        Sorted_Note_Locations = [];
        Preprocessing_Completed = false;
        Staff_Notes_At_Time = {};
        Voice_Staff = {};
        Ref = [];			// source reference array
        Rerender_Count = 0;
        Fonts_Set_In_Source = undefined;
        Numbering_Set_In_Source = undefined;
        Colcl = []; 		// colorized classes
    }

    function get_sorted_staff_note_times(staff) {
        let notes_at_time = Staff_Notes_At_Time[staff];
        let sorted_note_times = [];
        let key;
        for (key in notes_at_time) {
            if (notes_at_time.hasOwnProperty(key)) {
                sorted_note_times.push(key);
            }
        }
        sorted_note_times.sort(function (a, b) {
            return parseInt(a) - parseInt(b);
        });

        return sorted_note_times;
    }

    function get_handed_fingering(fingering, starting_hand) {
        if (!fingering) {
            console.log('MISSING fingers have no hands.');
            return '';
        }
        if (fingering === 'x') {
            return fingering;
        }

        let hand = starting_hand;
        let handed_tokens = [];
        let chars = fingering.split('');
        for (let i = 0; i < chars.length; i++) {
            let char = chars[i];
            if (char === '<' || char === '>') {
                hand = char;
            } else if (char.match(/\d/)) {
                handed_tokens.push(hand + char);
            } else {
                handed_tokens.push(char);
            }
        }
        return handed_tokens.join('');
    }

    function local_storage_is_supported() {
        if (typeof(Storage) === 'undefined') {
            return false;
        }
        return true;
    }

    function get_storage_key(field_name, sequence_number) {
        if (!Md5_Key) {
            Md5_Key = md5(Org_Abc_Str);
        }
        let storage_key = field_name + "_" + sequence_number + "_" + Md5_Key;
        if (Options['experiment_id']) {
            storage_key = Options['experiment_id'] + "_" + storage_key;
        }
        return storage_key;
    }

    function get_autosaved_sequence(sequence_number) {
        if (!local_storage_is_supported()) {
            return {};
        }

        let saved_seq = {sequence: ''};
        let storage_key = get_storage_key('sequence', sequence_number);
        let stored_fingerings = localStorage.getItem(storage_key) || '';
        if (stored_fingerings.match(/[^x&@]/)) {
            saved_seq.sequence = stored_fingerings;
        }

        storage_key = get_storage_key('authority', sequence_number);
        let stored_authority = localStorage.getItem(storage_key) || '';
        saved_seq.authority = stored_authority;
        storage_key = get_storage_key('authority_year', sequence_number);
        let stored_year = localStorage.getItem(storage_key) || '';
        saved_seq.authority_year = stored_year;
        storage_key = get_storage_key('transcriber', sequence_number);
        let stored_transcriber = localStorage.getItem(storage_key) || '';
        saved_seq.transcriber = stored_transcriber;
        storage_key = get_storage_key('comments', sequence_number);
        let stored_comments = localStorage.getItem(storage_key) || '';
        saved_seq.comments = stored_comments;

        return saved_seq;
    }

    function get_field_value(field_id) {
        let field = document.getElementById(field_id);
        if (field.value) {
            return field.value;
        }
        return '';
    }

    function get_current_sequence(force) {
        let current_date = new Date();
        let date_str = current_date.getFullYear() + '-' +
            sprintf("%02d", (current_date.getMonth() + 1)) + '-' +
            sprintf("%02d", current_date.getDate()) + ' ' +
            sprintf("%02d", current_date.getHours()) + ":" +
            sprintf("%02d", current_date.getMinutes()) + ":" +
            sprintf("%02d", current_date.getSeconds());

        let authority = '';
        let transcriber = '';
        if (force || get_setting('include_pii')) {
            authority = get_field_value('authority');
            transcriber = get_field_value('transcriber');
        }

        let sequence = {
            sequence: getEnteredCollection(),
            authority: authority,
            authority_year: get_field_value('authority_year'),
            transcriber: transcriber,
            transcription_date: date_str,
            comments: get_field_value('comments')
        };
        return sequence;
    }

    function store_sequence_field(field_id, sequence_id) {
        let field = document.getElementById(field_id);
        let setting = field.value;
        let storage_key = get_storage_key(field_id, sequence_id);
        localStorage.setItem(storage_key, setting);
    }

    function get_radio_setting(group_name) {
        let group = document.getElementsByName(group_name);
        for (let i = 0; i < group.length; i++) {
            let button = group[i];
            if (button.checked) {
                return button.id;
            }
        }
        return undefined;
    }

    function store_preference(field_id) {
        let setting = '';
        if (field_id === 'preset_preference' || field_id === 'output' ||
            field_id === 'keypad' || field_id == 'restore') {
            setting = get_radio_setting(field_id);
        } else {
            let field = document.getElementById(field_id);
            setting = field.value;
        }
        Preferences[field_id] = setting;
        localStorage.setItem(field_id, setting);
    }

    function get_current_sequence_number() {
        let sequence_spinner = document.getElementById('sequence_spinner');
        if (!sequence_spinner) {
            alert("Sequence DOM element has gone missing.");
            return '1';
        }
        return sequence_spinner.value;
    }

    function autosave() {
        // localStorage.clear();
        if (!local_storage_is_supported()) {
            clearInterval(Autosaver);
            return;
        }

        let sequence_spinner = document.getElementById('sequence_spinner');
        if (! sequence_spinner) {
            clearInterval(Autosaver);
            return;
        }

        let sequence_number = get_current_sequence_number();

        let storage_key = get_storage_key('sequence', sequence_number);
        let fingerings = getEnteredCollection();
        localStorage.setItem(storage_key, fingerings);

        store_sequence_field('authority', sequence_number);
        store_sequence_field('authority_year', sequence_number);
        store_sequence_field('transcriber', sequence_number);
        store_sequence_field('comments', sequence_number);
    }

    function get_setting(arg) {
        if (Options && Options[arg]) {
            return Options[arg];
        }

        if (arg === 'preset') {
            // We used to store something with this name. Now we are
            // using it exclusively as an Option to mean something else.
            return '';
        }

        if (arg === 'measure_number_interval') {
            let field = document.getElementById(arg);
            return field.value;
        }

        let preference = get_radio_setting(arg);
        if (preference) {
            return preference;
        }
        return '';
    }

    function get_default_sequence_number() {
        let setting = get_setting('preset');
        if (setting) {
            return setting;
        }
        setting = get_setting('preset_preference');
        let number = 1;
        if (setting === 'last') {
            number = Sequences.length || 1;
        }
        return number;
    }

    function get_dummy_sequence() {
        let seq = {};
        seq.authority = get_field_value('default_authority');
        seq.authority_year = get_field_value('default_authority_year');
        seq.transcriber = get_field_value('default_transcriber');
        seq.sequence = 'x';
        seq.comments = '';
        return seq;
    }

    function get_sequences(abcd_str) {
        let lines = abcd_str.split("\n");
        let match;
        let within_abcd_block = false;
        let seq = {};
        let sequences = [];
        let input_abcde_version = '';
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (!input_abcde_version) {
                match = ABCD_HDR_RE.exec(line);
                if (match && match[1]) {
                    input_abcde_version = match[1];
                    within_abcd_block = true;
                    continue;
                }
            }

            if (within_abcd_block) {
                match = ABCD_FINGERING_RE.exec(line);
                if (match && match[1] && match[2]) {
                    seq = {sequence: match[2], comments: ''};
                    sequences.push(seq);
                } else {
                    match = ABCD_TERMINAL_RE.exec(line);
                    if (match) {
                        break;
                    }
                    match = ABCD_AUTHORITY_RE.exec(line);
                    if (match && match[1]) {
                        seq.authority = match[1];
                        if (match[2]) {
                            seq.authority_year = match[3];
                        }
                        continue;
                    }
                    match = ABCD_TRANSCRIBER_RE.exec(line);
                    if (match && match[1]) {
                        seq.transcriber = match[1];
                        continue;
                    }
                    match = ABCD_TRANSCRIPTION_DATE_RE.exec(line);
                    if (match && match[1]) {
                        seq.transcription_date = match[1];
                        continue;
                    }
                    match = ABCD_COMMENT_RE.exec(line);
                    if (match && match[1]) {
                        seq.comments += match[1] + "\n";
                    }
                }
            }
        }
        return sequences;
    }

    function set_default_sequence() {
        let sequence_spinner = document.getElementById('sequence_spinner');
        sequence_spinner.min = 1;
        sequence_spinner.max = Sequences.length || 1;
        let default_sequence_number = get_default_sequence_number();
        sequence_spinner.value = default_sequence_number;
    }

    function get_default_sequence() {
        let setting = get_setting('preset');
        if (setting) {
            let index = setting - 1;
            return Sequences[index];
        }
        setting = get_setting('preset_preference');
        if (!setting || setting === 'none') {
            return get_dummy_sequence();
        } else if (setting === 'first') {
            return Sequences[0];
        } else if (setting === 'last') {
            return Sequences[Sequences.length - 1];
        }
        return '';
    }

    function get_preset_sequence(sequence_number) {
        if (sequence_number) {
            let sequence_index = sequence_number - 1;
            if (parseInt(sequence_number) <= Sequences.length) {
                return Sequences[sequence_index];
            } else {
                return get_dummy_sequence();
            }
        }
        return get_default_sequence();
    }


    function set_radio(group_name, value) {
        let group = document.getElementsByName(group_name);
        for (let i = 0; i < group.length; i++) {
            let button = group[i];
            if (button.id === value) {
                button.checked = true;
            }
        }
    }

    function set_field(field_id, value) {
        let field = document.getElementById(field_id);
        if (value !== undefined) {
            field.value = value;
        } else {
            field.value = '';
        }
    }

    function preset_preferences() {
        set_radio('preset_preference', localStorage.getItem('preset_preference'));
        set_radio('output', localStorage.getItem('output'));
        set_radio('restore', localStorage.getItem('restore'));
        set_radio('keypad', localStorage.getItem('keypad'));
        let numbering_setting = localStorage.getItem('measure_number_interval');
        if (numbering_setting === undefined || numbering_setting === '') {
            numbering_setting = DEFAULT_NUMBERING_INTERVAL;
        }
        set_field('measure_number_interval', numbering_setting);
        set_field('default_authority', localStorage.getItem('default_authority'));
        set_field('default_authority_year', localStorage.getItem('default_authority_year'));
        set_field('default_transcriber', localStorage.getItem('default_transcriber'));
    }

    function restore_metadata(metadata) {
        set_field('authority', metadata.authority);
        set_field('authority_year', metadata.authority_year);
        set_field('transcriber', metadata.transcriber);
        set_field('comments', metadata['comments']);
    }

    function preset_blank_metadata() {
        let authority = get_field_value('authority');
        let default_authority = get_field_value('default_authority');
        if (! authority && default_authority) {
            set_field('authority', default_authority);
        }
        let year = get_field_value('authority_year');
        let default_year = get_field_value('default_authority_year');
        if (! year && default_year) {
            set_field('authority_year', default_year);
        }
        let transcriber = get_field_value('transcriber');
        let default_transcriber = get_field_value('default_transcriber');
        if (! transcriber && default_transcriber) {
            set_field('transcriber', default_transcriber);
        }
    }

    function array_contains_object(array, obj) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === obj) {
                return true;
            }
        }
        return false;
    }

    function index_of_object(array, obj) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === obj) {
                return i;
            }
        }
        return null;
    }

    function set_sequence(finger_str, field_name) {
        // finger_str is a complete abcDF string.
        if (! finger_str) {
            return;
        }

        console.log("Setting fingers: ", finger_str);
        let staff_fingerings = {};
        let staff_lines = finger_str.split('@');
        let staff_num;
        let line_num;
        let fingering;
        for (staff_num = 0; staff_num < staff_lines.length; staff_num++) {
            let hand = get_staff_hand(staff_num);
            staff_fingerings = [];
            let finger_lines = staff_lines[staff_num].split('&');
            for (line_num = 0; line_num < finger_lines.length; line_num++) {
                let finger_line = finger_lines[line_num];
                // let tokens = get_tokens(PRESET_RE, finger_line);
                let tokens = get_abcdf_note_tokens(finger_line);
                staff_fingerings = staff_fingerings.concat(tokens);
            }

            let sorted_staff_note_times = get_sorted_staff_note_times(staff_num);
            for (let time_index = 0; time_index < sorted_staff_note_times.length; time_index++) {
                let time = sorted_staff_note_times[time_index];
                let notes = Staff_Notes_At_Time[staff_num][time];
                notes.sort(order_notes);
                for (let g = 0; g < notes.length; g++) {
                    let knot = notes[g];
                    let pit_count = knot.pitches.length;
                    if (knot.grace) {
                        let grace_note_fingering = '';
                        knot[field_name] = '';
                        for (let i = 0; i < pit_count; i++) {
                            fingering = staff_fingerings.shift();
                            if (!fingering) {
                                console.log(field_name + ' MISSING for grace note:');
                                print_note(field_name + ' grace note', knot);
                            }
                            fingering = get_handed_fingering(fingering, hand);
                            hand = get_new_last_hand(fingering, hand);
                            grace_note_fingering += fingering;
                        }
                        if (field_name === 'fingering') {
                            knot.set_fingering(grace_note_fingering);
                        } else if (field_name === 'preset_fingering') {
                            knot.set_preset_fingering(grace_note_fingering);
                        }
                    }
                }

                let notes_with_pit = get_sorted_synchronous_notes_with_pit(notes);
                let pits = get_sorted_synchronous_pits(notes_with_pit);

                let note_fingerings = [];
                let notes_to_finger = [];
                let pit_note = null;

                for (let i = 0; i < pits.length; i++) {
                    let pit = pits[i];
                    for (let j = 0; j < notes_with_pit[pit].length; j++) {
                        pit_note = notes_with_pit[pit][j];
                        if (pit_note.grace) {
                            continue;
                        }

                        if (! array_contains_object(notes_to_finger, pit_note)) {
                            note_fingerings.push('');
                            notes_to_finger.push(pit_note);
                        }

                        let note_index = index_of_object(notes_to_finger, pit_note);

                        fingering = staff_fingerings.shift();
                        if (!fingering) {
                            console.log(field_name + ' MISSING for note:');
                            print_note(field_name + ' pit note', pit_note);
                        }
                        fingering = get_handed_fingering(fingering, hand);
                        hand = get_new_last_hand(fingering, hand);
                        note_fingerings[note_index] += fingering;
                    }
                }
                for (let i = 0; i <  note_fingerings.length; i++) {
                    fingering = note_fingerings[i];
                    console.log("FingerING " + fingering)
                    pit_note = notes_to_finger[i];
                    if (field_name === 'fingering') {
                        pit_note.set_fingering(fingering);
                    } else if (field_name === 'preset_fingering') {
                        pit_note.set_preset_fingering(fingering);
                    }
                }
            }
        }
    }

    function set_preferred_sequence(autosaved, preset) {
        let finger_str = preset.sequence;
        let preset_finger_str = preset.sequence;
        let presetting = true;
        let setting = get_setting('preset_preference');
        if (!setting || setting === 'none') {
            presetting = false;
            finger_str = '';
        }

        let should_restore = false;
        if (autosaved && autosaved.sequence && autosaved.sequence !== finger_str) {
            let restore_setting = get_setting('restore');
            if (restore_setting === 'always') {
                should_restore = true;
            } else if (restore_setting === 'never') {
                should_restore = false;
            } else {
                should_restore = confirm('You have previously entered data for this piece (or suggestion). ' +
                    'Do you want to restore them?');
            }
            if (should_restore) {
                finger_str = autosaved.sequence;
            }
        }

        if (should_restore) {
            restore_metadata(autosaved);
        } else if (presetting) {
            restore_metadata(preset);
        }

        set_sequence(preset_finger_str, 'preset_fingering');
        set_sequence(finger_str, 'fingering');

        Autosaver = setInterval(function () {
            autosave();
        }, AUTOSAVE_MS);
    }

    function preset_sequence() {
        let sequence_number = get_current_sequence_number();
        let autosaved = get_autosaved_sequence(sequence_number);
        let preset = get_preset_sequence(sequence_number);
        set_preferred_sequence(autosaved, preset);
        preset_blank_metadata();
    }

    function copy_fingerings(trigger) {
        let fingerings = current_collection();
        return fingerings;
    }

    function paste_fingerings() {
        let prompt = 'Please enter a fingering string for the current piece.';
        let new_fingerings = window.prompt(prompt, '');
        if (new_fingerings !== null) {
            set_sequence(new_fingerings, 'fingering');
            rerender();
        }
    }

    function restore_sequence() {
        if (! Org_Abc_Str) {
            return;
        }

        let should_restore = confirm("All changes you have made to this fingering sequence will be discarded, " +
            "and the initial sequence will be restored. Are you sure you want to proceed?");
        if (should_restore) {
            let sequence_number = get_current_sequence_number();
            let preset = get_preset_sequence(sequence_number);
            set_preferred_sequence(undefined, preset);
            rerender();
            Current_Note = Notes_On_Line[0][0][0];
            highlight_note(Current_Note);
        }
    }

    function parse_to_abcdf_tokens(parsimony, tokens) {
        if (parsimony == null) {
            return tokens;
        }

        for (let i = 0; i < parsimony.length; i++) {
            if (parsimony[i] instanceof Array) {
                parse_to_abcdf_tokens(parsimony[i], tokens)
            } else if (parsimony[i]) {
                tokens.push(parsimony[i]);
            }
        }
        return tokens;
    }

    function parse_to_abcdf(parsimony) {
        let tokens = parse_to_abcdf_tokens(parsimony, []);
        return tokens.join("");
    }

    function get_separated_abcdf_note_tokens(parsimony, staff_num=0, lined=false) {
        let tokens = [];
        if (lined) {
            for (let line_num = 0; line_num < parsimony[staff_num].length; line_num++) {
                for (let note_num = 0; note_num < parsimony[staff_num][line_num].length; note_num++) {
                    let parse_part = parsimony[staff_num][line_num][note_num];
                    if (parse_part instanceof Array) {
                        let token = parse_to_abcdf(parse_part);
                        // console.log("TOKEN : " + token);
                        tokens.push(token);
                        // console.log("TOKENS: " + tokens.join("\t"));
                    }
                }
            }
        } else {
            for (let note_num = 0; note_num < parsimony[staff_num].length; note_num++) {
                let parse_part = parsimony[staff_num][note_num];
                if (parse_part instanceof Array) {
                    let token = parse_to_abcdf(parse_part);
                    // console.log("TOKEN : " + token);
                    tokens.push(token);
                    // console.log("TOKENS: " + tokens.join("\t"));
                }
            }
        }
        return tokens;
    }

    function get_abcdf_note_tokens(abcdf_str, staff_num=0) {
        if (! abcdf_str) {
            return [];
        }
        console.log("abcdf string: " + abcdf_str)
        let parsimony = AbcdfRaw_Parser.parse(abcdf_str);
        let lined = LINE_RE.exec(abcdf_str);
        let tokens = get_separated_abcdf_note_tokens(parsimony, staff_num, lined);
        tokens = tokens.filter(function(elem) {
            return elem != "&" && elem != "@";
        });
        return tokens;
    }

    // We return an array of strings that start with the regex re
    // and extend through the beginning of the next match.
    function get_tokens(re, line) {
        if (!line) {
            return [];
        }
        let matches = [];
        let match;
        let start_index = 0;
        let end_index = 0;
        // console.log("get_tokens of " + re + " from >>" + line + '<<');
        while ((match = re.exec(line)) != null) {
            end_index = re.lastIndex;
            // console.log("Start: " + start_index + " End: " + end_index);
            let token_str;
            if (start_index === end_index) {
                token_str = line.substr(start_index);
            } else {
                token_str = line.substr(start_index, end_index - start_index);
            }
            matches.push(token_str);
            start_index = re.lastIndex;
            // console.log("get_tokens: " + match[0] + ' ' + re.lastIndex);
        }
        let remainder = line.substr(start_index);
        if (remainder) {
            let last_match = '';
            if (matches.length > 0) {
                last_match = matches.pop();
            }
            last_match += remainder;
            matches.push(last_match);
        }
        // console.log("Match count: " + matches.length);
        return matches;
    }

    function show_help() {
        let help_window = window.open(HELP_URL, '_blank');
        help_window.focus();
    }

    function open_preferences(e) {
        unhandle_keys();
        let prefs_modal_wrapper = document.getElementById('prefs_modal_wrapper');
        let prefs_modal_window = document.getElementById('prefs_modal_window');
        prefs_modal_wrapper.className = 'overlay';
        let overflow = prefs_modal_window.offsetHeight - document.documentElement.clientHeight;
        if (overflow > 0) {
            prefs_modal_window.style.maxHeight =
                (parseInt(window.getComputedStyle(prefs_modal_window).height) - overflow) + "px";
        }
        prefs_modal_window.style.marginTop = (-prefs_modal_window.offsetHeight) / 2 + "px";
        prefs_modal_window.style.marginLeft = (-prefs_modal_window.offsetWidth) / 2 + "px";
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function open_metadata(e) {
        unhandle_keys();
        let metadata_modal_wrapper = document.getElementById('metadata_modal_wrapper');
        let metadata_modal_window = document.getElementById('metadata_modal_window');
        metadata_modal_wrapper.className = 'overlay';
        let overflow = metadata_modal_window.offsetHeight - document.documentElement.clientHeight;
        if (overflow > 0) {
            metadata_modal_window.style.maxHeight = (parseInt(window.getComputedStyle(metadata_modal_window).height) - overflow) + "px";
        }
        metadata_modal_window.style.marginTop = (-metadata_modal_window.offsetHeight) / 2 + "px";
        metadata_modal_window.style.marginLeft = (-metadata_modal_window.offsetWidth) / 2 + "px";
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function close_metadata(e) {
        let metadata_modal_wrapper = document.getElementById('metadata_modal_wrapper');
        metadata_modal_wrapper.className = "";
        autosave();
        show_keypad();
        handle_keys();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function zoom_out() {
        if (Magnification > MIN_MAGNIFICATION) {
            Magnification -= MAGNIFICATION_INCREMENT;
            rerender();
        }
    }

    function zoom_in() {
        if (Magnification < MAX_MAGNIFICATION) {
            Magnification += MAGNIFICATION_INCREMENT;
            rerender();
        }
    }

    function close_preferences(e) {
        store_preference('preset_preference');
        store_preference('output');
        store_preference('restore');
        store_preference('keypad');
        store_preference('measure_number_interval');
        store_preference('default_authority');
        store_preference('default_authority_year');
        store_preference('default_transcriber');
        let prefs_modal_wrapper = document.getElementById('prefs_modal_wrapper');
        prefs_modal_wrapper.className = "";
        if (Org_Abc_Str) {
            rerender();
            highlight_note(Current_Note);
        }
        show_keypad();
        handle_keys();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    // Returns false if data is not XML.
    function get_xml_encoding(data) {
        let head = data.slice(0, 100);
        if (head.indexOf('<?xml') == -1) {
            return false;
        }
        let encoding_match = head.match(/encoding="([^"]+)"/);
        let encoding = 'utf-8';
        if (encoding_match && encoding_match.length == 2) {
            encoding = encoding_match[1];
        }
        return encoding;
    }

    function xml2abc(data) {
        let xml_options = {};
        let xml_data = $.parseXML(data);
        let result = vertaal(xml_data, xml_options);
        let abc = result[0];
        let error_txt = result[1];
        if (error_txt) {
            console.log('xml2abc ERROR: ' + error_txt);
        }
        if (!abc) {
            alert("Unable to open MusicXML file: " + error_txt);
        }
        return abc;
    }

    function create_cors_request(method, url) {
        let xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // IE
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    }

    function get_extension(file_path) {
        let name_tokens = file_path.split('.');
        return name_tokens[name_tokens.length - 1];
    }

    function mxl2abc(data) {
        let content = '';
        try {
            let zip = new JSZip(data);
            $.each(zip.files, function (index, zip_entry) {
                content = zip_entry.asText();
            });
        } catch (e) {
            alert("Could not open compressed MusicXML file: " + e.message);
            return '';
        }
        let encoding = get_xml_encoding(content);
        if (encoding !== 'UTF-8') {
            alert("Input mxl is not UTF-8 encoded. Cannot open.");
            return '';
        } else {
            content = xml2abc(content);
        }
        return content;
    }

    function make_cors_request(url) {
        let extension = get_extension(url);

        let error_msg = 'The server hosting file does not allow access from this domain. ' +
            'Please download the file outside abcDE and then "Choose file" to work with it.';
        let xhr = create_cors_request('GET', url);
        if (!xhr) {
            alert(error_msg);
            return;
        }
        if (extension === 'mxl') {
            xhr.responseType = 'arraybuffer';
        }

        xhr.onload = function () {
            console.log("File has been retrieved.");
            let content = '';
            if (extension === 'mxl') {
                content = mxl2abc(xhr.response);
                if (!content) {
                    return;
                }
            } else {
                content = xhr.responseText;
                let xml_encoding = get_xml_encoding(content);
                if (xml_encoding) {
                    if (!/^utf/i.test(xml_encoding)) {
                        alert("Input xml is not UTF-8 encoded. Cannot open.");
                        return;
                    } else {
                        content = xml2abc(content);
                    }
                }
            }
            if (content) {
                Previous_Url = url;
                document.getElementById(SOURCE_ID).value = content;
                render_ui();
            }
        };

        xhr.onerror = function () {
            alert(error_msg);
        };

        xhr.send();
    }

    function import_url() {
        let prompt = 'Please enter URL to open.';
        let default_url = CORPORA_URL + '/clementi/11.abc';
        if (Previous_Url) {
            default_url = Previous_Url;
        } else {
            let preferred_url = get_setting('default_url');
            if (preferred_url) {
                default_url = preferred_url;
            }
        }
        let url = window.prompt(prompt, default_url);
        if (url) {
            make_cors_request(url);
        }
    }

    function import_mxl_file(file) {
        let reader = new FileReader();
        let content = '';
        reader.onload = function (e) {
            try {
                let zip = new JSZip(e.target.result);
                $.each(zip.files, function (index, zip_entry) {
                    content = zip_entry.asText();
                });
            } catch (e) {
                alert("Could not open compressed MusicXML file: " + e.message);
                return;
            }
            let encoding = get_xml_encoding(content);
            if (encoding !== 'UTF-8') {
                alert("Input xml is not UTF-8 encoded. Cannot open.");
                return;
            } else {
                content = xml2abc(content);
                document.getElementById(SOURCE_ID).value = content;
                render_ui();
            }
        }
        reader.readAsArrayBuffer(file);
    }

    function import_file() {
        let file_control = document.getElementById("file_input");
        let files = file_control.files;

        if (!files.length) {
            alert('Please select a valid abc file.')
            return;
        }
        let file = files[0];
        let extension = get_extension(file.name);
        if (extension === 'mxl') {
            import_mxl_file(file);
            return;
        }

        let is_xml = false;
        let encoding_reader = new FileReader();
        encoding_reader.onload = function (e) {
            let encoding = get_xml_encoding(encoding_reader.result);
            let reader = new FileReader();
            if (encoding) {
                is_xml = true;
            } else {
                encoding = 'UTF-8';
            }
            reader.onload = function (e) {
                let content = '';
                if (is_xml) {
                    content = xml2abc(reader.result);
                } else {
                    content = e.target.result;
                }
                document.getElementById(SOURCE_ID).value = content;
                render_ui();
            }
            reader.readAsText(file, encoding);
        }
        encoding_reader.readAsText(file, 'UTF-8');
    }

    function toggle_persistence() {
        if (Persist_Annotated) {
            Persist_Annotated = false;
        } else {
            Persist_Annotated = true;
        }
    }

    function display_kids(container, how) {
        let kids = container.children;
        for (let i = 0; i < kids.length; i++) {
            kids[i].style.display = how;
        }
    }

    function show_keypad() {
        let keypad_div = document.getElementById(KEYPAD_DIV_ID);
        let number_div = document.getElementById('number_div');
        let symbol_div = document.getElementById('symbol_div');
        let setting = get_setting('keypad');
        if (setting === 'show') {
            keypad_div.style.display = 'block';
            number_div.style.display = 'block';
            symbol_div.style.display = 'block';
            display_kids(number_div, 'inline');
            display_kids(symbol_div, 'inline');
        } else {
            display_kids(symbol_div, 'none');
            display_kids(number_div, 'none');
            let qualtrics = get_setting('qualtrics');
            let submit_button_id = get_setting('submit_button_id');
            if (qualtrics) {
                let next_button = document.getElementById('q_next');
                next_button.style.display = 'inline';
                let back_button = document.getElementById('q_back');
                if (back_button) {
                    back_button.style.display = 'inline';
                }
            } else if (submit_button_id) {
                let button = document.getElementById(submit_button_id);
                button.style.display = 'inline';
            }
            else {
                number_div.style.display = 'block';
                symbol_div.style.display = 'block';
                keypad_div.style.display = 'none';
            }
        }
    }

    function digits_only(event) {
        let key = event.keyCode || event.which;
        key = String.fromCharCode(key);
        let regex = /[0-9]/;
        if (!regex.test(key)) {
            event.returnValue = false;
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    }

    function insert_text_field(container, id, prompt, html_class, validator, add_break) {
        let field = document.createElement('input');
        field.type = 'text';
        field.class = html_class;
        field.id = id;
        if (validator) {
            field.onkeypress = validator;
        }
        if (html_class === 'year') {
            field.size = '4';
        }
        let label = document.createElement('label');
        label.htmlFor = id;
        label.appendChild(document.createTextNode(prompt));

        container.appendChild(label);
        container.appendChild(field);
        if (add_break) {
            container.appendChild(document.createElement('br'));
        }
    }

    function insert_text_area(container, id, prompt, html_class, row_count, column_count) {
        let field = document.createElement('textarea');
        field.class = html_class;
        field.id = id;
        field.rows = row_count;
        field.cols = column_count;
        let label = document.createElement('label');
        label.htmlFor = id;
        label.appendChild(document.createTextNode(prompt));

        container.appendChild(label);
        container.appendChild(field);
    }

    function insert_label(container, text, html_class) {
        let label = document.createElement("label");
        label.class = html_class;
        let text_node = document.createTextNode(text);
        label.appendChild(text_node);
        container.appendChild(label);
    }

    function insert_radio_buttons(container, prompt, name, ids, labels, selected, add_break) {
        let radio_div = document.createElement('div');
        radio_div.class = 'radio_div';
        insert_label(container, prompt, 'prompt');

        for (let i = 0; i < ids.length; i++) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.id = ids[i];
            if (radio.id === selected) {
                radio.checked = true;
            }
            radio.name = name;

            radio_div.appendChild(radio);
            insert_label(radio_div, labels[i], 'radio_label');

            let space = document.createElement("span");
            space.innerHTML = "&nbsp;&nbsp";
            radio_div.appendChild(space);
        }
        container.appendChild(radio_div);
        if (add_break) {
            container.appendChild(document.createElement('br'));
        }
        return radio_div;
    }

    function insert_spinner(container, prompt, id, min, max, size, value, add_break) {
        let div = document.createElement('div');
        div.class = 'spinner_div';
        insert_label(div, prompt, 'prompt');

        let spinner = document.createElement('input');
        spinner.id = id;
        spinner.min = min;
        spinner.max = max;
        spinner.size = size;
        spinner.type = 'number';
        spinner.value = value;
        div.appendChild(spinner);
        container.appendChild(div);

        if (add_break) {
            container.appendChild(document.createElement('br'));
        }

        return div;
    }

    function insert_metadata_fields() {
        let metadata_holder = document.getElementById(METADATA_DIV_ID);
        let modal_wrapper = document.createElement('div');
        modal_wrapper.id = 'metadata_modal_wrapper';
        metadata_holder.appendChild(modal_wrapper);
        let modal_window = document.createElement('div');
        modal_window.id = 'metadata_modal_window';
        modal_wrapper.appendChild(modal_window);

        let close_div = document.createElement('div');
        close_div.style.textAlign = 'right';
        let closer = document.createElement('a');
        closer.id = 'metadata_modal_close';
        closer.href = "#";
        closer.innerHTML = 'Close <b>X</b>';
        close_div.appendChild(closer);
        closer.addEventListener("click", close_metadata, false);
        modal_window.appendChild(close_div);

        insert_text_field(modal_window, 'authority', 'Authority', 'name', undefined, false);
        insert_text_field(modal_window, 'authority_year', 'Year', 'year', digits_only, true);
        insert_text_field(modal_window, 'transcriber', 'Transcriber', 'name', undefined, true);
        // insert_text_field(metadata_div, 'transcription_date', 'Transcription date', 'date', undefined, true);
        insert_text_area(modal_window, 'comments', 'Comments', 'comments', 10, 50);
    }

    function insert_preference_fields() {
        let prefs_holder = document.getElementById(PREFS_DIV_ID);
        let prefs_modal_wrapper = document.createElement('div');
        prefs_modal_wrapper.id = 'prefs_modal_wrapper';
        prefs_holder.appendChild(prefs_modal_wrapper);

        let prefs_modal_window = document.createElement('div');
        prefs_modal_window.id = 'prefs_modal_window';
        prefs_modal_wrapper.appendChild(prefs_modal_window);

        let close_div = document.createElement('div');
        close_div.style.textAlign = 'right';
        let closer = document.createElement('a');
        closer.id = 'prefs_modal_close';
        closer.href = "#";
        closer.innerHTML = 'Close <b>X</b>';
        close_div.appendChild(closer);
        closer.addEventListener("click", close_preferences, false);
        prefs_modal_window.appendChild(close_div);

        let h = document.createElement('h3');
        h.innerText = 'Preferences';
        prefs_modal_window.appendChild(h);

        let radio_name = 'restore';
        let button_ids = ['always', 'never', 'ask'];
        let button_labels = ['Always', 'Never', 'Ask'];
        if (!Options || !Options[radio_name]) {
            insert_radio_buttons(prefs_modal_window, 'Restore Data',
                radio_name, button_ids, button_labels, 'ask', true);
        }

        radio_name = 'output';
        if (!Options || !Options[radio_name]) {
            button_ids = ['append', 'replace'];
            button_labels = ['Append', 'Replace'];
            insert_radio_buttons(prefs_modal_window, 'Output',
                radio_name, button_ids, button_labels, 'append', true);
        }

        radio_name = 'preset_preference';
        if (!Options || !Options[radio_name]) {
            button_ids = ['first', 'last', 'none'];
            button_labels = ['First', 'Last', 'None'];
            insert_radio_buttons(prefs_modal_window, 'Preset',
                radio_name, button_ids, button_labels, 'first', true);
        }

        radio_name = 'keypad';
        button_ids = ['show', 'hide'];
        button_labels = ['Show', 'Hide'];
        let default_keypad_setting = 'hide';
        let has_touch = 'ontouchstart' in window;
        if (has_touch) {
            default_keypad_setting = 'show';
        }
        insert_radio_buttons(prefs_modal_window, 'Keypad', radio_name,
            button_ids, button_labels, default_keypad_setting, true);

        insert_spinner(prefs_modal_window, 'Measure Number Interval',
            'measure_number_interval', 0, 20, 2, 5, true);

        insert_text_field(prefs_modal_window, 'default_authority', 'Default Authority', 'name', undefined, true);
        insert_text_field(prefs_modal_window, 'default_authority_year', 'Year', 'year', digits_only, true);
        insert_text_field(prefs_modal_window, 'default_transcriber', 'Transcriber Name', 'name', undefined, true);
    }

    function insert_keypad_button(container, button_id, value) {
        let button = document.createElement('input');
        button.type = 'button';
        button.class = 'keypad-button';
        button.id = button_id;
        button.value = value;
        button.onclick = function () {
            buffer_character_input(value);
        };
        container.appendChild(button);
    }

    function tear_down_ui() {
        // Tear down the UI and hide from the incessant
        // Qualtrics.SurveyEngine.addOnload calls.
        let abcde_div = document.getElementById(ABCDE_DIV_ID);
        while (abcde_div.firstChild) {
            abcde_div.removeChild(abcde_div.firstChild);
        }
        abcde_div.remove();
        Ui_In_Place = false;
        if (Autosaver) {
            clearInterval(Autosaver);
        }
    }

    function handle_qualtrics_click(button_id) {
        let qualtrics = get_setting('qualtrics');
        let x_val = getXValue(Org_Abc_Str);
        let abcDF_store = 'abcDF_' + x_val;
        let abcD_store = 'abcD_' + x_val;
        let fingerings = getEnteredCollection();
        Qualtrics.SurveyEngine.setEmbeddedData(abcDF_store, fingerings);
        let abcD = getEnteredAbcD();
        Qualtrics.SurveyEngine.setEmbeddedData(abcD_store, abcD);

        autosave();

        if (button_id === 'q_next') {
            // Salt the earth.
            initialize_globals();
            rerender();
            tear_down_ui();
            Toggling_Background = false;
            qualtrics.enableNextButton();
            qualtrics.enablePreviousButton();
            qualtrics.clickNextButton();
        } else {
            qualtrics.enableNextButton();
            qualtrics.enablePreviousButton();
            qualtrics.clickPreviousButton();
        }
    }

    /* Since our keypad can/will cover the Qualtrics NEXT and BACK
     buttons, we need to include our own on the keypad and mimic
     their behavior.
     */
    function insert_qualtrics_button(container, button_id, value) {
        let button = document.createElement('input');
        button.type = 'button';
        button.class = 'keypad-button';
        button.id = button_id;
        button.value = value;
        button.onclick = function () {
            handle_qualtrics_click(button_id);
        };
        container.appendChild(button);
    }

    /* The caller may need a SUBMIT button, so we make sure it
       is positioned nicely.
     */
    function insert_submit_button(container, button_id, value) {
        let button = document.createElement('input');
        button.type = 'button';
        button.class = 'keypad-button';
        button.id = button_id;
        button.value = value;
        container.appendChild(button);
    }


    function insert_keypad_image_button(container, button_id, file_name, alt) {
        let button = document.createElement('input');
        button.id = button_id;
        button.class = 'keypad_button';
        button.type = 'image';
        button.src = IMAGE_DIR + '/' + file_name;
        button.alt = alt;
        button.onclick = function () {
            handle_navigation_input(button_id);
        };
        container.appendChild(button);
        // button.onclick = import_url;
    }

    function insert_keypad() {
        let keypad_div = document.getElementById(KEYPAD_DIV_ID);
        let number_div = document.createElement('number_div');
        number_div.id = 'number_div';
        let symbol_div = document.createElement('symbol_div');
        symbol_div.id = 'symbol_div';
        keypad_div.appendChild(symbol_div);
        keypad_div.appendChild(document.createElement('br'));
        keypad_div.appendChild(number_div);
        insert_keypad_image_button(number_div, 'undo', 'action-undo.svg', 'undo');
        insert_keypad_image_button(number_div, 'redo', 'action-redo.svg', 'redo');
        insert_keypad_button(number_div, 'one', '1');
        insert_keypad_button(number_div, 'two', '2');
        insert_keypad_button(number_div, 'three', '3');
        insert_keypad_button(number_div, 'four', '4');
        insert_keypad_button(number_div, 'five', '5');
        insert_keypad_button(number_div, 'toggle', 'T');
        insert_keypad_image_button(number_div, 'previous', 'arrow-circle-left.svg', '<-');
        insert_keypad_image_button(number_div, 'next', 'arrow-circle-right.svg', '->');
        let using_qualtrics = get_setting('qualtrics');
        if (using_qualtrics) {
            if (get_setting('qualtrics_back')) {
                insert_qualtrics_button(number_div, 'q_back', 'BACK');
            }
            insert_qualtrics_button(number_div, 'q_next', 'NEXT');
        }
        let submit_button_id = get_setting('submit_button_id');
        if (submit_button_id) {
            let submit_button_label = get_setting('submit_button_label');
            if (! submit_button_label) {
                submit_button_label = 'NEXT';
            }
            insert_submit_button(number_div, submit_button_id, submit_button_label);
        }
        insert_keypad_image_button(symbol_div, 'pencil', 'target.svg', '...');
        insert_keypad_button(symbol_div, 'hyphen', '-');
        insert_keypad_button(symbol_div, 'slash', '/');
        insert_keypad_button(symbol_div, 'open_paren', '(');
        insert_keypad_button(symbol_div, 'close_paren', ')');
        insert_keypad_button(symbol_div, 'short_phrase', ',');
        insert_keypad_button(symbol_div, 'medium_phrase', ';');
        insert_keypad_button(symbol_div, 'long_phrase', '.');
        insert_keypad_image_button(symbol_div, 'backspace', 'delete.svg', '<]');
    }

    function insert_controls() {
        if (Ui_In_Place) {
            return;
        }

        insert_preference_fields();
        insert_metadata_fields();

        let save_button = IMAGE_DIR + '/download_36_x4.png';
        let button_width = '36'; // 16 or 24 or 36

        let control_div = document.getElementById(CONTROLS_DIV_ID);
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let row = document.createElement('tr');
        control_div.appendChild(table);
        table.appendChild(tbody);
        table.style.backgroundColor = 'LightGray';
        table.align = 'center';
        tbody.appendChild(row);

        let downloadify = document.createElement('p');
        downloadify.setAttribute('id', 'downloadify');
        let cell = document.createElement('td');
        cell.appendChild(downloadify);
        row.appendChild(cell);

        let sequence_spinner = document.createElement('input');
        sequence_spinner.id = 'sequence_spinner';
        sequence_spinner.min = '1';
        sequence_spinner.max = '999';
        sequence_spinner.size = 3;
        sequence_spinner.type = 'number';
        sequence_spinner.alt = 'fingering_number';
        sequence_spinner.value = 1;
        sequence_spinner.onchange = load_fingering;
        cell = document.createElement('td');
        insert_label(cell, 'Suggestion', 'sequence_prompt');
        cell.appendChild(sequence_spinner);
        row.appendChild(cell);
        if (!Options.preset_select) {
            cell.style.display = 'none';
        }
        if (Options.preset) {
            sequence_spinner.value = Options.preset;
        }

        let view_button = document.createElement('input');
        view_button.type = 'image';
        view_button.src = IMAGE_DIR + '/eye.svg';
        view_button.width = button_width;
        view_button.alt = 'View';
        view_button.onclick = view_source;
        cell = document.createElement('td');
        cell.appendChild(view_button);
        row.appendChild(cell);
        if (Options.hide_view) {
            cell.style.display = 'none';
        }

        let print_button = document.createElement('input');
        print_button.type = 'image';
        print_button.src = IMAGE_DIR + '/print.svg';
        print_button.width = button_width;
        print_button.alt = 'Print...';
        print_button.onclick = print_score;
        cell = document.createElement('td');
        cell.appendChild(print_button);
        row.appendChild(cell);
        if (Options.hide_print) {
            cell.style.display = 'none';
        }

        cell = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = 'annotated';
        checkbox.checked = Persist_Annotated;
        checkbox.id = 'view_annotated';
        checkbox.onclick = toggle_persistence;
        let label = document.createElement('label');
        label.htmlFor = 'view_annotated';
        label.appendChild(document.createTextNode('Annotated'));
        cell.appendChild(checkbox);
        if (Options.hide_annotated) {
            cell.style.display = 'none';
        }
        cell.appendChild(label);
        row.appendChild(cell);
        if (Options.hide_annotated) {
            cell.style.display = 'none';
        }

        let reset_button = document.createElement('input');
        reset_button.type = 'image';
        reset_button.src = IMAGE_DIR + '/reload.svg';
        reset_button.width = button_width;
        reset_button.alt = 'reset';
        reset_button.onclick = restore_sequence;
        cell = document.createElement('td');
        cell.appendChild(reset_button);
        row.appendChild(cell);
        if (Options.hide_reset) {
            cell.style.display = 'none';
        }

        let copy_button = document.createElement('input');
        copy_button.id = 'copy_fingerings_button';
        copy_button.type = 'image';
        copy_button.src = IMAGE_DIR + '/clipboard.svg';
        copy_button.width = button_width;
        copy_button.alt = 'copy';
        cell = document.createElement('td');
        cell.appendChild(copy_button);
        row.appendChild(cell);
        if (Options.hide_copy) {
            copy_button.style.display = 'none';
        } else {
            new Clipboard('#copy_fingerings_button',
                {text: copy_fingerings});
        }

        let paste_button = document.createElement('input');
        paste_button.type = 'image';
        paste_button.src = IMAGE_DIR + '/paperclip.svg';
        paste_button.width = button_width;
        paste_button.alt = 'paste';
        paste_button.onclick = paste_fingerings;
        cell = document.createElement('td');
        cell.appendChild(paste_button);
        row.appendChild(cell);
        if (Options.hide_paste) {
            paste_button.style.display = 'none';
        }

        let url_button = document.createElement('input');
        url_button.type = 'image';
        url_button.src = IMAGE_DIR + '/globe.svg';
        url_button.width = button_width;
        url_button.alt = 'URL';
        url_button.onclick = import_url;
        cell = document.createElement('td');
        cell.appendChild(url_button);
        row.appendChild(cell);
        if (!Options.url_input) {
            url_button.style.display = 'none';
        }

        let file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.setAttribute('accept', 'text/vnd.abc');
        file_input.onchange = import_file;
        file_input.setAttribute('id', 'file_input');
        cell = document.createElement('td');
        cell.appendChild(file_input);
        row.appendChild(cell);
        if (!Options.file_input) {
            // file_input.style.visibility = 'hidden';
            file_input.style.display = 'none';
        }

        let metadata_button = document.createElement('input');
        metadata_button.type = 'image';
        metadata_button.src = IMAGE_DIR + '/tags.svg';
        metadata_button.alt = 'Metadata...';
        metadata_button.width = button_width;
        metadata_button.onclick = open_metadata;
        cell = document.createElement('td');
        cell.appendChild(metadata_button);
        row.appendChild(cell);
        if (Options.hide_metadata) {
            // file_input.style.visibility = 'hidden';
            metadata_button.style.display = 'none';
        }

        let zoom_out_button = document.createElement('input');
        zoom_out_button.type = 'image';
        zoom_out_button.src = IMAGE_DIR + '/zoom-out.svg';
        zoom_out_button.alt = 'Zoom In';
        zoom_out_button.width = button_width;
        zoom_out_button.onclick = zoom_out;
        cell = document.createElement('td');
        cell.appendChild(zoom_out_button);
        row.appendChild(cell);

        let zoom_in_button = document.createElement('input');
        zoom_in_button.type = 'image';
        zoom_in_button.src = IMAGE_DIR + '/zoom-in.svg';
        zoom_in_button.alt = 'Zoom In';
        zoom_in_button.width = button_width;
        zoom_in_button.onclick = zoom_in;
        cell = document.createElement('td');
        cell.appendChild(zoom_in_button);
        row.appendChild(cell);

        let prefs_button = document.createElement('input');
        prefs_button.type = 'image';
        prefs_button.src = IMAGE_DIR + '/cog.svg';
        prefs_button.alt = 'Preferences...';
        prefs_button.width = button_width;
        prefs_button.onclick = open_preferences;
        cell = document.createElement('td');
        cell.appendChild(prefs_button);
        row.appendChild(cell);
        if (Options.hide_prefs) {
            prefs_button.style.display = 'none';
        }

        let help_button = document.createElement('input');
        help_button.type = 'image';
        help_button.src = IMAGE_DIR + '/info.svg';
        help_button.alt = 'Help';
        help_button.width = button_width;
        help_button.onclick = show_help;
        cell = document.createElement('td');
        cell.appendChild(help_button);
        row.appendChild(cell);

        Downloadify.create('downloadify', {
            filename: function () {
                return Abc_Fname;
            },
            data: get_persisting_abcd,
            onComplete: function () {
                alert('Your file has been saved.');
            },
            onCancel: function () {
                alert('File save has been cancelled.');
            },
            onError: function () {
                alert('File save failed!');
            },
            transparent: false,
            swf: MEDIA_DIR + '/downloadify.swf',
            downloadImage: save_button,
            width: button_width,
            height: button_width,
            append: false
        });

        insert_keypad();

        Ui_In_Place = true;
    }

    function print_note(tag, note) {
        console.log(tag +
            " Line: " + note.line +
            " Start: " + note.start +
                // " Fingered start: " + note.fingered_start +
                // " Fingering: " + note.fingering +
            " Time: " + note.time +
            " String: " + note.string +
            " Size: " + note.size +
            " Pitch: " + note.pitches.join(',') +
            " Voice: " + note.voice +
            " Staff: " + note.staff +
            " Grace: " + note.grace);
    }

    function purge_redo_stack() {
        for (let i = 0; i < Notes.length; i++) {
            let note = Notes[i];
            note.undone_fingerings = [];
        }
        Redo = [];
    }

    function Note(music_types, elem) {
        if (music_types[elem.type] != 'note' &&
            music_types[elem.type] != 'grace') {
            return {};
        }

        this.fingering = '';
        this.preset_fingering = '';
        this.prior_note = null;
        this.next_note = null;
        this.line = -1; // Unknown until SVGs are generated.
        this.grace = false;

        this.size = 0;
        this.pitches = [];
        this.start = elem.istart; // For finding position in ABC.
        this.end = -1;
        this.starts = [];
        this.stops = [];
        this.phrase_break = '';
        this.preset_phrase_break = '';

        if (music_types[elem.type] === 'note') {
            this.size = elem.notes.length;
            for (let i = 0; i < this.size; i++) {
                this.pitches.push(elem.notes[i].pit);
            }
            // Make sure chord pitches are ordered from low to high.
            this.pitches.sort(function (a, b) {
                return parseInt(a) - parseInt(b);
            });
            this.end = elem.iend;
        } else {
            this.grace = true;
            this.size = 1;
            let last_note = elem.extra;
            if (!last_note.notes) {
                alert("Who turned off the notes?!");
                return {}; // Skip grace notes with no notes. This seems like an abc2svg bug.
            }
            while (true) {
                // FIXME: We do not allow chords within grace notes.
                if (last_note.notes.length > 1) {
                    alert('Chords not supported in a grace "note."');
                }

                // We will need to embed fingering decorations (e.g., "!2!") prior to
                // each element of the grace note, and we don't want to parse the abc
                // string ourselves, so we steal the spans from the abc2svg parse.
                this.starts.push(last_note.istart);
                this.stops.push(last_note.iend);

                this.pitches.push(last_note.notes[0].pit);
                if (!last_note.next) {
                    this.end = last_note.iend + 1;
                    break;
                }
                last_note = last_note.next;
                this.size++;
            }
        }

        this.string = Org_Abc_Str.substring(this.start, this.end);
        this.time = elem.time;
        this.voice = elem.v;
        this.staff = elem.st;
        this.prior_fingerings = [];
        this.undone_fingerings = [];
        this.locked = false;

        this.init = function() {
            this.fingering = '';
            for (let i = 0; i < this.size; i++) {
                this.fingering += 'x';
            }
            this.phrase_break = '';
        };

        this.preset_init = function() {
            this.preset_fingering = '';
            for (let i = 0; i < this.size; i++) {
                this.preset_fingering += 'x';
            }
            this.preset_phrase_break = '';
        };

        this.init();

        this.set_fingering = function(fingering_str) {
            if (this.locked) {
                this.fingering = this.preset_fingering;
                return;
            }
            purge_redo_stack();
            if (this.fingering != 'x') {
                this.prior_fingerings.push(this.fingering);
            }
            if (! fingering_str) {
                this.init();
            } else {
                let match = PHRASE_RE.exec(fingering_str);
                if (match) {
                    this.phrase_break = match[1];
                    this.fingering = fingering_str.replace(PHRASE_RE, '');
                } else {
                    this.fingering = fingering_str;
                }
            }
            Undo.push(this);
        };

        this.set_preset_fingering = function(fingering_str) {
            if (! fingering_str) {
                this.preset_init();
            } else {
                if (Options['preset_lock']) {
                    if (!/x/.test(fingering_str)) {
                        this.locked = true;
                    }
                }
                let match = PHRASE_RE.exec(fingering_str);
                if (match) {
                    this.preset_phrase_break = match[1];
                    this.preset_fingering = fingering_str.replace(PHRASE_RE, '');

                } else {
                    this.preset_fingering = fingering_str;
                }
            }
        };

        this.get_pitch_fingering = function(leaf_node) {
            let current_hand = get_current_hand(this);
            if (! leaf_node.fingering.strike) {
                return 'x';
            }
            let hand = leaf_node.fingering.strike.hand || current_hand;
            let str = hand + leaf_node.fingering.strike.digit;
            if (leaf_node.fingering.release) {
                hand = leaf_node.fingering.release.hand || current_hand;
                str += '-' + hand + leaf_node.fingering.release.digit;
            }
            return str;
        };

        // Return the abcDF defining the fingering part of the annotation alone.
        // Omit any phrase segmenter if present.
        this.get_fingering_from_score_fingering = function(score_fingering) {
            let str = '';
            let elements = [];
            let element_fingering;
            let i;
            if (score_fingering.first.ornaments) {
                elements = score_fingering.first.ornaments;
                str += '(';
                for (i = 0; i < elements.length; i++) {
                    element_fingering = elements[i];
                    str += this.get_pitch_fingering(element_fingering);
                }
                str += ')';
            } else {
                str += this.get_pitch_fingering(score_fingering.first);
            }
            if (score_fingering.last && score_fingering.last.ornaments) {
                elements = score_fingering.last.ornaments;
                str += '(';
                for (i = 0; i < elements.length; i++) {
                    element_fingering = score_fingering.last.ornaments[i];
                    str += '/' + this.get_pitch_fingering(element_fingering);
                }
                str += ')';
            } else if (score_fingering.last) {
                str += '/' + this.get_pitch_fingering(score_fingering.last);
            }
            return str;
        };

        // Update this note according to array of "score_fingering" elements
        // from "cooked" abcDF parse.
        this.update_from_score_fingerings = function(new_score_fingerings) {
            this.init();
            let new_fingering = '';
            let finger_count = 0;

            while (finger_count < this.size) {
                let score_fingering = new_score_fingerings.shift();
                let abcdf = this.get_fingering_from_score_fingering(score_fingering);
                if (score_fingering.segmenter) {
                    this.phrase_break = score_fingering.segmenter || '';
                }
                new_fingering += abcdf;
                finger_count++;
                if (new_score_fingerings.length === 0) {
                    break;
                }
            }

            if (finger_count === this.size) {
                this.set_fingering(new_fingering);
                return true; // Move on.
            }

            for (; finger_count < this.size; finger_count++) {
                new_fingering += 'x';
            }

            this.set_fingering(new_fingering);
            return false; // Note is not fully fingered. Do not move on to next "note."
        };

        this.undo_fingering_change = function() {
            if (this.prior_fingerings.length > 0) {
                this.undone_fingerings.push(this.fingering);
                this.fingering = this.prior_fingerings.pop();
            }
            Redo.push(this);
        };

        this.redo_fingering_change = function() {
            if (this.undone_fingerings.length > 0) {
                if (this.fingering) {
                    this.prior_fingerings.push(this.fingering);
                }
                this.fingering = this.undone_fingerings.pop();
            }
            Undo.push(this);
        };

        // Return the fingering part of the abcDF string stored for this note,
        this.get_fingering = function() {
            if (! this.fingering) {
                return undefined;
            }
            return this.fingering;
        };

        // Return the fingering part of the abcDF string stored for this note,
        this.get_preset_fingering = function() {
            if (! this.preset_fingering) {
                return undefined;
            }
            return this.preset_fingering;
        };

        // Return the full abcDF segment associated with this note, suitable for
        // embedding in an abcD header.
        this.get_abcdf = function() {
            if (! this.phrase_break) {
                return this.fingering;
            }
            if (! this.fingering) {
                return "x" + this.phrase_break;
            }
            return this.fingering + this.phrase_break;
        };

        this.get_preset_abcdf = function() {
            if (! this.preset_phrase_break) {
                return this.preset_fingering;
            }
            if (! this.preset_fingering) {
                return "x" + this.preset_phrase_break;
            }
            return this.preset_fingering + this.preset_phrase_break;
        };

        this.get_phrase_break = function() {
            // if (! this.phrase_break) {
                // return undefined;
            // }
            return this.phrase_break;
        };

        this.get_preset_phrase_break = function() {
            // if (! this.phrase_break) {
            // return undefined;
            // }
            return this.preset_phrase_break;
        };

        return this;
    }

    function get_score_width() {
        let width_in_inches = 8.5;
        if (Magnification !== 1) {
            width_in_inches *= Magnification;
        }
        let width_str = 'width="' + width_in_inches + 'in"';
        return width_str;
    }

    function containing_note_index(start) {
        // Note_At always indexes by istart--the actual beginning of
        // the note string. anno_start provides direct access to
        // grace-note pitches. So we might need to move left.
        let index = start;
        if (Preprocessing_Completed) {
            while (! (index in Fingered_Note_At)) {
                index--;
            }
        } else {
            while (! (index in Note_At)) {
                index--;
            }
        }
        return index;
    }

    function User() {
        this.read_file = function (fn) {
            return '';
        };
        this.errmsg = function (msg, l, c) {
            let diverr = document.getElementById(ERROR_DIV_ID);
            diverr.innerHTML += msg + "<br/>\n";
        };
        this.img_out = function (str) {
            let re = /<svg /;
            if (str.match(re)) {
                str = str.replace(re, '<svg id="line_' + Current_Line_Number + '" ');
                Current_Line_Number++;
            }

            Abc_Images += str;
        };
        this.anno_start = function (type, start, stop, x, y, w, h) {
            // keep the source reference
            Ref.push([start, stop])

            let index = start;
            if (type === 'grace') {
                index = containing_note_index(start);
            }

            if (!Preprocessing_Completed && index in Note_At) {
                Note_At[index].line = Current_Line_Number;
                // print_note('anno_start', Note_At[start]);
            }
            // create a container for the music element
            My_Abc.out_svg('<g class="e_' + index + '">\n')
        };
        this.anno_stop = function (type, start, stop, x, y, w, h) {
            let index = start;
            if (type === 'grace') {
                index = containing_note_index(start);
            }
            // close the container
            My_Abc.out_svg('</g>\n');

            // create a rectangle
            if (type === 'note' || type === 'grace') {
                My_Abc.out_svg('<rect class="abcr _' + index + '" x="');
                My_Abc.out_sxsy(x, '" y="', y);
                My_Abc.out_svg('" width="' + w.toFixed(2) +
                    '" height="' + h.toFixed(2) + '"/>\n')
            }
        };
        this.get_abcmodel = function (tsfirst, voice_tb, music_types) {
            if (Preprocessing_Completed) {
                // We only do this once--for the original abc.
                return;
            }
            console.log(music_types)
            for (let v = 0; v < voice_tb.length; v++) {
                console.log("Voice: " + v);
                let staff_id = voice_tb[v].st;
                Voice_Staff[v] = staff_id;
            }
            let elem = tsfirst;
            while (elem) {
                let note = new Note(music_types, elem);
                if (note.start) {
                    Notes.push(note);
                    Note_At[note.start] = note; // !! We link to the overall order of note.
                    if (!(note.staff in Staff_Notes_At_Time)) {
                        Staff_Notes_At_Time[note.staff] = {};
                    }
                    if (!(note.time in Staff_Notes_At_Time[note.staff])) {
                        Staff_Notes_At_Time[note.staff][note.time] = [];
                    }
                    Staff_Notes_At_Time[note.staff][note.time].push(note);
                }
                elem = elem.ts_next;
            }
        };
        // -- optional attributes
        this.page_format = false;		// define the non-page-breakable blocks
        this.imagesize = get_score_width();
    }

    function order_notes(a, b) {
        let time_order = parseInt(a.time) - parseInt(b.time);
        if (time_order !== 0) {
            return time_order;
        }

        // Egads! Voices are speaking at the same time.
        // Grace notes always precede non-grace notes...
        // if (a.grace && b.grace) {
            // alert("Conflicting grace notes.")
        // }
        if (a.grace && ! b.grace) {
            return -1;
        }
        if (b.grace && ! a.grace) {
            return 1;
        }

        // We have notes and/or chords starting at the same time.
        // The pitches of any chords will be ordered from low to high.
        // A note comes before another note only if all of its pitches are
        // lower than all of the other note's pitches.
        // If there is a tie, we rely on voice order. The logic that applies
        // the annotations to the abc will sort this out by looking at the
        // actual pitches in the synchronous notes.
        //
        if (a.pitches[a.pitches.length - 1] < b.pitches[0]) {
            return -1
        }
        if (a.pitches[0] > b.pitches[b.pitches.length - 1]) {
            return 1
        }
        if (a.voice < b.voice) {
            // We have another mechanism to assign fingerings to synchronous
            // notes in the correct pitch order. The only issue is with duplicate
            // notes. The voice order will allow us to disambiguate these pitches.
            console.log("NOTES SORTED BY VOICE!");
            return -1;
        }
        return 1;
    }

    function sort_notes_in_finger_order() {
        let note, line, staff;
        // We need the notes ordered in the same way that fingerings
        // will be entered by the user. First, we segregate the notes
        // into appropriate line/staff containers.
        for (let i = 0; i < Notes.length; i++) {
            note = Notes[i];
            line = note.line; // Not set until SVGs are generated!
            staff = note.staff;
            if (!(line in Notes_On_Line)) {
                Notes_On_Line[line] = [];
                Notes_On_Line[line][0] = []; // Upper staff notes.
                Notes_On_Line[line][1] = []; // Lower staff notes.
            }
            Notes_On_Line[line][staff].push(note);
        }
        // We sort these in the order in which users will
        // enter fingerings (namely, left to right and low to high).
        for (line = 0; line < Notes_On_Line.length; line++) {
            for (staff = 0; staff < 2; staff++) {
                let staff_line_notes = Notes_On_Line[line][staff];
                staff_line_notes.sort(order_notes);
            }
        }

        let this_note, prior_note;
        for (staff = 0; staff < 2; staff++) {
            for (line = 0; line < Notes_On_Line.length; line++) {
                let staff_line_notes = Notes_On_Line[line][staff];
                for (let i = 0; i < staff_line_notes.length; i++) {
                    this_note = staff_line_notes[i];
                    if (!prior_note) {
                        prior_note = this_note;
                        this_note.prior_note = undefined;
                        continue;
                    }
                    prior_note.next_note = this_note;
                    this_note.prior_note = prior_note;
                    prior_note = this_note;
                }
            }
        }
        this_note.next_note = undefined;
    }

    function sort_note_locations() {
        let key;
        for (key in Note_At) {
            if (Note_At.hasOwnProperty(key)) {
                Sorted_Note_Locations.push(key);
            }
        }
        Sorted_Note_Locations.sort(function (a, b) {
            return parseInt(a) - parseInt(b);
        });
    }

    function get_font_for_hand(hand) {
        // We will use typesetting of the fingering annotations to
        // distinguish RH from LH fingerings. Color seems like a better choice,
        // but I don't see a way to set color.
        let font = '$1'; // Times-Roman for RH fingerings.
        if (hand.match(RH_RE)) {
            font = '$1';
        }
        if (hand.match(LH_RE)) {
            font = '$2'; // Helvetica-Bold font for LH fingerings.
        }
        return font;
    }

    function get_annotation_position(fingering) {
        let position = "^";
        if (/^</.test(fingering)) {
            position = "_";
        }
        return position;
    }

    function get_ornament_annotation_str(fingering) {
        let lh_font = get_font_for_hand('<');
        let rh_font = get_font_for_hand('>');
        let cooked_fingering = fingering.replace(/[\)\(]/g, '');
        // let fingers = get_tokens(FINGER_RE, cooked_fingering);
        let fingers = get_abcdf_note_tokens(cooked_fingering);
        let annotation_str = '';
        for (let i = 0; i < fingers.length; i++) {
            fingers[i] = fingers[i].replace(LH_RE, lh_font);
            fingers[i] = fingers[i].replace(RH_RE, rh_font);
            annotation_str += fingers[i];
        }
        annotation_str += '"';
        let position = get_annotation_position(cooked_fingering);
        annotation_str = '"' + position + annotation_str;
        return annotation_str;
    }

    function get_annotation_str(fingers, staff, pad_missing_fingers) {
        let actual_finger_seen = false;
        let lh_font = get_font_for_hand('<');
        let rh_font = get_font_for_hand('>');
        let annotations = [];
        for (let i = 0; i < fingers.length; i++) {
            let annotation = '';
            let finger = 'x';
            if (fingers[i] && fingers[i] !== 'x') {
                actual_finger_seen = true;
                finger = fingers[i];
            } else if (!pad_missing_fingers) {
                break;
            } else if (!fingers[i] || (fingers[i] && fingers[i] === 'x')) {
                continue;
            }
            if (finger.match(/^\(/)) {
                annotation = get_ornament_annotation_str(finger);
            } else {
                let position = get_annotation_position(finger);
                finger = finger.replace(LH_RE, lh_font);
                finger = finger.replace(RH_RE, rh_font);
                annotation = '"' + position + finger + '"';
            }
            annotation = annotation.replace(PHRASE_RE, '');
            annotations.unshift(annotation);
        }

        let annotation_str = '';
        if (actual_finger_seen) {
            annotation_str = annotations.join('');
        }

        return annotation_str;
    }

    function get_single_note_annotation(note) {
        let finger_str = note.fingering;
        if (finger_str === 'x') {
            return '';
        }
        finger_str = finger_str.replace(SPACE_RE, '');
        // let fingers = get_tokens(FINGER_RE, finger_str);
        let fingers = get_abcdf_note_tokens(finger_str);

        let note_annotation = get_annotation_str(fingers, note.staff, false);
        return note_annotation;
    }

    function get_sorted_synchronous_pits(notes_with_pits) {
        let pits = [];
        for (let pit in notes_with_pits) {
            if (notes_with_pits.hasOwnProperty(pit)) {
                pits.push(pit);
            }
        }
        pits.sort(function (a, b) {
            return parseInt(a) - parseInt(b);
        });
        return pits;
    }

    function get_sorted_synchronous_notes_with_pit(synchronous_notes) {
        let pits = [];
        let notes_with_pit = {};
        for (let i = 0; i < synchronous_notes.length; i++) {
            let test_note = synchronous_notes[i];
            if (test_note.grace) {
                // Grace notes, though recorded as synchronous, really precede
                // the synchronous note group.
                continue;
            }
            for (let j = 0; j < test_note.pitches.length; j++) {
                let pit = test_note.pitches[j];
                pits.push(pit);
                if (!(pit in notes_with_pit)) {
                    notes_with_pit[pit] = [];
                }
                notes_with_pit[pit].push(test_note);
            }
        }

        for (let i = 0; i < notes_with_pit.length; i++) {
            notes_with_pit[i].sort(order_notes);
        }

        return notes_with_pit;
    }

    // Return an array of fingering strings with one element for each pitch
    // in the input array of synchronous notes. Empty strings are returned for each
    // pit that has no fingering specified.
    function get_synchronous_fingering_array(synchronous_notes) {
        let notes_with_pit = get_sorted_synchronous_notes_with_pit(synchronous_notes);

        // Now we need to map each synchronous pitch to the correct
        // fingering annotation. The fingering is assigned to pitches
        // in ascending order and, in the event of ties, by ascending
        // voice number.
        let pits = get_sorted_synchronous_pits(notes_with_pit);

        let ordered_fingers = [];
        for (let i = 0; i < pits.length; i++) {
            let pit = pits[i];
            for (let j = 0; j < notes_with_pit[pit].length; j++) {
                let pit_note = notes_with_pit[pit][j];
                let note_finger_str = pit_note.fingering;
                // let fingers = get_tokens(FINGER_RE, note_finger_str);
                let fingers = get_abcdf_note_tokens(note_finger_str);
                for (let k = 0; k < pit_note.pitches.length; k++) {
                    let pn_pit = pit_note.pitches[k];
                    if (pn_pit === parseInt(pit)) {
                        if (fingers[k] !== 'x') {
                            ordered_fingers.push(fingers[k]);
                        } else {
                            ordered_fingers.push('');
                        }
                    }
                }
            }
        }
        return ordered_fingers;
    }

    function get_grace_note_count(synchronous_notes) {
        // FIXME: What if two grace notes appear in the same staff at the same time?
        // We count them here, but we don't account for this possibility anywhere.
        // This should be a test case.
        let count = 0;
        for (let i = 0; i < synchronous_notes.length; i++) {
            if (synchronous_notes[i].grace) {
                count++;
            }
        }
        return count;
    }

    function get_note_annotation(note) {
        if (note.size > 1) {
            console.log("BIGGIE");
        }
        if (note.grace) {
            return get_single_note_annotation(note);
        }
        let synchronous_notes = Staff_Notes_At_Time[note.staff][note.time];
        let grace_note_count = get_grace_note_count(synchronous_notes);
        let big_note_count = synchronous_notes.length - grace_note_count;
        if (big_note_count < 2) {
            return get_single_note_annotation(note);
        }

        synchronous_notes.sort(order_notes);

        let i = 0;
        let lowest_note = synchronous_notes[0];
        while (lowest_note.grace) {
            i++;
            lowest_note = synchronous_notes[i];
        }
        //if (synchronous_notes[0].grace) {
            //lowest_note = synchronous_notes[1];
        //}

        if (note !== lowest_note) {
            // Only annotate first note (as sorted by lowest pitch, then voice).
            return '';
        }

        let ordered_fingers = get_synchronous_fingering_array(synchronous_notes);
        return get_annotation_str(ordered_fingers, note.staff, true);
    }

    function first_relevant_grace_note_index(note) {
        let first_relevant_index = note.starts[0] - note.start;
        return first_relevant_index;
    }

    // Return the preamble to grace note abc string.
    function grace_note_prefix(note) {
        let relevant_index = first_relevant_grace_note_index(note);
        let prefix = note.string.substring(0, relevant_index);
        return prefix;
    }

    function get_grace_note_tokens(note) {
        let tokens = [];

        let starts = note.starts;
        let stops = note.stops;
        let str = note.string;
        str = str.substring(first_relevant_grace_note_index(note));  // Skip preamble like "{/"
        let normalized_starts = [];
        let normalized_stops = [];
        for (let i = 0; i < starts.length; i++) {
            normalized_starts.push(starts[i] - starts[0]);
            normalized_stops.push(stops[i] - starts[0]);
        }

        for (let j = 0; j < normalized_starts.length; j++) {
            let token = str.substring(normalized_starts[j], normalized_stops[j]);
            tokens.push(token);
        }

        return tokens;
    }

    function get_fingered_grace_note(note) {
        let abc_str = grace_note_prefix(note);
        let grace_tokens = get_grace_note_tokens(note);
        // Only single digits are allowed for each grace note token
        // (no slashes, hyphens, or ornaments).
        // FIXME: This should be enforced in the UI.
        let finger_tokens = [];
        if (note.fingering) {
            // finger_tokens = get_tokens(FINGER_RE, note.fingering);
            finger_tokens = get_abcdf_note_tokens(note.fingering);
        }

        for (let token_num = 0; token_num < grace_tokens.length; token_num++) {
            if (finger_tokens[token_num]) {
                let naked_finger = finger_tokens[token_num];
                naked_finger = naked_finger.replace(RL_RE, '');
                if (naked_finger !== 'x') {
                    abc_str += "!" + naked_finger + "!";
                }
            }
            abc_str += grace_tokens[token_num];
        }

        abc_str += '}';
        return abc_str;
    }

// For synchronous notes, we need to look for fingerings in all notes
// to see if there is something to say about any of them.
    function is_epoch_fingered(note) {
        if (note.fingering) {
            return true;
        }

        let synchronous_notes = Staff_Notes_At_Time[note.staff][note.time];
        for (let i = 0; i < synchronous_notes.length; i++) {
            if (synchronous_notes[i].grace) {
                // Grace notes really precede the epoch.
                continue;
            }
            if (synchronous_notes[i].fingering) {
                return true;
            }
        }
        return false;
    }

    function fonts_set_in_source() {
        if (Fonts_Set_In_Source !== undefined) {
            return Fonts_Set_In_Source;
        }
        Fonts_Set_In_Source = false;
        let found_one = false;
        let found_two = false;
        let lines = Org_Abc_Str.split("\n");
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.match(/^%%setfont-1/)) {
                found_one = true;
            }
            if (line.match(/^%%setfont-2/)) {
                found_two = true;
            }
            if (found_one && found_two) {
                Fonts_Set_In_Source = true;
                break;
            }
        }

        return Fonts_Set_In_Source;
    }

    function numbering_set_in_source() {
        if (Numbering_Set_In_Source !== undefined) {
            return Numbering_Set_In_Source;
        }
        Numbering_Set_In_Source = false;
        let lines = Org_Abc_Str.split("\n");
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.match(/^%%measurenb\s+\d+/)) {
                Numbering_Set_In_Source = true;
                break;
            }
        }

        return Numbering_Set_In_Source;
    }

    function grace_notes_in_source() {
        if (Grace_Notes_In_Source !== undefined) {
            return Grace_Notes_In_Source
        }
        Grace_Notes_In_Source = false;
        for (let i = 0; i < Sorted_Note_Locations.length; i++) {
            let sorted_loc = Sorted_Note_Locations[i];
            let note = Note_At[sorted_loc];
            if (note.grace) {
                Grace_Notes_In_Source = true;
                break;
            }
        }
        return Grace_Notes_In_Source;
    }

    function get_abc_phrase_annotation(note) {
        let abcDF_mark = note.get_phrase_break();
        let abc_mark = '';
        switch (abcDF_mark) {
            case ',':
                abc_mark = '!shortphrase!';
                break;
            case ';':
                abc_mark = '!mediumphrase!';
                break;
            case '.':
                abc_mark = '!longphrase!';
                break;
        }
        return abc_mark;
    }

    function get_fingered_abc_str() {
        // Loop over Note_At in numeric order and add each abc annotation we know about,
        // so rendered notation includes all the right marks.

        let fingered_str = '';

        // If we see fonts, we assume we put them there, so we don't want
        // to add any of our special macros ("hackros"). Otherwise, we do.
        if (!fonts_set_in_source()) {
            fingered_str += SETFONT_COMMANDS + "\n";
            if (grace_notes_in_source()) {
                fingered_str += GRACE_NOTE_DECORATIONS + "\n";
            }
        }

        if (!numbering_set_in_source()) {
            let numbering_setting = get_setting('measure_number_interval');
            if (numbering_setting) {
                fingered_str += '%%measurenb ' + numbering_setting + "\n";
            }
        }

        Fingered_Note_At = {};
        let org_prior_loc = 0;
        for (let i = 0; i < Sorted_Note_Locations.length; i++) {
            let sorted_loc = Sorted_Note_Locations[i];
            let note = Note_At[sorted_loc];
            let prologue = '';
            let org_start_loc = parseInt(note.start);
            let org_end_loc = parseInt(note.end);
            prologue = Org_Abc_Str.substring(org_prior_loc, org_start_loc);
            fingered_str += prologue;
            if (note.grace) {
                // The fingering annotations are embedded in the grace note (like "!1!"),
                // We will find the note by the beginning of the whole thing.
                note.fingered_start = fingered_str.length;
                fingered_str += get_fingered_grace_note(note);
            } else {
                fingered_str += get_abc_phrase_annotation(note);
                if (is_epoch_fingered(note)) {
                    fingered_str += get_note_annotation(note);
                }
                // fingered_start is where the actual note starts *after the fingering annotation*.
                note.fingered_start = fingered_str.length;
                fingered_str += note.string;
            }
            org_prior_loc = org_end_loc; // One past the end of the note string.
            Fingered_Note_At[note.fingered_start] = note;
        }
        fingered_str += Org_Abc_Str.substring(org_prior_loc);
        return fingered_str;
    }

    function rerender() {
        Toggling_Background = true;
        Rerender_Count++;
        console.log("RERENDERING NUMBER " + Rerender_Count);
        let start_time = new Date().getTime();
        let target = document.getElementById(TARGET_DIV_ID),
            diverr = document.getElementById(ERROR_DIV_ID);
        let user = new User();
        My_Abc = new Abc(user);

        let abc_str = get_fingered_abc_str();
        ///console.log("New abc: " + abc_str);
        let end_time = new Date().getTime();
        let elapsed = end_time - start_time;
        console.log("MY LAG: " + elapsed);
        document.getElementById(SOURCE_ID).value = abc_str;

        start_time = new Date().getTime();
        Abc_Images = '';
        My_Abc.tosvg('edit', '%%bgcolor white\n\
%%beginsvg\n\
<style type="text/css">\n\
	rect.abcr {fill:#a08000; fill-opacity:0}\n\
	rect.abcr:hover {fill-opacity:0.3}\n\
</style>\n\
%%endsvg\n');

        Current_Line_Number = 0;
        diverr.innerHTML = '';
        Ref = []
        try {
            My_Abc.tosvg(Abc_Fname, document.getElementById(SOURCE_ID).value);
        } catch (e) {
            alert(e.message + '\nabc2svg tosvg bug - stack:\n' + e.stack);
            return;
        }

        try {
            target.innerHTML = Abc_Images;
        } catch (e) {
            alert(e.message + '\nabc2svg image bug - abort:\n' + e.stack);
            return;
        }

        // set callbacks on all abc rectangles
        setTimeout(function () {
            let elts = document.getElementsByClassName('abcr'),
                i = elts.length,
                elt;
            while (--i >= 0) {
                elt = elts[i];
                elt.onclick = function () {
                    process_note_click(this);
                }
                elt.ondblclick = function () {
                    process_note_dblclick(this);
                }
            }
        }, 300)

        end_time = new Date().getTime();
        elapsed = end_time - start_time;
        console.log("LIB LAG: " + elapsed);
        show_keypad();
    }

    function get_char(event) {
        if (event.which == null) {
            return String.fromCharCode(event.keyCode);
        } else if (event.which != 0 && event.charCode != 0) {
            return String.fromCharCode(event.which);
        } else {
            return null;
        }
    }

    function handle_key_code(key_code) {
        console.log(String.fromCharCode(key_code) + " --> " + key_code);
        // If we are navigating, we abandon any pending changes:

        if (key_code === BACKSPACE_CODE) {
            punt_on_input();
            let current_characters = get_unblanked_current_characters();
            if (current_characters.length > 0 && current_characters[0]) {
                Current_Note.set_fingering('');
                Current_Note.phrase_break = '';
                rerender();
            } else if (Current_Note.prior_note) {
                Current_Note = Current_Note.prior_note;
                Current_Note.set_fingering('');
                rerender();
            }
            highlight_note(Current_Note);
        } else if (key_code == TAB_CODE || key_code == RIGHT_ARROW_CODE) {
            flush_buffer();
            Trailing_Characters = [];
            if (Current_Note.next_note) {
                Current_Note = Current_Note.next_note;
            }
        } else if (key_code == LEFT_ARROW_CODE) {
            flush_buffer();
            Trailing_Characters = [];
            if (Current_Note.prior_note) {
                Current_Note = Current_Note.prior_note;
            }
        } else if (key_code == ENTER_CODE) {
            collect_manual_input();
        } else if (key_code == Z_CODE) {
            undo();
        } else if (key_code == Y_CODE) {
            redo();
        } else {
            return false;
        }

        highlight_note(Current_Note);
        return true;
    }

    function handle_keydown(e) {
        let key_code = e.keyCode;
        let event_handled = handle_key_code(key_code);
        if (event_handled) {
            e.preventDefault();
        }
        return event_handled;
    }

    function handle_navigation_input(button_id) {
        let key_code = TAB_CODE;
        switch (button_id) {
            case 'previous':
                key_code = LEFT_ARROW_CODE;
                break;
            case 'next':
                key_code = RIGHT_ARROW_CODE;
                break;
            case 'backspace':
                key_code = BACKSPACE_CODE;
                break;
            case 'pencil':
                key_code = ENTER_CODE;
                break;
            case 'undo':
                key_code = Z_CODE;
                break;
            case 'redo':
                key_code = Y_CODE;
                break;
        }
        let event_handled = handle_key_code(key_code);
        if (event_handled) {
            e.preventDefault();
        }
        return event_handled;
    }

    function toggle_hand() {
        if (Toggled) {
            Toggled = false;
            if (Toggling_Background) {
                document.body.style.backgroundColor = "white";
            }
        } else {
            Toggled = true;
            if (Toggling_Background) {
                document.body.style.backgroundColor = "black";
            }
        }
        highlight_note(Current_Note);
    }

    function get_current_hand(note) {
        if (Toggled) {
            if (note.staff == 0) {
                return '<';
            } else {
                return '>';
            }
        }
        return get_staff_hand(note.staff);
    }

    function get_staff_hand(staff) {
        if (staff == 0) {
            return '>';
        }
        return '<';
    }

    // Update sequence of Notes, starting with Current_Note,
    // according to the provided abcDF parse.
    function finger_notes_from_parse(parse) {
        let new_score_fingerings = parse.upper.score_fingerings;
        while (new_score_fingerings.length > 0) {
            if (Current_Note.update_from_score_fingerings(new_score_fingerings) &&
                Current_Note.next_note) {
                Current_Note = Current_Note.next_note;
            }
        }
        if (Open_Ornament) {
            Current_Note = Current_Note.prior_note;
        }
    }

    function punt_on_input() {
        Open_Ornament = false;
        Input_Buffer = [];
        Trailing_Characters = [];
        rerender();
        highlight_note(Current_Note);
    }

    function get_unblanked_current_characters() {
        let unblanked_chars = [];

        let fingering = Current_Note.get_fingering();
        let current_fingerings = fingering.split('');
        for (let i = 0; i < current_fingerings.length; i++) {
            let char = current_fingerings[i];
            if (char === 'x') {
                unblanked_chars.push('');
            } else {
                unblanked_chars.push(char);
            }
        }
        // if (Current_Note.phrase_break) {
            // if (unblanked_chars.length == 0) {
                // unblanked_chars.push('x')
            // }
            // unblanked_chars.push(Current_Note.phrase_break)
        // }
        return unblanked_chars;
    }

    function buffer_current_fingering() {
        let current_characters = get_unblanked_current_characters();
        while (current_characters.length) {
            let char = current_characters.pop();
            if (char) {
                Input_Buffer.unshift(char);
            }
        }
    }

    function are_within_ornament() {
        for (let i = 0; i < Trailing_Characters.length; i++) {
            if (Trailing_Characters[i] === '(') {
                return true;
            }
        }
        return false;
    }

    function flush_buffer() {
        let modifying_prior_note = false;
        if (Trailing_Characters.length > 0) {
            // Insert modifying characters not processed last time.
            Array.prototype.unshift.apply(Input_Buffer, Trailing_Characters);
            if (! are_within_ornament()) {
                modifying_prior_note = true;
            }
        }

        // Remember any trailing characters entered for next time we flush.
        Trailing_Characters = [];
        for (let i = Input_Buffer.length - 1; i >= 0; i--) {
            if (/[\-\/\(]/.test(Input_Buffer[i])) {
                Trailing_Characters.unshift(Input_Buffer.pop());
            } else {
                break;
            }
        }

        if (Input_Buffer.length === 0) {
            return;
        }

        if (/[\-\/]/.test(Input_Buffer[0])) {
            modifying_prior_note = true;
        }
        if (Open_Ornament) {
            // We need to remove the close parenthesis we added to make
            // the fingering legal.
            let current_characters = get_unblanked_current_characters();
            if (current_characters[current_characters.length - 1] === ')') {
                current_characters.pop();
            } else {
                alert("Something wonky with parentheses.");
                punt_on_input();
            }
            Array.prototype.unshift.apply(Input_Buffer, current_characters);
            Open_Ornament = false;
        }

        if (modifying_prior_note) {
            if (Current_Note.prior_note) {
                Current_Note = Current_Note.prior_note;
                buffer_current_fingering();
            } else {
                // First note cannot begin this way.
                Input_Buffer.pop();
            }
        } else {
            if (Current_Note.fingering && Current_Note.fingering.match(/x/)) {
                buffer_current_fingering();
            }
        }

        let input = Input_Buffer.join('');
        let truncation_count = 0;
        let try_count = 1;
        while (true) {
            try {
                let parsimony = Abcdf_Parser.parse(input);
                Open_Ornament = false;
                if (try_count === 2) {
                    Open_Ornament = true;
                }
                finger_notes_from_parse(parsimony);
                break;
            } catch (e) {
                if (try_count === 1) {
                    Input_Buffer.push(')');
                } else if (try_count === 2) {
                    Input_Buffer.pop(); // Pop off closing paren.
                    Input_Buffer.pop(); // Try to process less of the input.
                    truncation_count++;
                } else if (try_count === 3) {
                    // Strike three. Start over.
                    try_count = 0;
                }
                if (Input_Buffer.length == 0) {
                    // Could not make any sense out of the input.
                    break;
                }
                input = Input_Buffer.join('');
                try_count++;
            }
        }
        Input_Buffer = [];
        rerender();
        highlight_note(Current_Note);
    }

    function mark_phrase(char) {
        Current_Note.phrase_break = char;
    }

    function buffer_character_input(char) {
        clearTimeout(Timer);

        let character_processed = false;
        if (/[\(\)\/\-1-5]/.test(char)) {
            Input_Buffer.push(char);
            character_processed = true;
        }
        if (char === 't' || char === 'T') {
            flush_buffer();
            toggle_hand();
            character_processed = true;
        }
        if (char === ',' || char === ';' || char === '.') {
            flush_buffer();
            mark_phrase(char);
            rerender();
            character_processed = true;
        }
        Timer = setTimeout(flush_buffer, TIMEOUT_MS);
        console.log("Done " + Timer);
        return character_processed;
    }

    function handle_keypress(e) {
        let char = get_char(e).toLowerCase();
        return buffer_character_input(char);
    }

    function process_options(options) {
        if (!Options) {
            Options = options;
            if (! Options['experiment_id']) {
                Options.experiment_id = "";
            }
        }
    }

    function get_abcd_version() {
        return 6;
    }

    function get_abcd_hdr() {
        let abcd_hdr = "% abcDidactyl v" + get_abcd_version();
        return abcd_hdr;
    }

    function get_abcd_fingering_preamble(fingering_number) {
        let preamble = '% abcD fingering ' + fingering_number + ': ';
        return preamble;
    }

    function get_abcd(abc_str, pii_okay) {
        let body_lines = [];
        let header_lines = [];
        header_lines.push(get_abcd_hdr());
        let sequences = get_sequences(abc_str);

        let lines = abc_str.split("\n");
        let input_abcd_version = '';
        let out_of_abcd_block = false;
        let match;
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (input_abcd_version) {
                if (out_of_abcd_block) {
                    body_lines.push(line);
                } else {
                    match = ABCD_TERMINAL_RE.exec(line);
                    if (match) {
                        out_of_abcd_block = true;
                    }
                }
            } else {
                match = ABCD_HDR_RE.exec(line);
                if (match && match[1]) {
                    input_abcd_version = match[1];
                } else {
                    body_lines.push(line);
                }
            }
        }

        let current_sequence_number = get_current_sequence_number();
        let current_sequence = get_current_sequence(pii_okay);

        if (get_setting('output') === 'replace') {
            let sequence_index = current_sequence_number - 1;
            sequences[sequence_index] = current_sequence;
        } else {
            sequences.push(current_sequence);
        }

        let fingering_line, authority_line, transcriber_line, date_line, comments;
        for (let i = 0; i < sequences.length; i++) {
            let sequence_number = i + 1;
            try {
                Abcdf_Parser.parse(sequences[i].sequence);
            } catch (e) {
                alert("Bad abcDF parse of fingering string: " + e.message);
            }
            fingering_line = get_abcd_fingering_preamble(sequence_number) + sequences[i].sequence;
            header_lines.push(fingering_line);
            if (sequences[i].authority) {
                authority_line = '% Authority: ' + sequences[i].authority;
                if (sequences[i].authority_year) {
                    authority_line += ' (' + sequences[i].authority_year + ')';
                }
                header_lines.push(authority_line);
            }
            if (sequences[i].transcriber) {
                transcriber_line = '% Transcriber: ' + sequences[i].transcriber;
                header_lines.push(transcriber_line);
            }
            if (sequences[i].transcription_date) {
                date_line = '% Transcription date: ' + sequences[i].transcription_date;
                header_lines.push(date_line);
            }
            comments = sequences[i].comments.split("\n");
            for (let j = 0; j < comments.length; j++) {
                if (j !== comments.length - 1 || comments[j]) {
                    header_lines.push('% ' + comments[j]);
                }
            }
        }

        header_lines.push('% abcDidactyl END');

        let header_str = header_lines.join("\n");
        let body_str = body_lines.join("\n");
        return header_str + "\n" + body_str;
    }

    function handle_keys() {
        document.body.addEventListener('keydown', handle_keydown);
        document.body.addEventListener('keypress', handle_keypress);
    }

    function unhandle_keys() {
        document.body.removeEventListener('keydown', handle_keydown);
        document.body.removeEventListener('keypress', handle_keypress);
    }

    function insert_main_divs() {
        if (Ui_In_Place) {
            return;
        }

        let abcde_div = document.getElementById(ABCDE_DIV_ID);
        abcde_div.align = 'center';
        let source_div = document.getElementById(SOURCE_ID);
        if (!source_div) {
            source_div = document.createElement('div');
            source_div.id = SOURCE_ID;
            source_div.style.display = 'none';
            abcde_div.appendChild(source_div);
        }
        source_div.class = SOURCE_CLASS_ID;

        let prefs_div = document.createElement(PREFS_DIV_ID);
        prefs_div.id = PREFS_DIV_ID;
        abcde_div.appendChild(prefs_div);
        let controls_div = document.createElement(CONTROLS_DIV_ID);
        controls_div.id = CONTROLS_DIV_ID;
        abcde_div.appendChild(controls_div);
        let metadata_div = document.createElement(METADATA_DIV_ID);
        metadata_div.id = METADATA_DIV_ID;
        abcde_div.appendChild(metadata_div);
        let rendering_div = document.createElement(RENDERING_DIV_ID);
        rendering_div.id = RENDERING_DIV_ID;
        abcde_div.appendChild(rendering_div);
        let target_div = document.createElement(TARGET_DIV_ID);
        target_div.id = TARGET_DIV_ID;
        rendering_div.appendChild(target_div);
        let err_div = document.createElement(ERROR_DIV_ID);
        err_div.id = ERROR_DIV_ID;
        rendering_div.appendChild(err_div);
        // Hack because CSS doesn't add space, and we don't want to obscure
        // the end of the score:
        for (let i = 0; i < 7; i++) {
            rendering_div.appendChild(document.createElement('br'));
        }
        let keypad_div = document.createElement(KEYPAD_DIV_ID);
        keypad_div.id = KEYPAD_DIV_ID;
        abcde_div.appendChild(keypad_div);
    }

    function render_ui() {
        insert_main_divs();
        initialize_globals();
        insert_controls();
        preset_preferences();
        Org_Abc_Str = document.getElementById(SOURCE_ID).value;
        if (! Org_Abc_Str) {
            let url = get_setting('default_url');
            if (url) {
                make_cors_request(url);
                Org_Abc_Str = document.getElementById(SOURCE_ID).value;
            }
        }
        Toggling_Background = true;
        if (Org_Abc_Str) {
            Org_Abc_Chars = Org_Abc_Str.split('');
            Sequences = get_sequences(Org_Abc_Str);
            set_default_sequence();
            render();
            Current_Note = Notes_On_Line[0][0][0];
            highlight_note(Current_Note);
            handle_keys();
        }
        show_keypad();
        $(function() {
            FastClick.attach(document.body);
        });
    }

    function renderUI(options) {
        process_options(options);
        render_ui();

        let qualtrics = get_setting('qualtrics');
        if (qualtrics) {
            qualtrics.disableNextButton();
            qualtrics.disablePreviousButton();
        }
    }

    function render_new_sequence() {
        initialize_globals();
        Org_Abc_Str = document.getElementById(SOURCE_ID).value;
        Org_Abc_Chars = Org_Abc_Str.split('');
        render();
        Current_Note = Notes_On_Line[0][0][0];
        highlight_note(Current_Note);
        handle_keys();
    }

    function process_note_click(happening) {
        console.log("Processing note click....");
        let classiness = happening.getAttribute('class');
        console.log("Click " + classiness);
        let tokens = classiness.split('_');
        let note_loc = tokens[1];
        if (note_loc in Fingered_Note_At) {
            let clicked_note = Fingered_Note_At[note_loc];
            print_note('process_note_click', clicked_note);
            highlight_note(clicked_note);
            Current_Note = clicked_note;
        }
    }

    function setEnteredCollection(abcdf) {
        Current_Note = Notes_On_Line[0][0][0];
        let seq_number = get_current_sequence_number();
        let seq = get_current_sequence(true);
        seq.sequence = abcdf;
        let autosaved = get_autosaved_sequence(seq_number);
        set_preferred_sequence(autosaved, seq);
        rerender();
        highlight_note(Current_Note);
    }

    function undo() {
        punt_on_input();
        let last_note_changed = Undo.pop();
        if (last_note_changed) {
            last_note_changed.undo_fingering_change();
            Current_Note = last_note_changed;
            rerender();
            highlight_note(Current_Note);
        }
    }

    function redo() {
        punt_on_input();
        let last_note_undone = Redo.pop();
        if (last_note_undone) {
            last_note_undone.redo_fingering_change();
            if (last_note_undone.next_note) {
                Current_Note = last_note_undone.next_note;
            } else {
                Current_Note = last_note_undone;
            }
            rerender();
            highlight_note(Current_Note);
        }
    }

    function collect_manual_input() {
        punt_on_input();
        let prompt = '';
        if (Current_Note.preset_fingering) {
            prompt += "Preset (recommended) fingering: " + Current_Note.get_preset_fingering() + "\n\n";
        }
        prompt += 'Please enter a fingering string for the selected note.';
        let initial_fingering = Current_Note.fingering;
        let new_fingering = window.prompt(prompt, initial_fingering);
        try {
            if (new_fingering === null) {
                return;
            }
            new_fingering = new_fingering.replace(LINE_RE, '');
            new_fingering = new_fingering.replace(SPACE_RE, '');
            let parsimony = Abcdf_Parser.parse(new_fingering);
            finger_notes_from_parse(parsimony);
            rerender();
            highlight_note(Current_Note);
        } catch (e) {
            alert("Bad abcDF parse of fingering string: " + e.message + e.stack);
        }
    }

    function process_note_dblclick(happening) {
        console.log("Processing note double-click....");
        process_note_click(happening);
        collect_manual_input();
    }

    function render() {
        let user = new User();
        let target = document.getElementById(TARGET_DIV_ID),
            diverr = document.getElementById(ERROR_DIV_ID);
        target.align = 'center';
        My_Abc = new abc2svg.Abc(user);
        Abc_Images = '';
        My_Abc.tosvg('edit', '%%bgcolor white\n\
%%beginsvg\n\
<style type="text/css">\n\
	rect.abcr {fill:#a08000; fill-opacity:0}\n\
	rect.abcr:hover {fill-opacity:0.3}\n\
</style>\n\
%%endsvg\n');

        diverr.innerHTML = '';
        Ref = [];
        try {
            if (Org_Abc_Str) {
                My_Abc.tosvg(Abc_Fname, Org_Abc_Str);
            }
        } catch (e) {
            alert(e.message + '\nabc2svg tosvg bug - stack:\n' + e.stack);
            return;
        }

        try {
            if (Org_Abc_Str) {
                target.innerHTML = Abc_Images;
                sort_notes_in_finger_order();
                sort_note_locations();
                Preprocessing_Completed = true;
                Current_Line_Number = 0;
                preset_sequence();
                rerender();
            }
        } catch (e) {
            alert(e.message + '\nabc2svg image bug - abort:\n' + e.stack);
            return;
        }
    }

    function setcolor(cl, color) {
        let elts = document.getElementsByClassName(cl),
            i = elts.length,
            elt;
        while (--i >= 0) {
            elt = elts[i];
            elt.setAttribute("color", color);
        }
    }

    function colorsel(color) {
        let i, n = Colcl.length;
        for (i = 0; i < n; i++)
            setcolor(Colcl[i], color);
    }

    function is_fully_visible(elem) {
        let $elem = $(elem);
        let $window = $(window);

        let key_pad = document.getElementById(KEYPAD_DIV_ID);

        let doc_top = $window.scrollTop();
        let doc_bottom = doc_top + $window.height() - key_pad.offsetHeight;

        let elem_top = $elem.offset().top;
        let elem_bottom = elem_top + $elem.height();

        return ((elem_bottom <= doc_bottom) && (elem_top >= doc_top));
    }

    // function keep_in_view(elem) {

    function highlight_note(note) {
        let note_start = note.fingered_start;
        if (Colcl.length != 0) {
            colorsel("black");
            Colcl = [];
        }

        Colcl.push('e_' + note_start);
        if (Toggled) {
            if (note.staff === 0) {
                colorsel("dodgerblue");
            } else {
                colorsel("red");
            }
        } else {
            if (note.staff === 1) {
                colorsel("dodgerblue");
            } else {
                colorsel("red");
            }
        }

        let line_key = 'line_' + note.line;
        let line_svg = document.getElementById(line_key);
        if (! is_fully_visible(line_svg)) {
            line_svg.scrollIntoView(false);
            let key_pad = document.getElementById(KEYPAD_DIV_ID);
            let y = document.body.scrollTop;
            window.scrollTo(0, y + key_pad.offsetHeight);
        }
    }

    function getXValue(abc_str) {
        if (! abc_str) {
            abc_str = Org_Abc_Str;
        }
        let lines = abc_str.split("\n");
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (/^\s*X:/.test(line)) {
                let tokens = line.split(':');
                if (tokens.length != 2) {
                    return '';
                }
                let val = tokens[1].trim();
                return val;
            }
        }
        return '';
    }

    // Note abcdf is the complete annotation for a note in an abcD header.
    // A note fingering is the string to include in the "comment" annotation
    // in the rendered score.
    function get_verbose_note_abcdf(note) {
        let finger_tokens = [];
        if (note.fingering) {
            // finger_tokens = get_tokens(FINGER_RE, note.fingering);
            finger_tokens = get_abcdf_note_tokens(note.fingering);
        }

        let finger_str = note.fingering || "";
        for (let i = finger_tokens.length; i < note.size; i++) {
            finger_str += "x";
        }
        finger_str += note.phrase_break;
        return finger_str;
    }

    function get_note_abcdf(note) {
        if (note.grace) {
            return get_verbose_note_abcdf(note);
        }

        let synchronous_notes = Staff_Notes_At_Time[note.staff][note.time];
        let grace_note_count = get_grace_note_count(synchronous_notes);
        let big_note_count = synchronous_notes.length - grace_note_count;
        if (big_note_count < 2) {
            return get_verbose_note_abcdf(note);
        }

        synchronous_notes.sort(order_notes);

        let i = 0;
        let lowest_note = synchronous_notes[0];
        while (lowest_note.grace) {
            i++;
            lowest_note = synchronous_notes[i];
        }
        //let lowest_note = synchronous_notes[0];
        //if (synchronous_notes[0].grace) {
            //lowest_note = synchronous_notes[1];
        //}

        if (note !== lowest_note) {
            // Only annotate first note (as sorted by lowest pitch, then voice).
            return '';
        }

        let ordered_fingers = get_synchronous_fingering_array(synchronous_notes);
        let finger_str = '';
        for (let i = 0; i < ordered_fingers.length; i++) {
            if (!ordered_fingers[i]) {
                finger_str += 'x';
            } else {
                finger_str += ordered_fingers[i];
            }
        }
        return finger_str;
    }

    function clean_abcdf(fingering, last_hand) {
        let clean_tokens = [];
        let current_hand = last_hand;
        let tokens = fingering.split('');
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            if (!token.match(RL_RE)) {
                clean_tokens.push(token);
            } else if (token !== current_hand) {
                clean_tokens.push(token);
                current_hand = token;
            }
        }
        return clean_tokens.join('');
    }

    function get_abcdf(staff_number, line_number) {
        let sl_notes = Notes_On_Line[line_number][staff_number];

        let all_abcdf = '';
        for (let i = 0; i < sl_notes.length; i++) {
            let note = sl_notes[i];
            let abcdf = get_note_abcdf(note);
            all_abcdf += abcdf;
        }

        return all_abcdf;
    }

    function get_new_last_hand(finger_str, old_last_hand) {
        let match = LAST_HAND_RE.exec(finger_str);
        if (match && match[1]) {
            return match[1];
        }
        return old_last_hand;
    }

    function current_collection() {
        let all_abcdf;
        let all_treble_abcdf = '';
        let all_bass_abcdf = '';
        let last_treble_hand = get_staff_hand(0); // upper
        let last_bass_hand = get_staff_hand(1); // lower
        for (let i = 0; i < Notes_On_Line.length; i++) {
            let treble_abcdf = get_abcdf(0, i);
            if (treble_abcdf) {
                treble_abcdf = clean_abcdf(treble_abcdf, last_treble_hand);
                last_treble_hand = get_new_last_hand(treble_abcdf, last_treble_hand);
                all_treble_abcdf += treble_abcdf;
                if (i < Notes_On_Line.length - 1) {
                    all_treble_abcdf += '&';
                }
            }
            if (Notes_On_Line[i][1]) {
                let bass_abcdf = get_abcdf(1, i);
                if (bass_abcdf) {
                    bass_abcdf = clean_abcdf(bass_abcdf, last_bass_hand);
                    last_bass_hand = get_new_last_hand(bass_abcdf, last_bass_hand);
                    all_bass_abcdf += bass_abcdf;
                    if (i < Notes_On_Line.length - 1) {
                        all_bass_abcdf += '&';
                    }
                }
            }
        }

        all_abcdf = all_treble_abcdf + '@' + all_bass_abcdf;
        return all_abcdf;
    }

    function print_score() {
        console.log("Print that score.");
        let print_window = window.open('', 'print_window');
        print_window.document.write(Abc_Images);
        print_window.document.close();
        print_window.focus();
        print_window.print();
        print_window.close();
    }

    function load_fingering() {
        let source_elem = document.getElementById(SOURCE_ID);
        source_elem.value = Org_Abc_Str;
        render_new_sequence();
    }

    function get_persisting_abcd() {
        let abc_str, abcd_str;

        if (Persist_Annotated) {
            abc_str = get_fingered_abc_str();
            abcd_str = get_abcd(abc_str, true);
        } else {
            abcd_str = get_abcd(Org_Abc_Str, true);
        }
        return abcd_str;
    }

    function view_source() {
        let abcd_str = get_persisting_abcd();
        // window.open('data:text/vnd.abc;charset=utf-8,' + encodeURI(abcd_str), 'view_window');
        // window.open('data:text/text;charset=utf-8,hello', '_blank');
        let w = window.open();
        w.document.write('<pre>' + abcd_str + '</pre>');
    }

    function getAuthority() {
        if (get_setting('include_pii')) {
            return (get_field_value('authority'));
        }
        return '';
    }

    function getAuthorityYear() {
        return (get_field_value('authority_year'));
    }

    function getTranscriber() {
        if (get_setting('include_pii')) {
            return (get_field_value('transcriber'));
        }
        return '';
    }

    function getComments() {
        return (get_field_value('comments'));
    }

    function getEnteredCollection() {
        return current_collection();
    }

    function is_invalid_abcdf(abcdf_str) {
        try {
            Abcdf_Parser.parse(abcdf_str);
        } catch (e) {
            return "Bad abcDF parse of string: " + e.message + e.stack;
        }

        let missing_count = 0;
        let required_validation = get_setting('validate');
        if (required_validation === 'complete') {
            missing_count = abcdf_str.split('x').length - 1;
        } else if (required_validation === 'none') {
            missing_count = 0;
        } else if (required_validation === 'auto') {
            return 'Validation of autofill is not yet implemented.';
        }

        if (missing_count === 1) {
            return 'One note is missing a fingering annotation.';
        } else if (missing_count > 1) {
            return missing_count + " notes are missing fingering annotations.";
        }

        return '';
    }

    function is_valid_abcdf(abcdf_str) {
        let invalidity = is_invalid_abcdf(abcdf_str);
        if (invalidity) {
            alert(invalidity);
            return false;
        }
        return true;
    }

    function getValidatedCollection() {
        let dat = current_collection();
        if (is_valid_abcdf(dat)) {
            return dat;
        }
        return '';
    }

    function getEnteredAbcD() {
        let persistence_setting = Persist_Annotated;
        Persist_Annotated = false;
        let abcd_str = get_persisting_abcd();
        Persist_Annotated = persistence_setting;
        return abcd_str;
    }

    function getValidatedAbcD() {
        let abcdf = current_collection();
        if (is_valid_abcdf(abcdf)) {
            let abcd = get_persisting_abcd();
            if (!/^\s*X:/m.test(abcd)) {
                alert("File is not valid abc.");
                return '';
            } else if (!/^% abcDidactyl/m.test(abcd)) {
                alert("File is not valid abcD.");
                return '';
            }
            return abcd;
        }
        return '';
    }

    function stopAutoSaving() {
        if (Autosaver) {
            clearInterval(Autosaver);
        }
    }

    // Our illustrious public API.
    this.renderUI = renderUI;
    this.getXValue = getXValue;
    this.getAuthority = getAuthority;
    this.getAuthorityYear = getAuthorityYear;
    this.getTranscriber = getTranscriber;
    this.getComments = getComments;
    this.getEnteredCollection = getEnteredCollection;
    this.getEnteredAbcDF = getEnteredCollection;
    this.getEnteredAbcD = getEnteredAbcD;
    this.getValidatedCollection = getValidatedCollection;
    this.getValidatedAbcD = getValidatedAbcD;
    this.setEnteredCollection = setEnteredCollection;
    this.handleKeys = handle_keys;
    this.unhandleKeys = unhandle_keys;
    this.stopAutoSaving = stopAutoSaving;

    return this;
}
