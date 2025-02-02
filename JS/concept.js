// Partie du script traitant les logos (6ème easter egg)
var audioSony = document.getElementById('PS1_image');
var audioMicrosoft = document.getElementById('XBOX_image');
var imageSony = document.getElementById('PS1');
var imageMicrosoft = document.getElementById('XBOX');
imageSony.addEventListener('click', function() {
  if (audioSony.paused) {
    audioSony.play();
  } else {
    audioSony.pause();
  }
});
imageMicrosoft.addEventListener('click', function() {
  if (audioMicrosoft.paused) {
    audioMicrosoft.play();
  } else {
    audioMicrosoft.pause();
  }
});