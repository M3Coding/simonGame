//alert("Welcome to Simon Game!")
//$("h1").text("Welcome to Simon Game!");
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    //console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100, function(){
        var sound = new Audio("./sounds/" + randomChosenColor + ".mp3");
        sound.play();
    }).fadeIn(100);
    
    
};

$(document).keypress(function() {
    nextSequence()
});