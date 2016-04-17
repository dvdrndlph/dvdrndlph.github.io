// localStorage.clear();
var SURVEYOR_CONSENT_KEY = 'didactyl_survey_iii_consent';
var SURVEYOR_EMAIL_KEY = 'didactyl_survey_iii_email_address';
var SURVEYOR_SELECTIONS_KEY = 'didactyl_survey_iii_selections';
var SURVEYOR_COMPLETIONS_KEY = 'didactyl_survey_iii_completions';
var SORTED_SELECTION_IDS = [
    '171', '172', '91', '92', '151', '152', '31', '32', '61', '62',
    '211', '212', '51', '52', '21', '22', '11', '12'
];
var DEFAULT_URL_DIR = "https://dvdrndlph.github.io/didactyl/wtc/";
var FILE_FOR_ID = {
    11: "prelude01.abc",
    21: "prelude02.abc",
    31: "prelude03.abc",
    51: "prelude05.abc",
    61: "prelude06.abc",
    91: "prelude09.abc",
    151: "prelude15.abc",
    171: "prelude17.abc",
    211: "prelude21.abc",
    12: "fugue01.abc",
    22: "fugue02.abc",
    32: "fugue03.abc",
    52: "fugue05.abc",
    62: "fugue06.abc",
    92: "fugue09.abc",
    152: "fugue15.abc",
    172: "fugue17.abc",
    212: "fugue21.abc"
}

var abcDE;
var consenting;
var email;
var selection_str = '[]';
var completion_str = '[]';
var selections = [];
var completions = [];

function urlForId(id) {
    var url = DEFAULT_URL_DIR + FILE_FOR_ID[id];
    return url;
}

