// alert('hello')
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
function() {
  //inserire nome e cognome
  var inputName = document.getElementById('user_name');
  var userName = inputName.value;


  //inserire chilometri da percorrere
  var inputKm = document.getElementById('km_to_do');
  var km = parseInt(inputKm.value);

  //inserire età
  var inputAge = document.getElementById('age');
  var age = inputAge.value;

  //prezzo biglietto intero
  var ticketPrice = km * 0.21;

  //calcolo prezzo in base all'età
  if (age == 'minorenne') {
    ticketPrice -= ((ticketPrice * 20) / 100);
    tariffa = 'Sconto minorenne'

  } else if (age == 'over65') {
    tariffa -= 'Sconto silver'
  } else {
    tariffa = 'Tariffa standard'
  }

  var carrozza = Math.floor(Math.random() * 9) + 1;
  var cp = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;

  document.getElementById('name').innerHTML = userName;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('code').innerHTML = cp;
  document.getElementById('tariffa').innerHTML = tariffa;
  document.getElementById('price').innerHTML = ticketPrice.toFixed(2) + '€';
}

);

var buttonGenera = document.getElementById('annulla');
buttonGenera.addEventListener('click',
function() {
  document.getElementById('name').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('code').innerHTML = '';
  document.getElementById('tariffa').innerHTML = '';
  document.getElementById('price').innerHTML = '';
}
);
