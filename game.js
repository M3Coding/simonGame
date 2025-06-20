//alert("Welcome to Simon Game!")
//$("h1").text("Welcome to Simon Game!");
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];//random number algorithm used as index for the buttonColors. 
    //alert(randomChosenColor) this is a check point to show if the color being randomly chosen is matching the button color
    gamePattern.push(randomChosenColor); //randomChosenColor contents are added to gamePattern array.
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);//this block of code takes the random color from html doc matches it with sound in the sounds folder and causes it to flash with its corresponding sound. 
    //console.log(gamePattern); console logs the keypresses
    $("#level-title").text("Level " + (level++));
    playSound(randomChosenColor); 
};


$(".btn").click(function(){
    var userChosenColor = $(this).attr("id"); //stores the button being clicked. 
    //alert(userChosenColor); stores the button that was picked 
    userClickedPattern.push(userChosenColor); //adding the contents of userChosenColor to the userClickedPAttern array.
    //console.log(userClickedPattern); to put in an array log the empty array.
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
    
})

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed" )//the parameter currentColor matches the variable for the color in click to give the animation.
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed" )//the parameter currentColor matches the variable for the color in click to give the animation.

    }, 100); //this function uses the setTimeout function to remove the class after 100 milliseconds.

}
function playSound(name) {
    var sound = new Audio("./sounds/" + name + ".mp3");
    sound.play(); //this block of code use name as a parameter to match the chosen color in click and keypresses to call the sound for that color. 

}
let started = false;
level = 0;
$(document).keypress(function() {
    if (started === false) {   
        started = true;
        $("#level-title").text("Level " + level);  
    } else {
        nextSequence();
    }
         
}); //target the entire document instead of a specific box for random sound and flash by pressing a key. Detect when any button is clicked and trigger the nextSequence function

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){nextSequence();}, 1000);
            userClickedPattern = [];

        } //completes full sequence before level restarts so user has time to click the order. 
        
    } else {
        console.log("wrong")
        var wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over");

        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

    } //block of code uses currentLevel as index to check the patterns.
}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = [];
}