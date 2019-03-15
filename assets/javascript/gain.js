//// FRANCISCO RECIPE API

var restrictions;
var calories;
        // Calories to build 2700-2800; Calories to Maintain 2200-2600; Calories to Lose 1900-2100

var search;


$(document).ready(function () {

/// GAIN PAGE

    var gainqueryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=high-protein&app_id=19a5b37e&app_key=4dfc6f3ac6f5ba472fd75d9f42924272&from=0&to=4&calories=2700-2800"

    $.ajax({
       url: gainqueryURL,
       method: "GET"
    }).then(function(response){
        var results = response.hits
        console.log(results)
        
        for (var i = 0; i < results.length; i++) {

            var dataImage = $("<img>");
            dataImage.attr("src", results[i].recipe.image)
            // dataImage.attr("href ='",  results[i].recipe.url);


            var newItemdiv = $('<div class="newItem">');
            var link = $("<a href='" + results[i].recipe.url + "' target='_blank'>").append(


                newItemdiv.append(dataImage),

            )
            $("#recipes").append(results[i].recipe.label + " Recipe:")
            $("#recipes").append(link)
            $('#recipe-input').val("");

    }
})

    $("#add-recipe").on("click", function (event) {
        $("#recipes").empty();
        event.preventDefault();

        search = $("#recipeinput").val().trim();


        console.log("hello")

        console.log(search)
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=19a5b37e&app_key=4dfc6f3ac6f5ba472fd75d9f42924272&from=0&to=4"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.hits
            console.log(results)



            for (var i = 0; i < results.length; i++) {

                var dataImage = $("<img>");
                dataImage.attr("src", results[i].recipe.image)
                dataImage.addClass("recipeimages")

                var newItemdiv = $('<div class="newItem">');
                var link = $("<a href='" + results[i].recipe.url + "' target='_blank'>");
                var recipetext = ("<p id='recipetext'>" + results[i].recipe.label + " Recipe: </p>")
                        
                
                link.append(newItemdiv)
                newItemdiv.append(recipetext)
                newItemdiv.append(dataImage)


                $("#recipes").append(link)
                $('#recipeinput').val("");
            }
        });

    });

});

/// FRANCISCO END RECIPE API