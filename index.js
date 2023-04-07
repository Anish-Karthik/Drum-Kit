var drums = [".w",".a",".s",".d",".j",".k",".l"];
var soundsarr = ["tom-1","tom-2","tom-3","tom-4","crash","kick-bass","snare"];
var sounds = {};
var n = drums.length;
console.log(n);
for(var i = 0; i<n; i++) {
    sounds[drums[i][1]] = soundsarr[i];
    document.querySelector(drums[i]).addEventListener("click",function() {
        var key = this.innerHTML;
        makeSound(key);
        makeAnimation(key);
    });

}

document.addEventListener("keypress",function(event) {
    makeSound(event.key);                            
    makeAnimation(event.key);
});

function makeSound(key) {
    if (key in sounds){
        var sound = "sounds/"+sounds[key]+".mp3";
        var audio = new Audio(sound);
        audio.play();
    }
}

function makeAnimation(key) {
    if (! key in sounds) return;
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}
