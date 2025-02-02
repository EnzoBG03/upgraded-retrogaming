// Partie du script traitant le "démarrage" (7ème easter egg)
var audioLance = document.getElementById('Wii_image');
var console = document.getElementById('image');
console.addEventListener('click', function() {
  if (audioLance.paused) {
    audioLance.play();
  } else {
    audioLance.pause();
  }
});