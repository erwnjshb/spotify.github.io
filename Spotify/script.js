let play = document.getElementById("spotify1");
let trackPlaying = false
let audio = new Audio("music/clementine.mp3");
let audio2 = new Audio("music/Amtrak.mp3");
let audio3 = new Audio("music/here-with-me.mp3");
let audio4 = new Audio("music/sleep-well.mp3");
let audio5 = new Audio("music/lusaw.mp3");
let audio6 = new Audio("music/someone-to-spend-time-with.mp3");
let audio7 = new Audio("music/romantic-homicide.mp3");

function playButton() {
    if (document.getElementById("play").className === "fa-solid fa-circle-pause") {
        document.getElementById("play").className = "fa-sharp fa-solid fa-circle-play";
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
    } else {
        document.getElementById("play").className = "fa-solid fa-circle-pause";
        audio.play()
        document.getElementById("songname1").style.color = "#00ff4c";
        document.getElementById("songname2").style.color = "white";
        document.getElementById("songname3").style.color = "white";
        document.getElementById("songname4").style.color = "white";
        document.getElementById("songname5").style.color = "white";
        document.getElementById("songname6").style.color = "white";
        document.getElementById("songname7").style.color = "white";
        
    }
}


function playspotify1() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "#00ff4c";
    document.getElementById("songname2").style.color = "white";
    document.getElementById("songname3").style.color = "white";
    document.getElementById("songname4").style.color = "white";
    document.getElementById("songname5").style.color = "white";
    document.getElementById("songname6").style.color = "white";
    document.getElementById("songname7").style.color = "white";
    if (trackPlaying === false) {
        audio.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio.play()
    }
    
}   
function playspotify2() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "white";
    document.getElementById("songname2").style.color = "#00ff4c";
    document.getElementById("songname3").style.color = "white";
    document.getElementById("songname4").style.color = "white";
    document.getElementById("songname5").style.color = "white";
    document.getElementById("songname6").style.color = "white";
    document.getElementById("songname7").style.color = "white";
    if (trackPlaying === false) {
        audio2.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio2.play()
    }
}  
function playspotify3() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "white";
    document.getElementById("songname2").style.color = "white";
    document.getElementById("songname3").style.color = "#00ff4c";
    document.getElementById("songname4").style.color = "white";
    document.getElementById("songname5").style.color = "white";
    document.getElementById("songname6").style.color = "white";
    document.getElementById("songname7").style.color = "white";
    if (trackPlaying === false) {
        audio3.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio3.play()
    }
}  
function playspotify4() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "white";
    document.getElementById("songname2").style.color = "white";
    document.getElementById("songname3").style.color = "white";
    document.getElementById("songname4").style.color = "#00ff4c";
    document.getElementById("songname5").style.color = "white";
    document.getElementById("songname6").style.color = "white";
    document.getElementById("songname7").style.color = "white";
    if (trackPlaying === false) {
        audio4.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio4.play()
    }
}  
function playspotify5() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "white";
    document.getElementById("songname2").style.color = "white";
    document.getElementById("songname3").style.color = "white";
    document.getElementById("songname4").style.color = "white";
    document.getElementById("songname5").style.color = "#00ff4c";
    document.getElementById("songname6").style.color = "white";
    document.getElementById("songname7").style.color = "white";
    if (trackPlaying === false) {
        audio5.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio5.play()
    }
}  
function playspotify6() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "white";
    document.getElementById("songname2").style.color = "white";
    document.getElementById("songname3").style.color = "white";
    document.getElementById("songname4").style.color = "white";
    document.getElementById("songname5").style.color = "white";
    document.getElementById("songname6").style.color = "#00ff4c";
    document.getElementById("songname7").style.color = "white";
    if (trackPlaying === false) {
        audio6.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio6.play()
    }
}  
function playspotify7() {
    document.getElementById("play").className = "fa-solid fa-circle-pause";
    document.getElementById("songname1").style.color = "white";
    document.getElementById("songname2").style.color = "white";
    document.getElementById("songname3").style.color = "white";
    document.getElementById("songname4").style.color = "white";
    document.getElementById("songname5").style.color = "white";
    document.getElementById("songname6").style.color = "white";
    document.getElementById("songname7").style.color = "#00ff4c";
    if (trackPlaying === false) {
        audio7.play()
        trackPlaying = true
    }
    else{
        audio.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
        audio6.currentTime = 0
        audio7.currentTime = 0
        audio7.play()
    }
}   
