console.log("hii");
var noOfButtons = document.querySelectorAll(".drum").length

//Button Click
for (var i = 0; i < noOfButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        
    });

}


//My code which didn't work :( still need to know why??
// var soundOfDrums = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];
//         var audio = new Audio(soundOfDrums[i]);
//         audio.play();

//Keyboard press
document.addEventListener("keypress", function(event){

    console.log(event);
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    
    switch (key) {
        case "w":
            
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
        case "a":

            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;
        case "s":

            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;
        case "d":

            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;
        case "j":

            var snare = new Audio("sounds/snare.mp3");
            snare.play();

            break;
        case "k":

            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;
        case "l":

            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();

            break;
    
        default:
            console.log(buttonInnerHTML)
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    //Adding a class through Javascript
    activeButton.classList.add("pressed");



    //Timeout Function for animation of button
    //After the class pressed is applied this timeout function remove the class "pressed" after 100 ms that is the second para meter of the settimeout function.
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}