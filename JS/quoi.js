// Partie du script traitant l'affiche sonorisée (5ème easter egg)
var audioNiveau = document.getElementById('son_niveau1');
var lanceur = document.getElementById('affiche');
lanceur.addEventListener('click', function() {
  if (audioNiveau.paused) {
    audioNiveau.play();
  } else {
    audioNiveau.pause();
  }
});