// Variables de suivi du jeu
let currentGoombaIndex = 0;
let goombasDefeated = 0;

// Titre sonore (1er easter egg)
document.getElementById('titre').addEventListener('click', function() {
  var sound = document.getElementById('wii_sports');
  if (sound.paused) {
      sound.play();
  } else {
      sound.pause();
  }
});

// Bonus sonore (2ème easter egg)
document.getElementById('up').addEventListener('click', function() {
  var sound = document.getElementById('son_bonus');
  if (sound.paused) {
      sound.play();
  } else {
      sound.pause();
  }
});

// Animation Mario et gestion des Goombas
document.getElementById('mario').addEventListener('click', function() {
  const goombas = document.querySelectorAll('.goomba');
  const currentGoomba = goombas[currentGoombaIndex];
  
  if (currentGoomba && !currentGoomba.classList.contains('ecrase')) {
      document.getElementById('son_saut').play();
      document.getElementById('mario').style.display = 'none';
      document.getElementById('saut').style.display = 'inline';
      
      setTimeout(function() {
        document.getElementById('son_ecrase').play();
        currentGoomba.classList.add('ecrase');
        
        // Attendre la fin de l'animation avant de cacher le Goomba
        currentGoomba.addEventListener('animationend', () => {
            currentGoomba.style.display = 'none';
            goombasDefeated++;
            currentGoombaIndex++;
            
            // Activer le champignon si tous les Goombas sont vaincus
            if (goombasDefeated === 3) {
                document.getElementById('champignon').style.cursor = 'pointer';
                document.getElementById('champignon').classList.add('available');
            }
        }, { once: true });
        
        document.getElementById('saut').style.display = 'none';
        document.getElementById('mario').style.display = 'inline';
      }, 750);
  }
});

// Gestion des clics sur les Goombas (désactivée sauf pour le Goomba actuel)
document.querySelectorAll('.goomba').forEach(goomba => {
  goomba.addEventListener('click', function(e) {
      e.preventDefault(); // Empêche le clic direct sur les Goombas
  });
});

// Animation champignon (uniquement si tous les Goombas sont vaincus)
document.getElementById('champignon').addEventListener('click', function() {
  if (goombasDefeated === 3) {
      document.getElementById('son_grandi').play();
      document.getElementById('mario').style.display = 'none';
      document.getElementById('champignon').style.display = 'none';
      document.getElementById('grand').style.display = 'inline';
      document.getElementById('termine').style.display = 'inline';
  }
});

// Style initial du champignon (curseur non-cliquable)
document.getElementById('champignon').style.cursor = 'not-allowed';

// Bouton termine
document.getElementById('termine').addEventListener('click', function() {
  document.getElementById('wii_sports').pause();
  document.getElementById('son_start').pause();
  document.getElementById('son_termine').play();
  this.style.display = 'none';
});

// Son de démarrage
document.getElementById('start').addEventListener('click', function() {
  var sound = document.getElementById('son_start');
  if (sound.paused) {
      sound.play();
  } else {
      sound.pause();
  }
});