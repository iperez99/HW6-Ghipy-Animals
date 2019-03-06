
//Array that will show the initial buttons on the page.//
var initialSearch = ["Shark", "Panther", "Elephant"];

//Function to add buttons into page//
function createButtons(initialSearch, classToAdd, placeToAdd) {

    $(placeToAdd).empty();

    for (var i = 0; i < initialSearch.length; i++) {

        var newButton = $("<button>");

        newButton.addClass(classToAdd);
        //add the attribute from the array into the button/
        newButton.attr("data-type", initialSearch[i]);
        //adds an animal name from the array into new button//
        newButton.text(initialSearch[i]);
        //appends the button to html page//
        $(placeToAdd).append(newButton);




    }
}

//this function calls the initialSearch array and adds a class of 'searchButton' to each array item,//
// then injects the buttons to the html page//

$(function () {

    createButtons(initialSearch, "searchButton", "#buttons-list")

});


