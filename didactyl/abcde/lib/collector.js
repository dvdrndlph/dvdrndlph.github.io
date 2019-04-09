// var DB_BASE_URL = 'https://52.9.186.114/'; // Amazon
var DB_BASE_URL = '/'; // UIC
var DB_ANNOTATION_URL = DB_BASE_URL + 'annotation.php';
var CONSENT_KEY = 'didactyl_collector_consent';
var SELECTIONS_KEY = 'didactyl_collector_selections';
var COMPLETIONS_KEY = 'didactyl_collector_completions';
var CLIENT_ID_KEY = 'didactyl_collector_user_id';
var DEFAULT_URL_DIR = "https://nlp-music.cs.uic.edu/corpora";

var abcDE;
var consenting;
var preset;
var interpolate;
var informed = false;
var client_id;
var sequence_id;
var selection_str = '[]';
var completion_str = '[]';
var selections = [];
var selection_id;
var partial_ok = false;
var completions = [];

// Following function borrowed from http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript.
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function start_over() {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(SELECTIONS_KEY);
    localStorage.removeItem(COMPLETIONS_KEY);
    localStorage.removeItem(CLIENT_ID_KEY);
    window.location = window.location.pathname;
}

function urlForId(id) {
    var re = /^([a-z]+)((\d+)_?(\d+)?)/;
    var matches = id.match(re);
    var corpus_id = matches[1];
    var file_id = matches[2]
    // var selection_id = matches[3];
    // var phrase_id = matches[4];
    var subdir = 'wtc';
    if (corpus_id == 'c') {
        subdir = 'clementi';
    }
    var file_name = file_id;
    if (subdir == 'wtc') {
        let pf_re = /.*1$/;
        if (pf_re.test(id)) {
            file_name = 'prelude' + file_id;
        }
    }
    file_name += '.abc';
    var url = DEFAULT_URL_DIR + '/' + subdir + '/' + file_name;
    return url;
}


function processConsent() {
    var formality = document.getElementById('consent_form');
    var eighteen = document.forms["consent_form"].elements["eighteen"];
    var understand = document.forms["consent_form"].elements["understand"];
    if (eighteen.checked && understand.checked) {
        console.log("He or she consented!!");
        localStorage.setItem(CONSENT_KEY, 'yes');
        formality.style.display = 'none';
    } else {
        console.log("NO soup for you.");
        alert("Both checkboxes must be checked to indicate your consent. Please close your browser window if you do not wish to participate. Thank you for your time.");
    }
    location.reload(true);
}

function startAnnotating() {
    // location.reload(true);
    window.onload();
}

var EXIT_JSON = {
    pages: [
        {
            name: "Satisfaction",
            questions: [
                {
                    type: "matrix",
                    columns: [
                        {
                            value: "1",
                            text: "Strongly disagree"
                        },
                        {
                            value: "2",
                            text: "Disagree"
                        },
                        {
                            value: "3",
                            text: "Not sure"
                        },
                        {
                            value: "4",
                            text: "Agree"
                        },
                        {
                            value: "5",
                            text: "Strongly agree"
                        }
                    ],
                    name: "reflection",
                    rows: [
                        {
                            value: "bestForMe",
                            text: "The fingerings I entered are the best for me."
                        },
                        {
                            value: "badForOthers",
                            text: "The fingerings I entered may not be good for other people."
                        },
                        {
                            value: "badUi",
                            text: "The survey tool did not allow me to enter the fingerings that I would use."
                        }
                    ],
                    title: "Please reflect on your fingerings for this piece."
                }
            ]
        },
        {
            name: "Problems",
            questions: [
                {
                    type: "comment",
                    name: "problems",
                    title: "Please describe any problems you encountered in annotating this piece, including any inconsistencies between the notes on your score and the notes presented in the survey."
                }
            ]
        },
        {
            name: "Performance",
            questions: [
                {
                    type: "radiogroup",
                    name: "performed",
                    title: "Have you performed this piece in public?",
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ]
                }
            ]
        }
    ]
};

function abort_submission() {
    location.reload(true);
}

function get_current_date_string() {
    var current_date = new Date();
    var date_str = current_date.getFullYear() + '-' +
        sprintf("%02d", (current_date.getMonth() + 1)) + '-' +
        sprintf("%02d", current_date.getDate()) + ' ' +
        sprintf("%02d", current_date.getHours()) + ":" +
        sprintf("%02d", current_date.getMinutes()) + ":" +
        sprintf("%02d", current_date.getSeconds());
    return date_str;
}

function generate_client_id(email) {
    var date_str = get_current_date_string();
    var str_to_hash = date_str + email;
    var key = md5(str_to_hash);
    return key;
}

