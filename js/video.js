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

function slow(){
    if (video.playbackRate = 2){
        vid.defaultPlaybackRate = 1;
    }
    if (video.playbackRate = 1){
        vid.defaultPlaybackRate = 0.5;
    } 
    if (video.playbackRate = 0.5){
        alert('Video is at slowest speed!');
    }
}

function fast(){
    if (video.playbackRate = 2){   
        alert('Video is at fastest speed!');
    }
    if (video.playbackRate = 1){
        vid.defaultPlaybackRate = 2;
    } 
    if (video.playbackRate = 0.5){
        vid.defaultPlaybackRate = 1;
    }
}

function skip() {
    vid.currentTime(vid.currentTime() + 15);
}

function updateMute(){
    if (video.muted === false){
        document.getElementById('mute').textContent = 'Mute';
        vid.muted = true;
    }
    else {
        document.getElementById('mute').textContent = 'Unmute';
        vid.muted = false;
    }
}

function volRange(){
    vid.volume = this.value / 100;
    vid[this.name] = this.value;
}

document.getElementById('play').addEventListener('click', playVid);
document.getElementById('pause').addEventListener('click', pauseVid);
document.getElementById('skip').addEventListener('click', skip);
document.getElementById('mute').addEventListener('click', updateMute);
document.getElementById('slider').addEventListener('change', volRange);