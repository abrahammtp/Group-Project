var restrictions;
var calories;

var search;
$(document).ready(function () {
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
                var recipe = results[i].recipe.label;
                var divRecipe = $("<p>").text(recipe + " recipe: ");
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