// Partie du script traitant l'arrivée au sondage
var playCache = document.getElementById('cache');
var direction = document.getElementById('fleche');
direction.addEventListener('click', function() {
  if (playCache.paused) {
    playCache.play();
  } else {
    playCache.pause();
  }
});


// Partie du script traitant l'envoi du mail d'évaluation
var playFerme = document.getElementById('ferme');
var fini = document.getElementById('fin');
fini.addEventListener('click', function() {
  if (playFerme.paused) {
    playFerme.play();
  } else {
    playFerme.pause();
  }
});
function afficherSection() {
  var section = document.getElementById("revoir");
  section.style.display = "block";
}