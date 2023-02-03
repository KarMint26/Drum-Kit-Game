let buttonSelector = document.querySelectorAll(".drum").length;

for(let i = 0; i < buttonSelector; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonOfInnerHtml = this.innerHTML;

        makeSound(buttonOfInnerHtml);

        makeButtonAnimation(buttonOfInnerHtml);
        
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeButtonAnimation(event.key);
});

function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default: 
            console.log(buttonOfInnerHtml);
        break;
    }
}

function makeButtonAnimation(currentKey){
    var button = document.querySelector("." + currentKey);

    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100);
}