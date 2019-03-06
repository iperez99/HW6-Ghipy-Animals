
//Array that will show the initial buttons on the page.//
var initialSearch = ["Shark", "Panther", "Elephant"];

//Function to add buttons into page//
function createButtons(initialSearch, classToAdd, placeToAdd) {
    //this function VV clears the search box after the name is added in the gif list//
    $(placeToAdd).empty();

    for (var i = 0; i < initialSearch.length; i++) {

        var newButton = $("<button>");

        newButton.addClass(classToAdd);
        //add the data type attribute from the items array into the button//
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

// this targets when one of the buttons is pressed//
$(document).on("click", ".searchButton", function () {

    var type = $(this).data("type");

    // console.log(type);

    //API query with 10 results limit//

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10"

    //AJAX call//
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // console.log(response);
            //for loop to display gifs in html document/
            for(var i= 0; i<response.data.length; i++){
                //create a new div for gif picture//
                var gifDiv = $("<div class='gif-item'>");
                //var that calls the rating of gif
                var rating = response.data[i].rating;
                //var that shows the rating on a <p> tag in the html document//
                var showRating = $("<p>").text("Rating: "+rating);

            }

        })
})
