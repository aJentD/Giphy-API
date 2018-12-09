//Vars Arrays
//======================
var topics= ["Lucille Ball", "Christopher Walkin", "John Cleese", "Robin Williams"];

//Functions
//======================
//make buttons for each string item

function renderButtons(){
    for(var i=0;i<topics.length; i++){
        $("#button-area").append("<button class='buttons' data-type='"+topics[i]+"'>"+topics[i]+"</button>");
        console.log(topics[i]);
    }
}

$(document).on('click', '.buttons', function(){
    var type = $(this).data('type');
    console.log(type);
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+type+'&api_key=SO1JCQ6BwwTIjSgdCL6gOXWbvJY1B3qo&limit=10';
    $.ajax({URL: queryURL, method: 'GET'})
    .done(function(response){
        console.log(response);
    })
    

})
//pull still images for gifs


//animate them when clicked and stop when clicked again
//display rating for every gif
//GET THEM TO DISPLAY BEFORE MOVING ON!!!!
//pull search word from search box

//Calls
//=======================
$(function(){
    renderButtons()
   
})

console.log("yea");
