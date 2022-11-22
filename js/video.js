// Add js here.
const vid = document.getElementById('videoplayer').autoplay = false.removeAttribute('loop');

function playVid() {
    alert('haha');
    vid.play();
    
}


function pauseVid() {
    vid.pause();
    alert('haha');
}

document.getElementById('play').addEventListener('click', playVid);
document.getElementById('pause').addEventListener('click', pauseVid);
document.getElementById('play').addEventListener('click', alert('haah'));