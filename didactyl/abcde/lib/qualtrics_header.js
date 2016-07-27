Qualtrics.SurveyEngine.addOnload(function () {
    console.log("MOVING IN: ");
    var sourceField = document.getElementById('abc_source');
    if (sourceField == undefined) {
        return;
    }
    var abc = sourceField.value;
    if (! abc) {
        return;
    }

    console.log("MOVING abc: " + abc);
    var id = AbcDE.getXValue(abc);
    // var resultStore = 'result_' + id;

    var fingerings = "";
    switch (id) {
        case "1":
            fingerings = "${e://Field/result_1}";
            break;
        case "2":
            fingerings = "${e://Field/result_2}";
            break;
        default:
            fingerings = "";
    }

    AbcDE.render({output:'append',
        preset:'first',
        restore:'never',
        qualtrics:this});

    if (fingerings) {
        AbcDE.setEnteredCollection(fingerings);
    }

    /*
    $('NextButton').onclick = function (event) {
        // Save the current question's response value
        console.log("MOVING FORWARD");
        fingerings = AbcDE.getValidatedCollection();
        if (fingerings) {
            console.log("Complete fingerings: " + fingerings);
            Qualtrics.SurveyEngine.setEmbeddedData(resultStore, fingerings);
            Qualtrics.SurveyEngine.navClick(event, 'NextButton');
        } else {
            fingerings = AbcDE.getEnteredCollection();
            if (fingerings) {
                console.log("Retained fingerings: " + fingerings);
                Qualtrics.SurveyEngine.setEmbeddedData(resultStore, fingerings);
            }
        }
    }

    $('PreviousButton').onclick = function (event) {
        console.log("MOVING BACKWARD");
        // Save the current question's response value
        fingerings = AbcDE.getEnteredCollection();
        if (fingerings) {
            console.log("Retained fingerings: " + fingerings);
            Qualtrics.SurveyEngine.setEmbeddedData(resultStore, fingerings);
            Qualtrics.SurveyEngine.navClick(event, 'PreviousButton');
        }
    }
    */
});