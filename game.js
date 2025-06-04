//alert("Welcome to Simon Game!")
//$("h1").text("Welcome to Simon Game!");
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    //console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    switch (randomChosenColor) {
        case "green":
            $("#green").fadeOut(100).fadeIn(100);
            break;
        case "red":
            $("#red").fadeOut(100).fadeIn(100);;
            break;
        case "yellow":
            $("#yellow").fadeOut(100).fadeIn(100);;
            break;
        case "blue":
            $("#blue").fadeOut(100).fadeIn(100);;
            break;
    }
};

nextSequence()