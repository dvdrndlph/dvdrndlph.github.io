var SURVEYOR_CONSENT_KEY = 'didactyl_survey_iii_consent';
var SURVEYOR_EMAIL_KEY = 'didactyl_survey_iii_email_address';
var SURVEYOR_SELECTIONS_KEY = 'didactyl_survey_iii_selections';
var SURVEYOR_COMPLETED_KEY = 'didactyl_survey_iii_completed';
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

function urlForId(id) {
    var url = DEFAULT_URL_DIR + FILE_FOR_ID[id];
    return url;
}

var preliminaryJson = {
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

window.onload = function() {
    var consenting = localStorage.getItem(SURVEYOR_CONSENT_KEY);
    var email = localStorage.getItem(SURVEYOR_EMAIL_KEY);
    var selection_str = localStorage.getItem(SURVEYOR_SELECTIONS_KEY);
    var completed_str = localStorage.getItem(SURVEYOR_COMPLETED_KEY);

    if (consenting === 'yes') {
        var formality = document.getElementById('consent');
        formality.style.display = 'none';
        if (!email) {
            var survey = new Survey.Survey(preliminaryJson, 'preliminary_survey');
            survey.onComplete.add(function (s) {
                survey.sendResult('6e89d69e-1cda-4aad-a88a-eaadb4c07e57');
                // ASSERT something is selected. The survey should guarantee this.
                selection_str = JSON.stringify(survey.data.selections);
                localStorage.setItem(SURVEYOR_SELECTIONS_KEY, selection_str);
                completed_str = '[]';
                localStorage.setItem(SURVEYOR_COMPLETED_KEY, completed_str);

                localStorage.setItem(SURVEYOR_EMAIL_KEY, survey.data.email);
                var resultAsString = JSON.stringify(survey.data);

                var preliminaries = document.getElementById('preliminary_survey');
                preliminaries.style.display = 'none';

                alert(resultAsString); //send Ajax request to your web server.

                var instructions = document.getElementById('simplified_instructions');
                instructions.style.display = 'block';
            });
            survey.render('preliminary_survey');
        } else {
            var selections = JSON.parse(selection_str);
            var completed = JSON.parse(completed_str);
            if (selections.length === completed.length) {
                // Hide editor.
                var abcde = document.getElementById('abcde');
                abcde.style.display = 'none';

                // All done.
                var instructions = document.getElementById('all_done');
                instructions.style.display = 'block';
            } else {
                for (var i = 0; i < SORTED_SELECTION_IDS.length; i++) {
                    var selection_id = SORTED_SELECTION_IDS[i];
                    if ($.inArray(selection_id, completed) > -1) {
                        // Already did it.
                        continue;
                    }
                    if ($.inArray(selection_id, selections) < 0) {
                        // Ain't gonna do it.
                        continue;
                    }
                    var url = urlForId(selection_id);
                    var abcDE = new AbcDE();
                    var settings = {
                        experiment_id: 'didactyl_iii',
                        submit_button_id: 'didactyl_iii_submit',
                        submit_button_label: 'NEXT',
                        restore: 'always',
                        default_url: url,
                        file_input: false,
                        url_input: false
                    };
                    abcDE.renderUI(settings);
                    break;
                }
            }
        }
    }
};
