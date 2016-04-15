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

    var Options,
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
        Persist_Annotated = true,
        Ui_In_Place = false;

    var DIDACTYL_URL = 'https://dvdrndlph.github.io/didactyl';
    var HOME_URL = DIDACTYL_URL + '/abcde';
    var HELP_URL = HOME_URL + '/view/abcde_help.html';
    var IMAGE_DIR = HOME_URL + '/image';
    var MEDIA_DIR = HOME_URL + '/lib/media';
    var DEFAULT_NUMBERING_INTERVAL = 5;
    // var MEDIA_DIR = '../lib/media';
    // var MEDIA_DIR = 'http://nlp.cs.uic.edu/didactyl/abcde/lib/media';

    // FIXME: These regular expresions are too simplistic. Replace them
    // with PEG parser calls.
    var FINGER_RE = /\(([<>]\d)+\)|[<>]\d-[<>]\d\/[<>]\d-[<>]\d|[<>]\d\/[<>]\d-[<>]\d|[<>]\d-[<>]\d\/[<>]\d|[<>]\d-[<>]\d|[<>]\d\/[<>]\d|[<>]\d|x/g;
    var PRESET_RE = /\(([<>]?\d)+\)|[<>]?\d-[<>]?\d\/[<>]?\d-[<>]?\d|[<>]?\d\/[<>]?\d-[<>]?\d|[<>]?\d-[<>]?\d\/[<>]?\d|[<>]?\d-[<>]?\d|[<>]?\d\/[<>]?\d|[<>]?\d|x/g;

    var SPACE_RE = /\s/g;
    var LH_REG = /</g;
    var RH_REG = />/g;
    var RL_REG = /[><]/g;
    var LAST_HAND_RE = (/.*([<>])[^<>]+$/);
    var ABCD_HDR_RE = /^% abcDidactyl v([\d\.]+)$/;
    var ABCD_FINGERING_RE = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x]+)$/;
    var ABCD_TERMINAL_RE = /^% abcDidactyl END$/;
    var ABCD_AUTHORITY_RE = /^% Authority: (.*)\s+\((\d\d\d\d)\)$/;
    var ABCD_TRANSCRIBER_RE = /^% Transcriber: (.*)$/;
    var ABCD_TRANSCRIPTION_DATE_RE =
        /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/;
    var ABCD_COMMENT_RE = /^% (.*)$/;

    var TIMEOUT_MS = 300;
    var DOUBLE_TAP_MS = 500;
    var AUTOSAVE_MS = 4000;

    var ABCDE_DIV_ID = 'abcde';
    var SOURCE_ID = 'abc_source';
    var SOURCE_CLASS_ID = 'source';
    var PREFS_DIV_ID = 'abcde_prefs';
    var CONTROLS_DIV_ID = 'abcde_controls';
    var METADATA_DIV_ID = 'abcde_metadata';
    var KEYPAD_DIV_ID = 'abcde_keypad';
    var RENDERING_DIV_ID = 'abcde_rendering';
    var TARGET_DIV_ID = 'abcde_target';
    var ERROR_DIV_ID = 'abcde_error';

    var MAGNIFICATION_INCREMENT = 0.1;
    var MAX_MAGNIFICATION = 3.0;
    var MIN_MAGNIFICATION = 0.3;

    var Z_CODE = 90;
    var Y_CODE = 89;
    var ENTER_CODE = 13;
    var BACKSPACE_CODE = 8;
    var TAB_CODE = 9;
    var LEFT_ARROW_CODE = 37;
    var RIGHT_ARROW_CODE = 39;

    var SETFONT_COMMANDS =
        "%%setfont-1 Bookman 11\n" +
        "%%setfont-2 Helvetica-Bold 11";
    var GRACE_NOTE_DECORATIONS =
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
        var notes_at_time = Staff_Notes_At_Time[staff];
        var sorted_note_times = [];
        var key;
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

        var hand = starting_hand;
        var handed_tokens = [];
        var chars = fingering.split('');
        for (var i = 0; i < chars.length; i++) {
            var char = chars[i];
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
        var storage_key = field_name + "_" + sequence_number + "_" + Md5_Key;
        return storage_key;
    }

    function get_autosaved_sequence(sequence_number) {
        if (!local_storage_is_supported()) {
            return {};
        }

        var saved_seq = {sequence: ''};
        var storage_key = get_storage_key('sequence', sequence_number);
        var stored_fingerings = localStorage.getItem(storage_key) || '';
        if (stored_fingerings.match(/[^x&@]/)) {
            saved_seq.sequence = stored_fingerings;
        }

        storage_key = get_storage_key('authority', sequence_number);
        var stored_authority = localStorage.getItem(storage_key) || '';
        saved_seq.authority = stored_authority;
        storage_key = get_storage_key('authority_year', sequence_number);
        var stored_year = localStorage.getItem(storage_key) || '';
        saved_seq.authority_year = stored_year;
        storage_key = get_storage_key('transcriber', sequence_number);
        var stored_transcriber = localStorage.getItem(storage_key) || '';
        saved_seq.transcriber = stored_transcriber;
        storage_key = get_storage_key('comments', sequence_number);
        var stored_comments = localStorage.getItem(storage_key) || '';
        saved_seq.comments = stored_comments;

        return saved_seq;
    }

    function get_field_value(field_id) {
        var field = document.getElementById(field_id);
        if (field.value) {
            return field.value;
        }
        return '';
    }

    function get_current_sequence(force) {
        var current_date = new Date();
        var date_str = current_date.getFullYear() + '-' +
            sprintf("%02d", (current_date.getMonth() + 1)) + '-' +
            sprintf("%02d", current_date.getDate()) + ' ' +
            sprintf("%02d", current_date.getHours()) + ":" +
            sprintf("%02d", current_date.getMinutes()) + ":" +
            sprintf("%02d", current_date.getSeconds());

        var authority = '';
        var transcriber = '';
        if (force || get_setting('include_pii')) {
            authority = get_field_value('authority');
            transcriber = get_field_value('transcriber');
        }

        var sequence = {
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
        var field = document.getElementById(field_id);
        var setting = field.value;
        var storage_key = get_storage_key(field_id, sequence_id);
        localStorage.setItem(storage_key, setting);
    }

    function get_radio_setting(group_name) {
        var group = document.getElementsByName(group_name);
        for (var i = 0; i < group.length; i++) {
            var button = group[i];
            if (button.checked) {
                return button.id;
            }
        }
        return undefined;
    }

    function store_preference(field_id) {
        var setting = '';
        if (field_id === 'preset' || field_id === 'output' ||
            field_id === 'keypad' || field_id == 'restore') {
            setting = get_radio_setting(field_id);
        } else {
            var field = document.getElementById(field_id);
            setting = field.value;
        }
        Preferences[field_id] = setting;
        localStorage.setItem(field_id, setting);
    }

    function get_current_sequence_number() {
        var sequence_spinner = document.getElementById('sequence_spinner');
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

        var sequence_spinner = document.getElementById('sequence_spinner');
        if (! sequence_spinner) {
            clearInterval(Autosaver);
            return;
        }

        var sequence_number = get_current_sequence_number();

        var storage_key = get_storage_key('sequence', sequence_number);
        var fingerings = getEnteredCollection();
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

        if (arg === 'measure_number_interval') {
            var field = document.getElementById(arg);
            return field.value;
        }
        var preference = get_radio_setting(arg);
        if (preference) {
            return preference;
        }
        return '';
    }

    function get_default_sequence_number() {
        var setting = get_setting('preset');
        var number = 1;
        if (setting === 'last') {
            number = Sequences.length || 1;
        }
        return number;
    }

    function get_dummy_sequence() {
        var seq = {};
        seq.authority = get_field_value('default_authority');
        seq.authority_year = get_field_value('default_authority_year');
        seq.transcriber = get_field_value('default_transcriber');
        seq.sequence = 'x';
        seq.comments = '';
        return seq;
    }

    function get_sequences(abcd_str) {
        var lines = abcd_str.split("\n");
        var match;
        var within_abcd_block = false;
        var seq = {};
        var sequences = [];
        var input_abcde_version = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
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
                            seq.authority_year = match[2];
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
        var sequence_spinner = document.getElementById('sequence_spinner');
        sequence_spinner.min = 1;
        sequence_spinner.max = Sequences.length || 1;
        var default_sequence_number = get_default_sequence_number();
        sequence_spinner.value = default_sequence_number;
    }

    function get_default_sequence() {
        var setting = get_setting('preset');
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
            var sequence_index = sequence_number - 1;
            if (parseInt(sequence_number) <= Sequences.length) {
                return Sequences[sequence_index];
            } else {
                return get_dummy_sequence();
            }
        }
        return get_default_sequence();
    }


    function set_radio(group_name, value) {
        var group = document.getElementsByName(group_name);
        for (var i = 0; i < group.length; i++) {
            var button = group[i];
            if (button.id === value) {
                button.checked = true;
            }
        }
    }

    function set_field(field_id, value) {
        var field = document.getElementById(field_id);
        if (value !== undefined) {
            field.value = value;
        } else {
            field.value = '';
        }
    }

    function preset_preferences() {
        set_radio('preset', localStorage.getItem('preset'));
        set_radio('output', localStorage.getItem('output'));
        set_radio('restore', localStorage.getItem('restore'));
        set_radio('keypad', localStorage.getItem('keypad'));
        var numbering_setting = localStorage.getItem('measure_number_interval');
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
        var authority = get_field_value('authority');
        var default_authority = get_field_value('default_authority');
        if (! authority && default_authority) {
            set_field('authority', default_authority);
        }
        var year = get_field_value('authority_year');
        var default_year = get_field_value('default_authority_year');
        if (! year && default_year) {
            set_field('authority_year', default_year);
        }
        var transcriber = get_field_value('transcriber');
        var default_transcriber = get_field_value('default_transcriber');
        if (! transcriber && default_transcriber) {
            set_field('transcriber', default_transcriber);
        }
    }

    function set_sequence(finger_str, field_name) {
        if (! finger_str) {
            return;
        }

        console.log("Setting fingers: ", finger_str);
        var staff_fingerings = {};
        var staff_lines = finger_str.split('@');
        var staff_num;
        var line_num;
        var fingering;
        for (staff_num = 0; staff_num < staff_lines.length; staff_num++) {
            var hand = get_staff_hand(staff_num);
            staff_fingerings = [];
            var finger_lines = staff_lines[staff_num].split('&');
            for (line_num = 0; line_num < finger_lines.length; line_num++) {
                var finger_line = finger_lines[line_num];
                staff_fingerings = staff_fingerings.concat(get_tokens(PRESET_RE, finger_line));
            }

            var sorted_staff_note_times = get_sorted_staff_note_times(staff_num);
            for (var time_index = 0; time_index < sorted_staff_note_times.length; time_index++) {
                var time = sorted_staff_note_times[time_index];
                var notes = Staff_Notes_At_Time[staff_num][time];
                notes.sort(order_notes);
                var g = 0;
                while (notes[g].grace) {
                    notes[g][field_name] = '';
                    for (var i = 0; i < notes[g].size; i++) {
                        fingering = staff_fingerings.shift();
                        if (!fingering) {
                            console.log('Preset fingering MISSING for note:');
                            print_note('preset grace note', notes[g]);
                        }
                        fingering = get_handed_fingering(fingering, hand);
                        hand = get_new_last_hand(fingering, hand);
                        notes[g][field_name] += fingering;
                    }
                    g++;
                }

                var notes_with_pit = get_sorted_synchronous_notes_with_pit(notes);
                var pits = get_sorted_synchronous_pits(notes_with_pit);

                // Initialize pit fingerings to empty string. We will build them
                // up from scratch.
                for (i = 0; i < pits.length; i++) {
                    var pit = pits[i];
                    for (var j = 0; j < notes_with_pit[pit].length; j++) {
                        var pit_note = notes_with_pit[pit][j];
                        pit_note[field_name] = '';
                    }
                }

                for (i = 0; i < pits.length; i++) {
                    var pit = pits[i];
                    for (var j = 0; j < notes_with_pit[pit].length; j++) {
                        var pit_note = notes_with_pit[pit][j];
                        if (pit_note.grace) {
                            continue;
                        }
                        if (!pit_note[field_name]) {
                            pit_note[field_name] = '';
                        }
                        fingering = staff_fingerings.shift();
                        if (!fingering) {
                            console.log('Preset fingering MISSING for note:');
                            print_note('preset pit note', pit_note);
                        }
                        fingering = get_handed_fingering(fingering, hand);
                        hand = get_new_last_hand(fingering, hand);
                        pit_note[field_name] += fingering;
                    }
                }
            }
        }
    }

    function set_preferred_sequence(autosaved, preset) {
        var finger_str = preset.sequence;
        var preset_finger_str = preset.sequence;
        var presetting = true;
        var setting = get_setting('preset');
        if (!setting || setting === 'none') {
            presetting = false;
            finger_str = '';
        }

        var should_restore = false;
        if (autosaved && autosaved.sequence && autosaved.sequence !== finger_str) {
            var restore_setting = get_setting('restore');
            if (restore_setting === 'always') {
                should_restore = true;
            } else if (restore_setting === 'never') {
                should_restore = false;
            } else {
                should_restore = confirm('You have previously entered data for this piece. ' +
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

        set_sequence(finger_str, 'fingering');
        set_sequence(preset_finger_str, 'preset_fingering');

        Autosaver = setInterval(function () {
            autosave();
        }, AUTOSAVE_MS);
    }

    function preset_sequence() {
        var sequence_number = get_current_sequence_number();
        var autosaved = get_autosaved_sequence(sequence_number);
        var preset = get_preset_sequence(sequence_number);
        set_preferred_sequence(autosaved, preset);
        preset_blank_metadata();
    }

    function copy_fingerings(trigger) {
        var fingerings = current_collection();
        return fingerings;
    }

    function paste_fingerings() {
        var prompt = 'Please enter a fingering string for the current piece.';
        var new_fingerings = window.prompt(prompt, '');
        if (new_fingerings !== null) {
            set_sequence(new_fingerings, 'fingering');
            rerender();
        }
    }

    function restore_sequence() {
        if (! Org_Abc_Str) {
            return;
        }

        var should_restore = confirm("All changes you have made to this fingering sequence will be discarded, " +
                "and the initial sequence will be restored. Are you sure you want to proceed?");
        if (should_restore) {
            var sequence_number = get_current_sequence_number();
            var preset = get_preset_sequence(sequence_number);
            set_preferred_sequence(undefined, preset);
            rerender();
            Current_Note = Notes_On_Line[0][0][0];
            highlight_note(Current_Note);
        }
    }

// We return an array of strings that start with the regex re
// and extend through the beginning of the next match.
    function get_tokens(re, line) {
        if (!line) {
            return [];
        }
        var matches = [];
        var match;
        var start_index = 0;
        var end_index = 0;
        // console.log("get_tokens of " + re + " from >>" + line + '<<');
        while ((match = re.exec(line)) != null) {
            end_index = re.lastIndex;
            // console.log("Start: " + start_index + " End: " + end_index);
            var token_str;
            if (start_index === end_index) {
                token_str = line.substr(start_index);
            } else {
                token_str = line.substr(start_index, end_index - start_index);
            }
            matches.push(token_str);
            start_index = re.lastIndex;
            // console.log("get_tokens: " + match[0] + ' ' + re.lastIndex);
        }
        var remainder = line.substr(start_index);
        if (remainder) {
            var last_match = '';
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
        var help_window = window.open(HELP_URL, '_blank');
        help_window.focus();
    }

    function open_preferences(e) {
        unhandle_keys();
        var prefs_modal_wrapper = document.getElementById('prefs_modal_wrapper');
        var prefs_modal_window = document.getElementById('prefs_modal_window');
        prefs_modal_wrapper.className = 'overlay';
        var overflow = prefs_modal_window.offsetHeight - document.documentElement.clientHeight;
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
        var metadata_modal_wrapper = document.getElementById('metadata_modal_wrapper');
        var metadata_modal_window = document.getElementById('metadata_modal_window');
        metadata_modal_wrapper.className = 'overlay';
        var overflow = metadata_modal_window.offsetHeight - document.documentElement.clientHeight;
        if (overflow > 0) {
            metadata_modal_window.style.maxHeight = (parseInt(window.getComputedStyle(metadata_modal_window).height) - overflow) + "px";
        }
        metadata_modal_window.style.marginTop = (-metadata_modal_window.offsetHeight) / 2 + "px";
        metadata_modal_window.style.marginLeft = (-metadata_modal_window.offsetWidth) / 2 + "px";
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function close_metadata(e) {
        var metadata_modal_wrapper = document.getElementById('metadata_modal_wrapper');
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
        store_preference('preset');
        store_preference('output');
        store_preference('restore');
        store_preference('keypad');
        store_preference('measure_number_interval');
        store_preference('default_authority');
        store_preference('default_authority_year');
        store_preference('default_transcriber');
        var prefs_modal_wrapper = document.getElementById('prefs_modal_wrapper');
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
        var head = data.slice(0, 100);
        if (head.indexOf('<?xml') == -1) {
            return false;
        }
        var encoding_match = head.match(/encoding="([^"]+)"/);
        var encoding = 'utf-8';
        if (encoding_match && encoding_match.length == 2) {
            encoding = encoding_match[1];
        }
        return encoding;
    }

    function xml2abc(data) {
        var xml_options = {};
        var xml_data = $.parseXML(data);
        var result = vertaal(xml_data, xml_options);
        var abc = result[0];
        var error_txt = result[1];
        if (error_txt) {
            console.log('xml2abc ERROR: ' + error_txt);
        }
        if (!abc) {
            alert("Unable to open MusicXML file: " + error_txt);
        }
        return abc;
    }

    function create_cors_request(method, url) {
        var xhr = new XMLHttpRequest();
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
        var name_tokens = file_path.split('.');
        return name_tokens[name_tokens.length - 1];
    }

    function mxl2abc(data) {
        var content = '';
        try {
            var zip = new JSZip(data);
            $.each(zip.files, function (index, zip_entry) {
                content = zip_entry.asText();
            });
        } catch (e) {
            alert("Could not open compressed MusicXML file: " + e.message);
            return '';
        }
        var encoding = get_xml_encoding(content);
        if (encoding !== 'UTF-8') {
            alert("Input mxl is not UTF-8 encoded. Cannot open.");
            return '';
        } else {
            content = xml2abc(content);
        }
        return content;
    }

    function make_cors_request(url) {
        var extension = get_extension(url);

        var error_msg = 'The server hosting file does not allow access from this domain. ' +
            'Please download the file outside abcDE and then "Choose file" to work with it.';
        var xhr = create_cors_request('GET', url);
        if (!xhr) {
            alert(error_msg);
            return;
        }
        if (extension === 'mxl') {
            xhr.responseType = 'arraybuffer';
        }

        xhr.onload = function () {
            console.log("File has been retrieved.");
            var content = '';
            if (extension === 'mxl') {
                content = mxl2abc(xhr.response);
                if (!content) {
                    return;
                }
            } else {
                content = xhr.responseText;
                var xml_encoding = get_xml_encoding(content);
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
        var prompt = 'Please enter URL to open.';
        var default_url = DIDACTYL_URL + '/wtc/prelude02.abc';
        if (Previous_Url) {
            default_url = Previous_Url;
        } else {
            var preferred_url = get_setting('default_url');
            if (preferred_url) {
                default_url = preferred_url;
            }
        }
        var url = window.prompt(prompt, default_url);
        if (url) {
            make_cors_request(url);
        }
    }

    function import_mxl_file(file) {
        var reader = new FileReader();
        var content = '';
        reader.onload = function (e) {
            try {
                var zip = new JSZip(e.target.result);
                $.each(zip.files, function (index, zip_entry) {
                    content = zip_entry.asText();
                });
            } catch (e) {
                alert("Could not open compressed MusicXML file: " + e.message);
                return;
            }
            var encoding = get_xml_encoding(content);
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
        var file_control = document.getElementById("file_input");
        var files = file_control.files;

        if (!files.length) {
            alert('Please select a valid abc file.')
            return;
        }
        var file = files[0];
        var extension = get_extension(file.name);
        if (extension === 'mxl') {
            import_mxl_file(file);
            return;
        }

        var is_xml = false;
        var encoding_reader = new FileReader();
        encoding_reader.onload = function (e) {
            var encoding = get_xml_encoding(encoding_reader.result);
            var reader = new FileReader();
            if (encoding) {
                is_xml = true;
            } else {
                encoding = 'UTF-8';
            }
            reader.onload = function (e) {
                var content = '';
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
        var kids = container.children;
        for (var i = 0; i < kids.length; i++) {
            kids[i].style.display = how;
        }
    }

    function show_keypad() {
        var keypad_div = document.getElementById(KEYPAD_DIV_ID);
        var number_div = document.getElementById('number_div');
        var symbol_div = document.getElementById('symbol_div');
        var setting = get_setting('keypad');
        if (setting === 'show') {
            keypad_div.style.display = 'block';
            number_div.style.display = 'block';
            symbol_div.style.display = 'block';
            display_kids(number_div, 'inline');
            display_kids(symbol_div, 'inline');
        } else {
            display_kids(symbol_div, 'none');
            display_kids(number_div, 'none');
            var qualtrics = get_setting('qualtrics');
            var submit_button_id = get_setting('submit_button_id');
            if (qualtrics) {
                var next_button = document.getElementById('q_next');
                next_button.style.display = 'inline';
                var back_button = document.getElementById('q_back');
                if (back_button) {
                    back_button.style.display = 'inline';
                }
            } else if (submit_button_id) {
                var button = document.getElementById(submit_button_id);
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
        var key = event.keyCode || event.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]/;
        if (!regex.test(key)) {
            event.returnValue = false;
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    }

    function insert_text_field(container, id, prompt, html_class, validator, add_break) {
        var field = document.createElement('input');
        field.type = 'text';
        field.class = html_class;
        field.id = id;
        if (validator) {
            field.onkeypress = validator;
        }
        if (html_class === 'year') {
            field.size = '4';
        }
        var label = document.createElement('label');
        label.htmlFor = id;
        label.appendChild(document.createTextNode(prompt));

        container.appendChild(label);
        container.appendChild(field);
        if (add_break) {
            container.appendChild(document.createElement('br'));
        }
    }

    function insert_text_area(container, id, prompt, html_class, row_count, column_count) {
        var field = document.createElement('textarea');
        field.class = html_class;
        field.id = id;
        field.rows = row_count;
        field.cols = column_count;
        var label = document.createElement('label');
        label.htmlFor = id;
        label.appendChild(document.createTextNode(prompt));

        container.appendChild(label);
        container.appendChild(field);
    }

    function insert_label(container, text, html_class) {
        var label = document.createElement("label");
        label.class = html_class;
        var text_node = document.createTextNode(text);
        label.appendChild(text_node);
        container.appendChild(label);
    }

    function insert_radio_buttons(container, prompt, name, ids, labels, selected, add_break) {
        var radio_div = document.createElement('div');
        radio_div.class = 'radio_div';
        insert_label(container, prompt, 'prompt');

        for (var i = 0; i < ids.length; i++) {
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.id = ids[i];
            if (radio.id === selected) {
                radio.checked = true;
            }
            radio.name = name;

            radio_div.appendChild(radio);
            insert_label(radio_div, labels[i], 'radio_label');

            var space = document.createElement("span");
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
        var div = document.createElement('div');
        div.class = 'spinner_div';
        insert_label(div, prompt, 'prompt');

        var spinner = document.createElement('input');
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
        var metadata_holder = document.getElementById(METADATA_DIV_ID);
        var modal_wrapper = document.createElement('div');
        modal_wrapper.id = 'metadata_modal_wrapper';
        metadata_holder.appendChild(modal_wrapper);
        var modal_window = document.createElement('div');
        modal_window.id = 'metadata_modal_window';
        modal_wrapper.appendChild(modal_window);

        var close_div = document.createElement('div');
        close_div.style.textAlign = 'right';
        var closer = document.createElement('a');
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
        var prefs_holder = document.getElementById(PREFS_DIV_ID);
        var prefs_modal_wrapper = document.createElement('div');
        prefs_modal_wrapper.id = 'prefs_modal_wrapper';
        prefs_holder.appendChild(prefs_modal_wrapper);

        var prefs_modal_window = document.createElement('div');
        prefs_modal_window.id = 'prefs_modal_window';
        prefs_modal_wrapper.appendChild(prefs_modal_window);

        var close_div = document.createElement('div');
        close_div.style.textAlign = 'right';
        var closer = document.createElement('a');
        closer.id = 'prefs_modal_close';
        closer.href = "#";
        closer.innerHTML = 'Close <b>X</b>';
        close_div.appendChild(closer);
        closer.addEventListener("click", close_preferences, false);
        prefs_modal_window.appendChild(close_div);

        var h = document.createElement('h3');
        h.innerText = 'Preferences';
        prefs_modal_window.appendChild(h);

        var radio_name = 'restore';
        var button_ids = ['always', 'never', 'ask'];
        var button_labels = ['Always', 'Never', 'Ask'];
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

        radio_name = 'preset';
        if (!Options || !Options[radio_name]) {
            button_ids = ['first', 'last', 'none'];
            button_labels = ['First', 'Last', 'None'];
            insert_radio_buttons(prefs_modal_window, 'Preset',
                radio_name, button_ids, button_labels, 'first', true);
        }

        radio_name = 'keypad';
        button_ids = ['show', 'hide'];
        button_labels = ['Show', 'Hide'];
        var default_keypad_setting = 'hide';
        var has_touch = 'ontouchstart' in window;
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
        var button = document.createElement('input');
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
        var abcde_div = document.getElementById(ABCDE_DIV_ID);
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
        var qualtrics = get_setting('qualtrics');
        var x_val = getXValue(Org_Abc_Str);
        var abcDF_store = 'abcDF_' + x_val;
        var abcD_store = 'abcD_' + x_val;
        var fingerings = getEnteredCollection();
        Qualtrics.SurveyEngine.setEmbeddedData(abcDF_store, fingerings);
        var abcD = getEnteredAbcD();
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
        var button = document.createElement('input');
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
        var button = document.createElement('input');
        button.type = 'button';
        button.class = 'keypad-button';
        button.id = button_id;
        button.value = value;
        container.appendChild(button);
    }


    function insert_keypad_image_button(container, button_id, file_name, alt) {
        var button = document.createElement('input');
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
        var keypad_div = document.getElementById(KEYPAD_DIV_ID);
        var number_div = document.createElement('number_div');
        number_div.id = 'number_div';
        var symbol_div = document.createElement('symbol_div');
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
        insert_keypad_image_button(number_div, 'pencil', 'target.svg', '...');
        var using_qualtrics = get_setting('qualtrics');
        if (using_qualtrics) {
            if (get_setting('qualtrics_back')) {
                insert_qualtrics_button(number_div, 'q_back', 'BACK');
            }
            insert_qualtrics_button(number_div, 'q_next', 'NEXT');
        }
        var submit_button_id = get_setting('submit_button_id');
        if (submit_button_id) {
            var submit_button_label = get_setting('submit_button_label');
            if (! submit_button_label) {
                submit_button_label = 'NEXT';
            }
            insert_submit_button(number_div, submit_button_id, submit_button_label);
        }
        insert_keypad_image_button(symbol_div, 'previous', 'arrow-circle-left.svg', '<-');
        insert_keypad_image_button(symbol_div, 'next', 'arrow-circle-right.svg', '->');
        insert_keypad_button(symbol_div, 'hyphen', '-');
        insert_keypad_button(symbol_div, 'slash', '/');
        insert_keypad_button(symbol_div, 'open_paren', '(');
        insert_keypad_button(symbol_div, 'close_paren', ')');
        var phrasing = get_setting('phrasing');
        if (phrasing) {
            insert_keypad_button(symbol_div, 'short_phrase', 'S');
            insert_keypad_button(symbol_div, 'medium_phrase', 'M');
            insert_keypad_button(symbol_div, 'long_phrase', 'L');
        }
        insert_keypad_image_button(symbol_div, 'backspace', 'delete.svg', '<]');
    }

    function insert_controls() {
        if (Ui_In_Place) {
            return;
        }

        insert_preference_fields();
        insert_metadata_fields();

        var save_button = IMAGE_DIR + '/download_36_x4.png';
        var button_width = '36'; // 16 or 24

        var control_div = document.getElementById(CONTROLS_DIV_ID);
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var row = document.createElement('tr');
        control_div.appendChild(table);
        table.appendChild(tbody);
        table.style.backgroundColor = 'LightGray';
        table.align = 'center';
        tbody.appendChild(row);

        var downloadify = document.createElement('p');
        downloadify.setAttribute('id', 'downloadify');
        var cell = document.createElement('td');
        cell.appendChild(downloadify);
        row.appendChild(cell);

        var sequence_spinner = document.createElement('input');
        sequence_spinner.id = 'sequence_spinner';
        sequence_spinner.min = '1';
        sequence_spinner.max = '999';
        sequence_spinner.size = 3;
        sequence_spinner.type = 'number';
        sequence_spinner.alt = 'fingering_number';
        sequence_spinner.value = 1;
        sequence_spinner.onchange = load_fingering;
        cell = document.createElement('td');
        insert_label(cell, 'Sequence', 'sequence_prompt');
        cell.appendChild(sequence_spinner);
        row.appendChild(cell);
        if (!Options.preset_select) {
            cell.style.display = 'none';
        }

        var view_button = document.createElement('input');
        view_button.type = 'image';
        view_button.src = IMAGE_DIR + '/eye.svg';
        view_button.width = button_width;
        view_button.alt = 'View';
        view_button.onclick = view_source;
        cell = document.createElement('td');
        cell.appendChild(view_button);
        row.appendChild(cell);

        var print_button = document.createElement('input');
        print_button.type = 'image';
        print_button.src = IMAGE_DIR + '/print.svg';
        print_button.width = button_width;
        print_button.alt = 'Print...';
        print_button.onclick = print_score;
        var cell = document.createElement('td');
        cell.appendChild(print_button);
        row.appendChild(cell);

        cell = document.createElement('td');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = 'annotated';
        checkbox.checked = Persist_Annotated;
        checkbox.id = 'view_annotated';
        checkbox.onclick = toggle_persistence;
        var label = document.createElement('label');
        label.htmlFor = 'view_annotated';
        label.appendChild(document.createTextNode('Annotated'));
        cell.appendChild(checkbox);
        cell.appendChild(label);
        row.appendChild(cell);

        var reset_button = document.createElement('input');
        reset_button.type = 'image';
        reset_button.src = IMAGE_DIR + '/reload.svg';
        reset_button.width = button_width;
        reset_button.alt = 'reset';
        reset_button.onclick = restore_sequence;
        cell = document.createElement('td');
        cell.appendChild(reset_button);
        row.appendChild(cell);

        var copy_button = document.createElement('input');
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

        var paste_button = document.createElement('input');
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

        var url_button = document.createElement('input');
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

        var file_input = document.createElement('input');
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

        var metadata_button = document.createElement('input');
        metadata_button.type = 'image';
        metadata_button.src = IMAGE_DIR + '/tags.svg';
        metadata_button.alt = 'Metadata...';
        metadata_button.width = button_width;
        metadata_button.onclick = open_metadata;
        cell = document.createElement('td');
        cell.appendChild(metadata_button);
        row.appendChild(cell);

        var zoom_out_button = document.createElement('input');
        zoom_out_button.type = 'image';
        zoom_out_button.src = IMAGE_DIR + '/zoom-out.svg';
        zoom_out_button.alt = 'Zoom In';
        zoom_out_button.width = button_width;
        zoom_out_button.onclick = zoom_out;
        cell = document.createElement('td');
        cell.appendChild(zoom_out_button);
        row.appendChild(cell);

        var zoom_in_button = document.createElement('input');
        zoom_in_button.type = 'image';
        zoom_in_button.src = IMAGE_DIR + '/zoom-in.svg';
        zoom_in_button.alt = 'Zoom In';
        zoom_in_button.width = button_width;
        zoom_in_button.onclick = zoom_in;
        cell = document.createElement('td');
        cell.appendChild(zoom_in_button);
        row.appendChild(cell);

        var prefs_button = document.createElement('input');
        prefs_button.type = 'image';
        prefs_button.src = IMAGE_DIR + '/cog.svg';
        prefs_button.alt = 'Preferences...';
        prefs_button.width = button_width;
        prefs_button.onclick = open_preferences;
        cell = document.createElement('td');
        cell.appendChild(prefs_button);
        row.appendChild(cell);

        var help_button = document.createElement('input');
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
        for (var i = 0; i < Notes.length; i++) {
            var note = Notes[i];
            note.undone_fingerings = [];
        }
        Redo = [];
    }

    function Note(music_types, elem) {
        if (music_types[elem.type] != 'note' &&
            music_types[elem.type] != 'grace') {
            return {};
        }

        this.line = -1; // Unknown until SVGs are generated.
        this.grace = false;
        this.anno_start = elem.istart; // For identifying SVG rects.

        this.size = 0;
        this.pitches = [];
        this.start = -1;
        this.end = -1;
        this.starts = [];
        this.stops = [];
        this.phrase_break = 'X';

        if (music_types[elem.type] === 'note') {
            this.size = elem.notes.length;
            for (var i = 0; i < this.size; i++) {
                this.pitches.push(elem.notes[i].pit);
            }
            // Make sure chord pitches are ordered from low to high.
            this.pitches.sort(function (a, b) {
                return parseInt(a) - parseInt(b);
            });
            this.start = elem.istart; // For finding position in ABC.
            this.end = elem.iend;
        } else {
            this.grace = true;
            this.start = elem.extra.istart;
            this.size = 1;
            var last_note = elem.extra;
            if (!last_note.notes) {
                alert("Who turned off the notes?!");
                return {}; // Skip grace notes with no notes. This seems like an abc2svg bug.
            }
            while (true) {
                // FIXME: We do not allow chords within grace notes.
                if (last_note.notes.length > 1) {
                    alert('Chords not supported in a grace "note."');
                }

                // We will need to embed fingering decorations (e.g., "!2!") to prior to
                // each element of the grace note, and we don't want to parse the abc
                // string ourselves, so we steal the spans from the abc2svg parse.
                this.starts.push(last_note.istart);
                this.stops.push(last_note.iend);

                this.pitches.push(last_note.notes[0].pit);
                if (!last_note.next) {
                    this.end = last_note.iend;
                    break;
                }
                last_note = last_note.next;
                this.size++;
            }
        }

        this.istart = elem.istart;
        this.time = elem.time;
        this.string = Org_Abc_Str.substring(this.start, this.end);
        this.voice = elem.v;
        this.staff = elem.st;
        this.prior_fingerings = [];
        this.undone_fingerings = [];


        this.init_fingering = function() {
            this.fingering = '';
            for (var i = 0; i < this.size; i++) {
                this.fingering += 'x'
            }
        }

        this.init_fingering();

        this.set_fingering = function(fingering_str) {
            purge_redo_stack();
            if (this.fingering) {
                this.prior_fingerings.push(this.fingering);
            }
            if (! fingering_str) {
                this.init_fingering();
            } else {
                this.fingering = fingering_str;
            }
            Undo.push(this);
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

        this.get_fingering = function() {
            if (! this.fingering) {
                return undefined;
            }
            return this.fingering;
        };

        return this;
    }

    function get_score_width() {
        var width_in_inches = 8.5;
        if (Magnification !== 1) {
            width_in_inches *= Magnification;
        }
        var width_str = 'width="' + width_in_inches + 'in"';
        return width_str;
    }

    function User() {
        this.read_file = function (fn) {
            return '';
        };
        this.errmsg = function (msg, l, c) {
            var diverr = document.getElementById(ERROR_DIV_ID);
            if (l)
                diverr.innerHTML += '<b onclick="gotoabc(' +
                    l + ',' + c +
                    ')" style="cursor: pointer; display: inline-block">' +
                    msg + "</b><br/>\n";
            else
                diverr.innerHTML += msg + "<br/>\n";
        };

        this.img_out = function (str) {
            var re = /<svg /;
            if (str.match(re)) {
                str = str.replace(re, '<svg id="line_' + Current_Line_Number + '" ');
                Current_Line_Number++;
            }

            Abc_Images += str;
        };
        this.anno_start = function (type, start, stop, x, y, w, h) {
            if (!Preprocessing_Completed && start in Note_At) {
                Note_At[start].line = Current_Line_Number;
                // print_note('anno_start', note_at[start]);
            } else if (type === 'grace') {
                console.log(type + " ANNO_START start: " + start + " stop: " + stop);
            }
            // keep the source reference
            Ref.push([start, stop])
            // create a container for the music element
            My_Abc.out_svg('<g class="e_' + start + '">\n')
        };
        this.anno_stop = function (type, start, stop, x, y, w, h) {
            if (type === 'grace') {
                console.log(type + " ANNO_STOP start: " + start + " stop: " + stop);
            }
            // close the container
            My_Abc.out_svg('</g>\n');
            // create a rectangle
            My_Abc.out_svg('<rect class="abcr _' + start + '" x="');
            My_Abc.out_sxsy(x, '" y="', y);
            My_Abc.out_svg('" width="' + w.toFixed(2) +
                '" height="' + h.toFixed(2) + '"/>\n')
        };
        this.get_abcmodel = function (tsfirst, voice_tb, music_types) {
            if (Preprocessing_Completed) {
                // We only do this once--for the original abc.
                return;
            }
            console.log(music_types)
            for (var v = 0; v < voice_tb.length; v++) {
                console.log("Voice: " + v);
                var staff_id = voice_tb[v].st;
                Voice_Staff[v] = staff_id;
            }
            var elem = tsfirst;
            while (elem) {
                var note = new Note(music_types, elem);
                if (note.istart) {
                    Notes.push(note);
                    Note_At[note.istart] = note; // !! We link to the overall order of note.
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
        var time_order = parseInt(a.time) - parseInt(b.time);
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
        var note, line, staff;
        // We need the notes ordered in the same way that fingerings
        // will be entered by the user. First, we segregate the notes
        // into appropriate line/staff containers.
        for (var i = 0; i < Notes.length; i++) {
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
                var staff_line_notes = Notes_On_Line[line][staff];
                staff_line_notes.sort(order_notes);
            }
        }

        var this_note, prior_note;
        for (staff = 0; staff < 2; staff++) {
            for (line = 0; line < Notes_On_Line.length; line++) {
                var staff_line_notes = Notes_On_Line[line][staff];
                for (i = 0; i < staff_line_notes.length; i++) {
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
        var key;
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
        var font = '$1'; // Times-Roman for RH fingerings.
        if (hand.match(RH_REG)) {
            font = '$1';
        }
        if (hand.match(LH_REG)) {
            font = '$2'; // Helvetica-Bold font for LH fingerings.
        }
        return font;
    }

    function get_annotation_position(fingering) {
        var position = "^";
        if (/^</.test(fingering)) {
            position = "_";
        }
        return position;
    }

    function get_ornament_annotation_sequence(fingering, staff) {
        var lh_font = get_font_for_hand('<');
        var rh_font = get_font_for_hand('>');
        var cooked_fingering = fingering.replace(/[\)\(]/g, '');
        var fingers = get_tokens(FINGER_RE, cooked_fingering);
        var annotation_str = '';
        for (var i = 0; i < fingers.length; i++) {
            fingers[i] = fingers[i].replace(LH_REG, lh_font);
            fingers[i] = fingers[i].replace(RH_REG, rh_font);
            annotation_str += fingers[i];
        }
        annotation_str += '"';
        var position = get_annotation_position(cooked_fingering);
        annotation_str = '"' + position + annotation_str;
        return annotation_str;
    }

    function get_annotation_sequence(fingers, staff, pad_missing_fingers) {
        var actual_finger_seen = false;
        var lh_font = get_font_for_hand('<');
        var rh_font = get_font_for_hand('>');
        var annotations = [];
        for (var i = 0; i < fingers.length; i++) {
            var annotation = '';
            var finger = 'x';
            if (fingers[i] && fingers[i] !== 'x') {
                actual_finger_seen = true;
                finger = fingers[i];
            } else if (!pad_missing_fingers) {
                break;
            } else if (!fingers[i] || (fingers[i] && fingers[i] === 'x')) {
                continue;
            }
            if (finger.match(/^\(/)) {
                annotation = get_ornament_annotation_sequence(finger, staff);
            } else {
                var position = get_annotation_position(finger);
                finger = finger.replace(LH_REG, lh_font);
                finger = finger.replace(RH_REG, rh_font);
                annotation = '"' + position + finger + '"';
            }
            annotations.unshift(annotation);
        }

        var annotation_str = '';
        if (actual_finger_seen) {
            annotation_str = annotations.join('');
        }

        return annotation_str;
    }

    function get_single_note_annotation(note) {
        var finger_str = note.fingering;
        if (finger_str === 'x') {
            return '';
        }
        finger_str = finger_str.replace(SPACE_RE, '');
        var fingers = get_tokens(FINGER_RE, finger_str);

        var note_annotation = get_annotation_sequence(fingers, note.staff, false);
        return note_annotation;
    }

    function get_sorted_synchronous_pits(notes_with_pits) {
        var pits = [];
        for (var pit in notes_with_pits) {
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
        var pits = [];
        var notes_with_pit = {};
        for (var i = 0; i < synchronous_notes.length; i++) {
            var test_note = synchronous_notes[i];
            if (test_note.grace) {
                // Grace notes, though recorded as synchronous, really precede
                // the synchronous note group.
                continue;
            }
            for (var j = 0; j < test_note.pitches.length; j++) {
                var pit = test_note.pitches[j];
                pits.push(pit);
                if (!(pit in notes_with_pit)) {
                    notes_with_pit[pit] = [];
                }
                notes_with_pit[pit].push(test_note);
            }
        }

        for (i = 0; i < notes_with_pit.length; i++) {
            notes_with_pit[i].sort(order_notes);
        }

        return notes_with_pit;
    }

// Return an array of fingering strings with one element for each pitch
// in the input array of synchronous notes. Empty strings are returned for each
// pit that has no fingering specified.
    function get_synchronous_fingering_array(synchronous_notes) {
        var notes_with_pit = get_sorted_synchronous_notes_with_pit(synchronous_notes);

        // Now we need to map each synchronous pitch to the correct
        // fingering annotation. The fingering is assigned to pitches
        // in ascending order and, in the event of ties, by ascending
        // voice number.
        var pits = get_sorted_synchronous_pits(notes_with_pit);

        var ordered_fingers = [];
        for (var i = 0; i < pits.length; i++) {
            var pit = pits[i];
            for (var j = 0; j < notes_with_pit[pit].length; j++) {
                var pit_note = notes_with_pit[pit][j];
                var note_finger_str = pit_note.fingering;
                var fingers = get_tokens(FINGER_RE, note_finger_str);
                for (var k = 0; k < pit_note.pitches.length; k++) {
                    var pn_pit = pit_note.pitches[k];
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
        var count = 0;
        for (var i = 0; i < synchronous_notes.length; i++) {
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
        var synchronous_notes = Staff_Notes_At_Time[note.staff][note.time];
        var grace_note_count = get_grace_note_count(synchronous_notes);
        var big_note_count = synchronous_notes.length - grace_note_count;
        if (big_note_count < 2) {
            return get_single_note_annotation(note);
        }

        synchronous_notes.sort(order_notes);

        var i = 0;
        var lowest_note = synchronous_notes[0];
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

        var ordered_fingers = get_synchronous_fingering_array(synchronous_notes);
        return get_annotation_sequence(ordered_fingers, note.staff, true);
    }

    function get_grace_note_tokens(note) {
        var tokens = [];

        var str = note.string;
        var starts = note.starts;
        var stops = note.stops;
        var normalized_starts = [];
        var normalized_stops = [];
        for (var i = 0; i < starts.length; i++) {
            normalized_starts.push(starts[i] - starts[0]);
            normalized_stops.push(stops[i] - starts[0]);
        }

        for (var j = 0; j < normalized_starts.length; j++) {
            var token = str.substring(normalized_starts[j], normalized_stops[j]);
            tokens.push(token);
        }

        return tokens;
    }

    function get_fingered_grace_note(note) {
        var abc_str = '{';
        var grace_tokens = get_grace_note_tokens(note);
        // Only single digits are allowed for each grace note token
        // (no slashes, hyphens, or ornaments).
        // FIXME: This should be enforced in the UI.
        var finger_tokens = [];
        if (note.fingering) {
            finger_tokens = get_tokens(FINGER_RE, note.fingering);
        }

        for (var token_num = 0; token_num < grace_tokens.length; token_num++) {
            if (finger_tokens[token_num]) {
                var naked_finger = finger_tokens[token_num];
                naked_finger = naked_finger.replace(RL_REG, '');
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

        var synchronous_notes = Staff_Notes_At_Time[note.staff][note.time];
        for (var i = 0; i < synchronous_notes.length; i++) {
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
        var found_one = false;
        var found_two = false;
        var lines = Org_Abc_Str.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
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
        var lines = Org_Abc_Str.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
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
        for (var i = 0; i < Sorted_Note_Locations.length; i++) {
            var sorted_loc = Sorted_Note_Locations[i];
            var note = Note_At[sorted_loc];
            if (note.grace) {
                Grace_Notes_In_Source = true;
                break;
            }
        }
        return Grace_Notes_In_Source;
    }

    function get_fingered_abc_str() {
        // Loop over note_at in numeric order and add each annotation we know about.

        var fingered_str = ''

        // If we see fonts, we assume put them there, so we don't want
        // to add any of our special macros ("hackros"). Otherwise, we do.
        if (!fonts_set_in_source()) {
            fingered_str += SETFONT_COMMANDS + "\n";
            if (grace_notes_in_source()) {
                fingered_str += GRACE_NOTE_DECORATIONS + "\n";
            }
        }

        if (!numbering_set_in_source()) {
            var numbering_setting = get_setting('measure_number_interval');
            if (numbering_setting) {
                fingered_str += '%%measurenb ' + numbering_setting + "\n";
            }
        }

        var prior_loc = 0;
        for (var i = 0; i < Sorted_Note_Locations.length; i++) {
            var sorted_loc = Sorted_Note_Locations[i];
            var note = Note_At[sorted_loc];
            var prologue = '';
            if (note.grace) {
                prologue = Org_Abc_Str.substring(parseInt(prior_loc), parseInt(note.start - 1));
                // Subtract one because open brace is not included in note string. We will add it
                // back later.
                prior_loc = note.end + 1;
                fingered_str += prologue;

                // For some reason, abc2svg considers the starting point of the last note
                // as the starting point for the grace note group as a whole. We are adjusting
                // for that weirdness here:
                note.fingered_start = fingered_str.length + note.anno_start - note.start + 1;
                if (note.fingering && note.fingering !== 'x') {
                    // Each fingering annotation takes exactly three characters, since
                    // only one digit may be assigned to a grace-note element.
                    var finger_tokens = get_tokens(FINGER_RE, note.fingering);
                    note.fingered_start += 3 * finger_tokens.length;
                }
                fingered_str += get_fingered_grace_note(note);
            } else {
                var start_loc = parseInt(note.start);
                var end_loc = parseInt(note.end);
                prologue = Org_Abc_Str.substring(parseInt(prior_loc), start_loc);
                fingered_str += prologue;
                prior_loc = end_loc;
                if (is_epoch_fingered(note)) {
                    fingered_str += get_note_annotation(note);
                }
                note.fingered_start = fingered_str.length;
                fingered_str += note.string;
            }
            Fingered_Note_At[note.fingered_start] = note;
        }
        fingered_str += Org_Abc_Str.substring(prior_loc);
        return fingered_str;
    }

    function rerender() {
        Toggling_Background = true;
        Rerender_Count++;
        console.log("RERENDERING NUMBER " + Rerender_Count);
        var start_time = new Date().getTime();
        var target = document.getElementById(TARGET_DIV_ID),
            diverr = document.getElementById(ERROR_DIV_ID);
        var user = new User();
        My_Abc = new Abc(user);

        var abc_str = get_fingered_abc_str();
        ///console.log("New abc: " + abc_str);
        var end_time = new Date().getTime();
        var elapsed = end_time - start_time;
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
            var elts = document.getElementsByClassName('abcr'),
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
            var current_characters = get_unblanked_current_characters();
            if (current_characters.length > 0 && current_characters[0]) {
                Current_Note.set_fingering('');
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
        var key_code = e.keyCode;
        var event_handled = handle_key_code(key_code);
        if (event_handled) {
            e.preventDefault();
        }
        return event_handled;
    }

    function handle_navigation_input(button_id) {
        var key_code = TAB_CODE;
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
        var event_handled = handle_key_code(key_code);
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

    function get_pitch_fingering(leaf_node, note) {
        var current_hand = get_current_hand(note);
        if (! leaf_node.fingering.strike) {
            return 'x';
        }
        var hand = leaf_node.fingering.strike.hand || current_hand;
        var str = hand + leaf_node.fingering.strike.digit;
        if (leaf_node.fingering.release) {
            hand = leaf_node.fingering.release.hand || current_hand;
            str += '-' + hand + leaf_node.fingering.release.digit;
        }
        return str;
    }

    function get_abcd_for_score_fingering(score_fingering, note) {
        var str = '';
        var elements = [];
        var element_fingering;
        var i;
        if (score_fingering.first.ornaments) {
            // FIXME: #119
            elements = score_fingering.first.ornaments[0];
            str += '(';
            for (i = 0; i < elements.length; i++) {
                element_fingering = elements[i];
                str += get_pitch_fingering(element_fingering, note);
            }
            str += ')';
        } else {
            str += get_pitch_fingering(score_fingering.first, note);
        }
        if (score_fingering.last && score_fingering.last.ornaments) {
            // FIXME: #119
            elements = score_fingering.last.ornaments[0];
            str += '(';
            for (i = 0; i < elements.length; i++) {
                element_fingering = score_fingering.last.ornaments[i];
                str += '/' + get_pitch_fingering(element_fingering, note);
            }
            str += ')';
        } else if (score_fingering.last) {
            str += '/' + get_pitch_fingering(score_fingering.last, note);
        }
        return str;
    }

    function finger_current_from_nodes(new_score_fingerings) {
        var new_fingering = '';
        var current_finger_count = 0;
        while (current_finger_count < Current_Note.size) {
            var score_fingering = new_score_fingerings.shift();
            var abcd = get_abcd_for_score_fingering(score_fingering, Current_Note);
            new_fingering += abcd;
            current_finger_count++;
            if (new_score_fingerings.length === 0) {
                break;
            }
        }

        if (current_finger_count === Current_Note.size) {
            Current_Note.set_fingering(new_fingering);
            return true; // Move on.
        }

        for (; current_finger_count < Current_Note.size; current_finger_count++) {
            new_fingering += 'x';
        }

        Current_Note.set_fingering(new_fingering);
        return false; // Do not move on to next "note."
    }

    function finger_notes_from_parse(parse) {
        var new_score_fingerings = parse.upper.score_fingerings;
        while (new_score_fingerings.length > 0) {
            if (finger_current_from_nodes(new_score_fingerings) && Current_Note.next_note) {
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
        var unblanked_chars = [];

        var fingering = Current_Note.get_fingering();
        var current_fingerings = fingering.split('');
        for (var i = 0; i < current_fingerings.length; i++) {
            var char = current_fingerings[i];
            if (char === 'x') {
                unblanked_chars.push('');
            } else {
                unblanked_chars.push(char);
            }
        }
        return unblanked_chars;
    }

    function buffer_current_fingering() {
        var current_characters = get_unblanked_current_characters();
        while (current_characters.length) {
            var char = current_characters.pop();
            if (char) {
                Input_Buffer.unshift(char);
            }
        }
    }

    function are_within_ornament() {
        for (var i = 0; i < Trailing_Characters.length; i++) {
            if (Trailing_Characters[i] === '(') {
                return true;
            }
        }
        return false;
    }

    function flush_buffer() {
        var modifying_prior_note = false;
        if (Trailing_Characters.length > 0) {
            // Insert modifying characters not processed last time.
            Array.prototype.unshift.apply(Input_Buffer, Trailing_Characters);
            if (! are_within_ornament()) {
                modifying_prior_note = true;
            }
        }

        // Remember any trailing characters entered for next time we flush.
        Trailing_Characters = [];
        for (var i = Input_Buffer.length - 1; i >= 0; i--) {
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
            var current_characters = get_unblanked_current_characters();
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

        var input = Input_Buffer.join('');
        var truncation_count = 0;
        var try_count = 1;
        while (true) {
            try {
                var parsimony = Abcdf_Parser.parse(input);
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
        Current_Note.phrase_break = char.toUpperCase();
    }

    function buffer_character_input(char) {
        clearTimeout(Timer);

        var character_processed = false;
        if (/[\(\)\/\-1-5]/.test(char)) {
            Input_Buffer.push(char);
            character_processed = true;
        }
        if (char === 't' || char === 'T') {
            flush_buffer();
            toggle_hand();
            character_processed = true;
        }
        if (char === 's' || char === 'S' ||
            char === 'm' || char === 'M' ||
            char === 'l' || char === 'L') {
            flush_buffer();
            mark_phrase(char);
            character_processed = true;
        }
        Timer = setTimeout(flush_buffer, TIMEOUT_MS);
        console.log("Done " + Timer);
        return character_processed;
    }

    function handle_keypress(e) {
        var char = get_char(e).toLowerCase();
        return buffer_character_input(char);
    }

    function process_options(options) {
        if (!Options) {
            Options = options;
        }
    }

    function get_abcd_version() {
        return 5;
    }

    function get_abcd_hdr() {
        var abcd_hdr = "% abcDidactyl v" + get_abcd_version();
        return abcd_hdr;
    }

    function get_abcd_fingering_preamble(fingering_number) {
        var preamble = '% abcD fingering ' + fingering_number + ': ';
        return preamble;
    }

    function get_abcd(abc_str, pii_okay) {
        var body_lines = [];
        var header_lines = [];
        header_lines.push(get_abcd_hdr());
        var sequences = get_sequences(abc_str);

        var lines = abc_str.split("\n");
        var input_abcd_version = '';
        var out_of_abcd_block = false;
        var match;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
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

        var current_sequence_number = get_current_sequence_number();
        var current_sequence = get_current_sequence(pii_okay);

        if (get_setting('output') === 'replace') {
            var sequence_index = current_sequence_number - 1;
            sequences[sequence_index] = current_sequence;
        } else {
            sequences.push(current_sequence);
        }

        var fingering_line, authority_line, transcriber_line, date_line, comments;
        for (var i = 0; i < sequences.length; i++) {
            var sequence_number = i + 1;
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
            for (var j = 0; j < comments.length; j++) {
                if (j !== comments.length - 1 || comments[j]) {
                    header_lines.push('% ' + comments[j]);
                }
            }
        }

        header_lines.push('% abcDidactyl END');

        var header_str = header_lines.join("\n");
        var body_str = body_lines.join("\n");
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

        var abcde_div = document.getElementById(ABCDE_DIV_ID);
        abcde_div.align = 'center';
        var source_div = document.getElementById(SOURCE_ID);
        if (!source_div) {
            source_div = document.createElement('div');
            source_div.id = SOURCE_ID;
            source_div.style.display = 'none';
            abcde_div.appendChild(source_div);
        }
        source_div.class = SOURCE_CLASS_ID;

        var prefs_div = document.createElement(PREFS_DIV_ID);
        prefs_div.id = PREFS_DIV_ID;
        abcde_div.appendChild(prefs_div);
        var controls_div = document.createElement(CONTROLS_DIV_ID);
        controls_div.id = CONTROLS_DIV_ID;
        abcde_div.appendChild(controls_div);
        var metadata_div = document.createElement(METADATA_DIV_ID);
        metadata_div.id = METADATA_DIV_ID;
        abcde_div.appendChild(metadata_div);
        var rendering_div = document.createElement(RENDERING_DIV_ID);
        rendering_div.id = RENDERING_DIV_ID;
        abcde_div.appendChild(rendering_div);
        var target_div = document.createElement(TARGET_DIV_ID);
        target_div.id = TARGET_DIV_ID;
        rendering_div.appendChild(target_div);
        var err_div = document.createElement(ERROR_DIV_ID);
        err_div.id = ERROR_DIV_ID;
        rendering_div.appendChild(err_div);
        // Hack because CSS doesn't add space, and we don't want to obscure
        // the end of the score:
        for (var i = 0; i < 7; i++) {
            rendering_div.appendChild(document.createElement('br'));
        }
        var keypad_div = document.createElement(KEYPAD_DIV_ID);
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
            var url = get_setting('default_url');
            if (url) {
                make_cors_request(url);
                Org_Abc_Str = document.getElementById(SOURCE_ID).value;
            }
        }
        Toggling_Background = true;
        if (Org_Abc_Str) {
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

        var qualtrics = get_setting('qualtrics');
        if (qualtrics) {
            qualtrics.disableNextButton();
            qualtrics.disablePreviousButton();
        }
    }

    function render_new_sequence() {
        initialize_globals();
        Org_Abc_Str = document.getElementById(SOURCE_ID).value;
        render();
        Current_Note = Notes_On_Line[0][0][0];
        highlight_note(Current_Note);
        handle_keys();
    }

    function process_note_click(happening) {
        console.log("Processing note click....");
        var classiness = happening.getAttribute('class');
        console.log("Click " + classiness);
        var tokens = classiness.split('_');
        var note_loc = tokens[1];
        if (note_loc in Fingered_Note_At) {
            var clicked_note = Fingered_Note_At[note_loc];
            print_note('process_note_click', clicked_note);
            highlight_note(clicked_note);
            Current_Note = clicked_note;
        }
    }

    function setEnteredCollection(abcdf) {
        Current_Note = Notes_On_Line[0][0][0];
        var seq_number = get_current_sequence_number();
        var seq = get_current_sequence(true);
        seq.sequence = abcdf;
        var autosaved = get_autosaved_sequence(seq_number);
        set_preferred_sequence(autosaved, seq);
        rerender();
        highlight_note(Current_Note);
    }

    function undo() {
        punt_on_input();
        var last_note_changed = Undo.pop();
        if (last_note_changed) {
            last_note_changed.undo_fingering_change();
            Current_Note = last_note_changed;
            rerender();
            highlight_note(Current_Note);
        }
    }

    function redo() {
        punt_on_input();
        var last_note_undone = Redo.pop();
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
        var prompt = '';
        if (Current_Note.preset_fingering) {
            prompt += "Preset (recommended) fingering: " + Current_Note.preset_fingering + "\n\n";
        }
        prompt += 'Please enter a fingering string for the selected note.';
        var initial_fingering = Current_Note.fingering;
        var new_fingering = window.prompt(prompt, initial_fingering);
        try {
            if (new_fingering === null) {
                return;
            }
            var parsimony = Abcdf_Parser.parse(new_fingering);
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
        var user = new User();
        var target = document.getElementById(TARGET_DIV_ID),
            diverr = document.getElementById(ERROR_DIV_ID);
        target.align = 'center';
        My_Abc = new Abc(user);
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

// select a source ABC element
    function gotoabc(l, c) {
        var s = document.getElementById(SOURCE_ID),
            idx = 0;
        while (--l >= 0) {
            idx = s.value.indexOf('\n', idx) + 1;
            if (idx <= 0) {
                alert('bad line number');
                idx = s.value.length - 1;
                c = 0;
                break;
            }
        }
        c = Number(c) + idx;
        s.focus();
        s.setSelectionRange(c, c + 1);
    }

    function setcolor(cl, color) {
        var elts = document.getElementsByClassName(cl),
            i = elts.length,
            elt;
        while (--i >= 0) {
            elt = elts[i];
            elt.setAttribute("color", color);
        }
    }

    function colorsel(color) {
        var i, n = Colcl.length;
        for (i = 0; i < n; i++)
            setcolor(Colcl[i], color);
    }

    function is_fully_visible(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var key_pad = document.getElementById(KEYPAD_DIV_ID);

        var doc_top = $window.scrollTop();
        var doc_bottom = doc_top + $window.height() - key_pad.offsetHeight;

        var elem_top = $elem.offset().top;
        var elem_bottom = elem_top + $elem.height();

        return ((elem_bottom <= doc_bottom) && (elem_top >= doc_top));
    }

    // function keep_in_view(elem) {

    function highlight_note(note) {
        var note_start = note.fingered_start;
        if (Colcl.length != 0) {
            colorsel("black");
            Colcl = [];
        }

        Colcl.push('e_' + note_start);
        if (Toggled) {
            if (note.staff === 0) {
                colorsel("blue");
            } else {
                colorsel("red");
            }
        } else {
            if (note.staff === 1) {
                colorsel("blue");
            } else {
                colorsel("red");
            }
        }

        var line_key = 'line_' + note.line;
        var line_svg = document.getElementById(line_key);
        if (! is_fully_visible(line_svg)) {
            line_svg.scrollIntoView(false);
            var key_pad = document.getElementById(KEYPAD_DIV_ID);
            var y = document.body.scrollTop;
            window.scrollTo(0, y + key_pad.offsetHeight);
        }
    }

    function getXValue(abc_str) {
        if (! abc_str) {
            abc_str = Org_Abc_Str;
        }
        var lines = abc_str.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (/^\s*X:/.test(line)) {
                var tokens = line.split(':');
                if (tokens.length != 2) {
                    return '';
                }
                var val = tokens[1].trim();
                return val;
            }
        }
        return '';
    }

    function get_verbose_note_fingering(note, all_or_nothing) {
        var finger_tokens = [];
        if (note.fingering) {
            finger_tokens = get_tokens(FINGER_RE, note.fingering);
        } else if (all_or_nothing) {
            return "";
        }

        if (all_or_nothing && finger_tokens.length != note.size) {
            return "";
        }

        var finger_str = note.fingering || "";
        for (var i = finger_tokens.length; i < note.size; i++) {
            finger_str += "x";
        }
        return finger_str;
    }

    function get_note_fingering_for_output(note, all_or_nothing) {
        if (note.grace) {
            return get_verbose_note_fingering(note, all_or_nothing);
        }

        var synchronous_notes = Staff_Notes_At_Time[note.staff][note.time];
        var grace_note_count = get_grace_note_count(synchronous_notes);
        var big_note_count = synchronous_notes.length - grace_note_count;
        if (big_note_count < 2) {
            return get_verbose_note_fingering(note, all_or_nothing);
        }

        synchronous_notes.sort(order_notes);

        var i = 0;
        var lowest_note = synchronous_notes[0];
        while (lowest_note.grace) {
            i++;
            lowest_note = synchronous_notes[i];
        }
        //var lowest_note = synchronous_notes[0];
        //if (synchronous_notes[0].grace) {
            //lowest_note = synchronous_notes[1];
        //}

        if (note !== lowest_note) {
            // Only annotate first note (as sorted by lowest pitch, then voice).
            return '';
        }

        var ordered_fingers = get_synchronous_fingering_array(synchronous_notes);
        var finger_str = '';
        for (var i = 0; i < ordered_fingers.length; i++) {
            if (!ordered_fingers[i]) {
                finger_str += 'x';
            } else {
                finger_str += ordered_fingers[i];
            }
        }
        return finger_str;
    }

    function clean_fingering_line(fingering, last_hand) {
        var clean_tokens = [];
        var current_hand = last_hand;
        var tokens = fingering.split('');
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (!token.match(RL_REG)) {
                clean_tokens.push(token);
            } else if (token !== current_hand) {
                clean_tokens.push(token);
                current_hand = token;
            }
        }
        return clean_tokens.join('');
    }

    function get_fingerings_for_output(staff_number, line_number, last_hand) {
        var sl_notes = Notes_On_Line[line_number][staff_number];

        var fingerings = '';
        for (var i = 0; i < sl_notes.length; i++) {
            var note = sl_notes[i];
            var fingering = get_note_fingering_for_output(note, false);
            fingerings += fingering;
        }

        return fingerings;
    }

    function get_new_last_hand(finger_str, old_last_hand) {
        var match = LAST_HAND_RE.exec(finger_str);
        if (match && match[1]) {
            return match[1];
        }
        return old_last_hand;
    }

    function current_collection() {
        var all_treble_fingers = '';
        var all_bass_fingers = '';
        var last_treble_hand = get_staff_hand(0); // upper
        var last_bass_hand = get_staff_hand(1); // lower
        for (var i = 0; i < Notes_On_Line.length; i++) {
            var treble_fingerings = get_fingerings_for_output(0, i);
            if (treble_fingerings) {
                treble_fingerings = clean_fingering_line(treble_fingerings, last_treble_hand);
                last_treble_hand = get_new_last_hand(treble_fingerings, last_treble_hand);
                all_treble_fingers += treble_fingerings;
                if (i < Notes_On_Line.length - 1) {
                    all_treble_fingers += '&';
                }
            }
            if (Notes_On_Line[i][1]) {
                var bass_fingerings = get_fingerings_for_output(1, i);
                if (bass_fingerings) {
                    bass_fingerings = clean_fingering_line(bass_fingerings, last_bass_hand);
                    last_bass_hand = get_new_last_hand(bass_fingerings, last_bass_hand);
                    all_bass_fingers += bass_fingerings;
                    if (i < Notes_On_Line.length - 1) {
                        all_bass_fingers += '&';
                    }
                }
            }
        }

        var all_fingers = all_treble_fingers + '@' + all_bass_fingers;
        return all_fingers;
    }

    function print_score() {
        console.log("Print that score.");
        var print_window = window.open('', 'print_window');
        print_window.document.write(Abc_Images);
        print_window.document.close();
        print_window.focus();
        print_window.print();
        print_window.close();
    }

    function load_fingering() {
        var source_elem = document.getElementById(SOURCE_ID);
        source_elem.value = Org_Abc_Str;
        render_new_sequence();
    }

    function get_persisting_abcd() {
        var abc_str, abcd_str;

        if (Persist_Annotated) {
            abc_str = get_fingered_abc_str();
            abcd_str = get_abcd(abc_str, true);
        } else {
            abcd_str = get_abcd(Org_Abc_Str, true);
        }
        return abcd_str;
    }

    function view_source() {
        var abcd_str = get_persisting_abcd();
        window.open('data:text/vnd.abc;charset=utf-8,' + encodeURI(abcd_str), 'view_window');
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
            return "Bad abcDF parse of fingering string: " + e.message + e.stack;
        }

        var missing_count = 0;
        var required_validation = get_setting('validate');
        if (required_validation === 'complete') {
            missing_count = abcdf_str.split('x').length - 1;
        } else if (required_validation === 'none') {
            missing_count = 0;
        } else if (required_validation === 'auto') {
            return 'Validation of autofill is not yet implemented.';
            return 9999;
        }

        if (missing_count === 1) {
            return 'One note is missing a fingering annotation.';
        } else if (missing_count > 1) {
            return missing_count + " notes are missing fingering annotations.";
        }

        return '';
    }

    function is_valid_abcdf(abcdf_str) {
        var invalidity = is_invalid_abcdf(abcdf_str);
        if (invalidity) {
            alert(invalidity);
            return false;
        }
        return true;
    }

    function getValidatedCollection() {
        var dat = current_collection();
        if (is_valid_abcdf(dat)) {
            return dat;
        }
        return '';
    }

    function getEnteredAbcD() {
        var abc_str = get_fingered_abc_str();
        return get_abcd(abc_str, false);
    }

    function getValidatedAbcD() {
        var abcdf = current_collection();
        if (is_valid_abcdf(abcdf)) {
            var abc_str = get_fingered_abc_str();
            var abcd = get_abcd(abc_str, false);
            if (!/^\s*X:/m.test(abcd)) {
                alert("File is not valid abc.")
                return '';
            } else if (!/^% abcDidactyl/m.test(abcd)) {
                alert("File is not valid abcD.")
                return '';
            }
            return abcd;
        }
        return '';
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

    return this;
}