var PRELIM_JSON = {
    pages: [
        {
            name: "Contact info",
            questions: [
                {
                    type: "text",
                    name: "first_name",
                    title: "First name",
                    isRequired: true,
                    size: "40"
                },
                {
                    type: "text",
                    name: "last_name",
                    title: "Last name",
                    isRequired: true,
                    size: "40"
                },
                {
                    type: "text",
                    name: "email",
                    title: "Email address",
                    isRequired: true,
                    size: "60"
                }
            ]
        },
        {
            name: "Selections",
            questions: [
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "11",
                            text: "Prelude 1 in C Major"
                        },
                        {
                            value: "12",
                            text: "Fugue 1 in C Major"
                        },
                        {
                            value: "21",
                            text: "Prelude 2 in C Minor"
                        },
                        {
                            value: "22",
                            text: "Fugue 2 in C Minor"
                        },
                        {
                            value: "31",
                            text: "Prelude 3 in C-Sharp Major"
                        },
                        {
                            value: "32",
                            text: "Fugue 3 in C-Sharp Major"
                        },
                        {
                            value: "51",
                            text: "Prelude 5 in D Major"
                        },
                        {
                            value: "52",
                            text: "Fugue 5 in D Major"
                        },
                        {
                            value: "61",
                            text: "Prelude 6 in D Minor"
                        },
                        {
                            value: "62",
                            text: "Fugue 6 in D Minor"
                        },
                        {
                            value: "91",
                            text: "Prelude 9 in E Major"
                        },
                        {
                            value: "92",
                            text: "Fugue 9 in E Major"
                        },
                        {
                            value: "151",
                            text: "Prelude 15 in G Major"
                        },
                        {
                            value: "152",
                            text: "Fugue 15 in G Major"
                        },
                        {
                            value: "171",
                            text: "Prelude 17 in A-Flat Major"
                        },
                        {
                            value: "172",
                            text: "Fugue 17 in A-Flat Major"
                        },
                        {
                            value: "211",
                            text: "Prelude 21 in B-Flat Major"
                        },
                        {
                            value: "212",
                            text: "Fugue 21 in B-Flat Major"
                        }
                    ],
                    colCount: 2,
                    name: "selections",
                    title: "Please indicate the pieces from Book 1 of Bach's Well Tempered Clavier for which you have worked out fingerings available."
                }
            ]
        },
        {
            name: "Primary source",
            questions: [
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "Béla Bartók",
                            text: "Béla Bartók"
                        },
                        {
                            value: "Ferruccio Busoni",
                            text: "Ferruccio Busoni"
                        },
                        {
                            value: "Alfredo Casella",
                            text: "Alfredo Casella"
                        },
                        {
                            value: "Carl Czerny",
                            text: "Carl Czerny"
                        },
                        {
                            value: "Eugene d'Albert",
                            text: "Eugene d'Albert"
                        },
                        {
                            value: "Ernst-Günter Heinemann (fingerings by András Schiff)",
                            text: "Ernst-Günter Heinemann (fingerings by András Schiff)"
                        },
                        {
                            value: "Edwin Hughes",
                            text: "Edwin Hughes"
                        },
                        {
                            value: "Richard Jones",
                            text: "Richard Jones"
                        },
                        {
                            value: "Bruno Mugellini",
                            text: "Bruno Mugellini"
                        },
                        {
                            value: "Willard A. Palmer",
                            text: "Willard A. Palmer"
                        },
                        {
                            value: "Carl Reinecke",
                            text: "Carl Reinecke"
                        },
                        {
                            value: "Hugo Riemann",
                            text: "Hugo Riemann"
                        },
                        {
                            value: "Edouard Risler",
                            text: "Edouard Risler"
                        },
                        {
                            value: "Julius Röntgen",
                            text: "Julius Röntgen"
                        },
                        {
                            value: "Keith Snell",
                            text: "Keith Snell"
                        },
                        {
                            value: "Carl Tausig",
                            text: "Carl Tausig"
                        },
                        {
                            value: "Donald Francis Tovey (fingerings by Harold Samuel)",
                            text: "Donald Francis Tovey (fingerings by Harold Samuel)"
                        }
                    ],
                    hasOther: true,
                    name: "primary",
                    otherErrorText: "Please describe your primary source in the space provided.",
                    title: "Whose edition of The Well Tempered Clavier, Book I, is your primary source?"
                }
            ]
        },
        {
            name: "Influence",
            questions: [
                {
                    type: "matrix",
                    columns: [
                        {
                            value: "1",
                            text: "Not at all influential"
                        },
                        {
                            value: "2",
                            text: "Slightly influential"
                        },
                        {
                            value: "3",
                            text: "Somewhat influential"
                        },
                        {
                            value: "4",
                            text: "Very influential"
                        },
                        {
                            value: "5",
                            text: "Extremely influential"
                        }
                    ],
                    name: "influence",
                    rows: [
                        {
                            value: "Tempo",
                            text: "Tempo"
                        },
                        {
                            value: "Articulation",
                            text: "Articulation"
                        },
                        {
                            value: "Dynamics",
                            text: "Dynamics"
                        },
                        {
                            value: "Phrasing",
                            text: "Phrasing"
                        },
                        {
                            value: "General character of piece",
                            text: "General character of piece"
                        },
                        {
                            value: "Fingering",
                            text: "Fingering"
                        }
                    ],
                    title: "Describe the influence of your primary score on the following aspects of your performance."
                }
            ]
        },
        {
            name: "Other sources",
            questions: [
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "yes_practical",
                            text: "Yes, practical (interpretive) editions"
                        },
                        {
                            value: "yes_urtext",
                            text: "Yes, urtext editions"
                        },
                        {
                            value: "yes_both",
                            text: "Yes, both practical and urtext editions"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ],
                    name: "secondary",
                    title: "In addition to your primary source, do you consult other editions?"
                },
                {
                    type: "comment",
                    name: "recordings",
                    title: "List any recordings that have influenced your interpretation of The Well Tempered Clavier, Book I."
                }
            ]
        },
        {
            name: "Lotteries",
            questions: [
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ],
                    isRequired: true,
                    name: "lottery",
                    title: "By completing each of the following fingering activities, you will earn a chance to win one of ten $100 Amazon gift cards that will be awarded for this survey. $1000 in total will be awarded. The drawings will be held on 30 May 2016. Do you wish to be entered in these drawings?"
                }
            ]
        }
    ]
};

