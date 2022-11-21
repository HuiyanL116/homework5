// Add js here.
var vid = document.querySelector('#video').autoplay = false.removeAttribute("loop");
var play = document.querySelector('#play')
var pause = document.getElementById("pause")

function playVid() {
    vid.play();
}
document.play.addEventListener("click", playVid)

function pauseVid() {
    vid.pause();
}