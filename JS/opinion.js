// Partie du script traitant la banque rétro (9ème easter egg)
var audioRetro1 = document.getElementById('retro1');
var audioRetro2 = document.getElementById('retro2');
var audioRetro3 = document.getElementById('retro3');
var audioRetro4 = document.getElementById('retro4');
var audioRetro5 = document.getElementById('retro5');
var audioRetro6 = document.getElementById('retro6');
var audioRetro7 = document.getElementById('retro7');
var audioRetro8 = document.getElementById('retro8');
var audioRetro9 = document.getElementById('retro9');
var imageJeu1 = document.getElementById('jeu1');
var imageJeu2 = document.getElementById('jeu2');
var imageJeu3 = document.getElementById('jeu3');
var imageJeu4 = document.getElementById('jeu4');
var imageJeu5 = document.getElementById('jeu5');
var imageJeu6 = document.getElementById('jeu6');
var imageJeu7 = document.getElementById('jeu7');
var imageJeu8 = document.getElementById('jeu8');
var imageJeu9 = document.getElementById('jeu9');

imageJeu1.addEventListener('click', function() {
  audioRetro1.play();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu2.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.play();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu3.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.play();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu4.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.play();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu5.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.play();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu6.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.play();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu7.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.play();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu8.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.play();
  audioRetro9.pause();
});
imageJeu9.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.play();
});