function processConsent() {
    var formality = document.getElementById('consent');
    var setting = formality["consent"].value;
    if (setting === "yes") {
        console.log("He said YES!!");
        localStorage.setItem(SURVEYOR_CONSENT_KEY, 'yes');
        formality.style.display = 'none';
        return true;
    } else if (setting === "no") {
        console.log("NO soup for you.");
        alert("Please close your browser window if you do not wish to participate. Thank you for your time.");
    } else {
        console.log("He is on the fence.")
    }
    return false;
}

function startAnnotating() {
    return true;
}

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
                            value: "best_for_me",
                            text: "The fingerings I entered are the best for me."
                        },
                        {
                            value: "bad_for_others",
                            text: "The fingerings I entered may not be good for other people."
                        },
                        {
                            value: "bad_ui",
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

function submit_annotation() {
    var survey_div = document.getElementById('exit_survey');
    var thank_you_div = document.getElementById('submission_complete');

    var abort_button = document.getElementById('abort_submission');
    abort_button.style.display = 'block';

    var selection_id = abcDE.getXValue();
    var abcDF = abcDE.getEnteredAbcDF();
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
        var result = $.extend({email: email, selection_id: selection_id, abcDF: abcDF}, survey.data);
        var result_str = JSON.stringify(result);
        alert(result_str);
        completions.push(selection_id);
        completion_str = JSON.stringify(completions);
        localStorage.setItem(SURVEYOR_COMPLETIONS_KEY, completion_str);
        survey.sendResult('976afcbd-fc95-4223-9dd2-eb0171e0cb74');
        // location.reload(true);
        survey_div.style.display = 'none';
        abort_button.style.display = 'none';
        thank_you_div.style.display = 'block';
    });
    survey.render('exit_survey');
}

window.onload = function() {
    consenting = localStorage.getItem(SURVEYOR_CONSENT_KEY);
    email = localStorage.getItem(SURVEYOR_EMAIL_KEY);
    selection_str = localStorage.getItem(SURVEYOR_SELECTIONS_KEY);
    completion_str = localStorage.getItem(SURVEYOR_COMPLETIONS_KEY);

    if (consenting === 'yes') {
        var formality = document.getElementById('consent');
        formality.style.display = 'none';
        if (!email) {
            var survey = new Survey.Survey(PRELIM_JSON, 'preliminary_survey');
            survey.showTitle = true;
            survey.pagePrevText = 'BACK';
            survey.pageNextText = 'NEXT';
            survey.completeText = 'SUBMIT';
            survey.showQuestionNumbers = 'off';
            survey.showPageTitles = true;
            survey.onComplete.add(function (s) {
                survey.sendResult('6e89d69e-1cda-4aad-a88a-eaadb4c07e57');
                // ASSERT something is selected. The survey should guarantee this.
                selection_str = JSON.stringify(survey.data.selections);
                localStorage.setItem(SURVEYOR_SELECTIONS_KEY, selection_str);
                completion_str = '[]';
                localStorage.setItem(SURVEYOR_COMPLETIONS_KEY, completion_str);

                localStorage.setItem(SURVEYOR_EMAIL_KEY, survey.data.email);
                var result_str = JSON.stringify(survey.data);

                var preliminaries = document.getElementById('preliminary_survey');
                preliminaries.style.display = 'none';

                alert(result_str); //send Ajax request to your web server.

                var instructions = document.getElementById('simplified_instructions');
                instructions.style.display = 'block';
            });
            survey.render('preliminary_survey');
        } else {
            selections = JSON.parse(selection_str);
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
                for (var i = 0; i < SORTED_SELECTION_IDS.length; i++) {
                    var selection_id = SORTED_SELECTION_IDS[i];
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
                        experiment_id: 'didactyl_iii',
                        submit_button_id: 'didactyl_iii_submit',
                        submit_button_label: 'NEXT',
                        restore: 'always',
                        default_url: url,
                        file_input: false,
                        url_input: false
                    };
                    abcDE = new AbcDE();
                    abcDE.renderUI(settings);
                    var next_button = document.getElementById('didactyl_iii_submit');
                    next_button.onclick = submit_annotation;
                    break;
                }
            }
        }
    }
};