function post_annotation(survey_data) {
    var survey_div = document.getElementById('exit_survey');
    var thank_you_div = document.getElementById('submission_complete');
    var abort_button = document.getElementById('abort_submission');

    var url = DB_ANNOTATION_URL;
    var data_str = JSON.stringify(survey_data);
    console.log("POSTing: " + data_str);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: data_str,
        dataType: "json",
        url: url,
        success: function (data) {
            if (data.status !== 0) {
                var error_msg = "Attempt to save your data failed. " +
                    "Please contact the study coordinator at drando2@uic.edu.\n\n" +
                    "Thank you.\n\n" + data.msg;
                alert(error_msg);
                console.log(error_msg);
                console.log(JSON.stringify(data));
            } else {
                completions.push(survey_data.selectionId);
                completion_str = JSON.stringify(completions);
                localStorage.setItem(COMPLETIONS_KEY, completion_str);
                survey_div.style.display = 'none';
                abort_button.style.display = 'none';
                thank_you_div.style.display = 'block';
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("The database could not be reached.\n\n" +
                "Status: " + textStatus + "\n\n" +
                "Error: " + errorThrown);
        }
    });
}

function submit_annotation() {
    let abort_button = document.getElementById('abort_submission');
    abort_button.style.display = 'block';

    // var selection_id = abcDE.getXValue();
    let abcDF = abcDE.getEnteredAbcDF();
    if (! partial_ok) {
        let x_re = /x/;
        if (x_re.test(abcDF)) {
            alert("The entered fingering sequence is incomplete. Please go back and provide the missing annotations.");
        }
    }
    var abcD = abcDE.getEnteredAbcD();
    abcDE.unhandleKeys();
    var abcde_div = document.getElementById('abcde');
    abcde_div.style.display = 'none';
    var survey = new Survey.Survey(EXIT_JSON, 'exit_survey');
    survey.showTitle = true;
    survey.pagePrevText = 'BACK';
    survey.pageNextText = 'NEXT';
    survey.completeText = 'SUBMIT';
    survey.showQuestionNumbers = 'off';
    survey.showPageTitles = true;
    survey.onComplete.add(function(s) {
        survey.setValue("clientId", client_id);
        survey.setValue("selectionId", selection_id);
        survey.setValue("abcDF", abcDF);
        survey.setValue("abcD", abcD);
        post_annotation(survey.data);
    });
    survey.render('exit_survey');
}

// The following function was swiped from
// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function() {
    client_id = getQueryVariable("client_id");
    console.log("Value of user client_id is " + client_id);
    preset = getQueryVariable("preset");
    console.log("Value of preset is " + preset);
    consenting = localStorage.getItem(CONSENT_KEY);
    selection_str = getQueryVariable("selections");
    console.log("Value of selections is " + selection_str);
    interpolate = getQueryVariable("interpolate");
    console.log("Value of user client_id is " + client_id);
    selections = selection_str.split(",");
    completion_str = localStorage.getItem(COMPLETIONS_KEY);
    sequence_id = getQueryVariable("sequence_id");
    console.log("Value of user sequence_id is " + sequence_id);
    partial_ok = getQueryVariable("partial_ok");
    console.log("Value of all is " + require_all);

    var resetting = getParameterByName('reset');
    if (resetting) {
        start_over();
        return;
    }
    var interpols = document.getElementById('interpolation_instructions');
    var annots = document.getElementById('annotation_instructions');
    if (interpolate) {
        interpols.style.display = 'block';
        annots.style.display = 'none';
    } else {
        interpols.style.display = 'none';
        annots.style.display = 'block';
    }

    if (consenting === 'yes') {
        if (! informed) {
            var instructions = document.getElementById('instructions');
            instructions.style.display = 'block';
            informed = true;
        }
        else {
            var instructions = document.getElementById('instructions');
            instructions.style.display = 'none';
            completions = JSON.parse(completion_str);
            if (! completions) {
                completions = [];
            }
            if (selections.length === completions.length) {
                // Hide editor.
                var abcde_div = document.getElementById('abcde');
                abcde_div.style.display = 'none';

                // All done.
                var instructions = document.getElementById('all_done');
                instructions.style.display = 'block';
            } else {
                for (var i = 0; i < selections.length; i++) {
                    selection_id = selections[i];
                    if ($.inArray(selection_id, completions) > -1) {
                        // Already did it.
                        continue;
                    }
                    if ($.inArray(selection_id, selections) < 0) {
                        // Ain't gonna do it.
                        continue;
                    }
                    var url = urlForId(selection_id);
                    var settings = {
                        experiment_id: 'collector',
                        submit_button_id: 'didactyl_collector_submit',
                        submit_button_label: 'NEXT',
                        restore: 'always',
                        default_url: url,
                        file_input: false,
                        url_input: false,
                        preset_select: false,
                        sequence_id: sequence_id,
                        hide_print: true,
                        hide_view: true,
                        hide_prefs: true,
                        hide_annotated: true,
                        hide_copy: true,
                        hide_paste: true,
                        hide_metadata: true,
                    };
                    abcDE = new AbcDE();
                    abcDE.renderUI(settings);
                    var next_button = document.getElementById('didactyl_collector_submit');
                    next_button.onclick = submit_annotation;
                    break;
                }
            }
        }
    } else {
        var consent_div = document.getElementById('consent_form');
        consent_div.style.display = 'block';
    }
};

