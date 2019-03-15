//// FRANCISCO RECIPE API

var restrictions;
var calories;
        // Calories to build 2700-2800; Calories to Maintain 2200-2600; Calories to Lose 1900-2100

var search;


$(document).ready(function () {

/// TRIM PAGE

    var trimqueryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=high-protein&app_id=19a5b37e&app_key=4dfc6f3ac6f5ba472fd75d9f42924272&from=0&to=4&calories=1900-2100"

    $.ajax({
       url: trimqueryURL,
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
            $("#test").append(results[i].recipe.label + " Recipe:")
            $("#test").append(link)
            $('#userinput').val("");

    }
})

    $("#button").on("click", function (event) {
        $("#test").empty();
        event.preventDefault();

        search = $("#userinput").val().trim();


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
                // dataImage.attr("href ='",  results[i].recipe.url);


                var newItemdiv = $('<div class="newItem">');
                var link = $("<a href='" + results[i].recipe.url + "' target='_blank'>").append(


                    newItemdiv.append(dataImage),

                )
                $("#test").append(results[i].recipe.label + " Recipe:")
                $("#test").append(link)
                $('#userinput').val("");
            }
        });

    });

});

/// FRANCISCO END RECIPE API