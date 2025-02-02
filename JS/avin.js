// Partie du script traitant le jukebox (8ème easter egg)
var playPiste1 = document.getElementById('piste1');
var playButton1 = document.getElementById('play1');
var pauseButton1 = document.getElementById('pause1');
var playPiste2 = document.getElementById('piste2');
var playButton2 = document.getElementById('play2');
var pauseButton2 = document.getElementById('pause2');
var playPiste3 = document.getElementById('piste3');
var playButton3 = document.getElementById('play3');
var pauseButton3 = document.getElementById('pause3');
var playPiste4 = document.getElementById('piste4');
var playButton4 = document.getElementById('play4');
var pauseButton4 = document.getElementById('pause4');

document.addEventListener('DOMContentLoaded', () => {
  playButton1.style.display = 'inline';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'none';
});

playButton1.addEventListener('click', function() {
  playPiste1.play();
  playPiste2.pause();
  playPiste3.pause();
  playPiste4.pause();
  playButton1.style.display = 'none';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'inline';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'none';
});
pauseButton1.addEventListener('click', function() {
  playPiste1.pause();
  playButton1.style.display = 'inline';
  pauseButton1.style.display = 'none';
});
playButton2.addEventListener('click', function() {
  playPiste1.pause();
  playPiste2.play();
  playPiste3.pause();
  playPiste4.pause();
  playButton1.style.display = 'inline';
  playButton2.style.display = 'none';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'inline';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'none';
});
pauseButton2.addEventListener('click', function() {
  playPiste2.pause();
  playButton2.style.display = 'inline';
  pauseButton2.style.display = 'none';
});
playButton3.addEventListener('click', function() {
  playPiste1.pause();
  playPiste2.pause();
  playPiste3.play();
  playPiste4.pause();
  playButton1.style.display = 'inline';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'none';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'inline';
  pauseButton4.style.display = 'none';
});
pauseButton3.addEventListener('click', function() {
  playPiste3.pause();
  playButton3.style.display = 'inline';
  pauseButton3.style.display = 'none';
});
playButton4.addEventListener('click', function() {
  playPiste1.pause();
  playPiste2.pause();
  playPiste3.pause();
  playPiste4.play();
  playButton1.style.display = 'inline';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'none';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'inline';
});
pauseButton4.addEventListener('click', function() {
  playPiste4.pause();
  playButton4.style.display = 'inline';
  pauseButton4.style.display = 'none';
});