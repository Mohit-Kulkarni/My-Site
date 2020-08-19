//jshint esversion: 6
// Live reload enabled
var jumpB = document.getElementById('jump');

jumpB.addEventListener("mouseover", function() {
  this.innerHTML = ("ME");
  var rdm = (Math.floor(Math.random() * 100)) + 1;
  this.style.marginLeft = rdm + "em";
  document.getElementById("hidden").setAttribute("class", "visible");
});
jumpB.addEventListener("click", function() {

  alert("Kya mila itni mehnat kar ke? Bola tha Don't Click ");

  const PHRASES = [
    'The wheels on the bus go round and round, round and round, round and round. The wheels on the bus go round and round, all through the town!',
    'Dibidi ba didi dou dou, Di ba didi dou, Didi didldildidldidl houdihoudi dey dou',
    'I like fuzzy kittycats, warm eyes, and pretending household appliances have feelings',
    'I\'ve never seen the inside of my own mouth because it scares me to death.',
    'hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw',
    'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak',
    'eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo'
  ];
   phrase = getRandomArrayEntry(PHRASES);
    window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase));
    
// function blockBackButton () {
//   window.addEventListener('popstate', () => {
//     window.history.forward()
//   })
});
