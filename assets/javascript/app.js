//Vars Arrays
//======================
var topics= ["Lucille Ball", "Christopher Walkin", "John Cleese", "Robin Williams"];

//Functions
//======================
//make buttons for each string item
function renderButtons(topics, classToAdd, areaToAddTo){
    $("#button-area").empty();
    console.log("empty")
    for(var i=0;i<topics.length; i++){
        var t = $("<button>");
        t.addClass(classToAdd);
        t.attr('data-type', topics[i]);
        t.text(topics[i]);
        $(areaToAddTo).append(t);
        console.log(topics[i]);
    }
        
};  

$(document).on("click",".searchButton", function(){
     var type = $(this).data("type");
     console.log(type);
     var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&api_key=SO1JCQ6BwwTIjSgdCL6gOXWbvJY1B3qo&limit=10";
     $.ajax({url: queryURL,method: 'GET'})
        .done(function(response){
        console.log(response)
         //pull still images for gifs
         //display rating for every gif
         for (var i=0; i<response.data.length; i++){
             var searchDiv = $("<div class='search-item'>");
             var rating = response.data[i].rating;
             var p = $("<p>").text('Rating: '+rating);
             var animate = response.data[i].images.fixed_height.url;
             var still = response.data[i].images.fixed_height_still.url;
             var image = $("<img>");
             image.attr('src', still);
             image.attr('data-still', still);
             image.attr('data-animate', animate);
             image.attr('data-state', 'still');
             image.addClass('searchImage');
             searchDiv.append(image);
             searchDiv.append(p);
             $("#gif-load").append(searchDiv);
         }
    })
})

$(document).on('click', '.searchImage', function(){
    var state = $(this).attr('data-state');
    if (state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})
$("#addSearch").on('click', function(){
    var newTopic = $('input').eq(0).val();
    topics.push(newTopic);
    renderButtons(topics,'searchButton','#button-area');
    return false;
})
    


//pull search word from search box



//animate them when clicked and stop when clicked again

//GET THEM TO DISPLAY BEFORE MOVING ON!!!!


//Calls
//=======================
renderButtons(topics,'searchButton','#button-area')
console.log();
;