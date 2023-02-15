for (var i=0;i<document.querySelectorAll(".s").length;i++){
document.querySelectorAll(".s")[i].addEventListener("click",handleClick);
function handleClick(){
    var k=this.innerHTML;
    sound(k);
    button(k);
}
}
document.addEventListener("keypress",function(event){
 sound(event.key);
 button(event.key)
});
function sound(key){
    switch(key){
        case "a":
            var a=new Audio("audio/mixkit-cinematic-mystery-trailer-drum-hit-546.mp3");
            a.play();
            break;
        case "b":
            var a1=new Audio("audio/mixkit-flute-alert-2307.wav");
            a1.play();
            break;
        case "c":
            var a2=new Audio("audio/mixkit-happy-guitar-chords-2319.wav");
            a2.play();
            break;
        case "d":
            var a3=new Audio("audio/mixkit-little-piano-game-over-1944.wav");
            a3.play();
            break;
        case "e":
            var a4=new Audio("audio/KV5WNCW-wrong-answer-brass-instruments.mp3");
            a4.play();
            break;
        case "f":
            var a5=new Audio("audio/mixkit-orchestral-violin-jingle-2280.wav");
            a5.play();
            break;
        default:console.log(buttonInnerHTML);
       }
}
function button(currentkey)
{
    var l=document.querySelector("."+currentkey);
    l.classList.add("pressed");
    setTimeout(function(){
        l.classList.remove("pressed");

    },100);
}