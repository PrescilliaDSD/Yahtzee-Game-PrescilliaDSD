var app = {
  init : function () {
    var diceButton = document.querySelector('.throw-dice');
    // quand on click sur le bouton "lancer les dés", on applique la fonction diceResult
    diceButton.addEventListener('click', app.diceResult);   
  },

  diceResult : function () {
    // chacun des 5 dés changent de valeurs, prise au hasard dans le tableau data.js
    var dice = [
      '<i class="all-dice fas fa-dice-one"></i>',
      '<i class="all-dice fas fa-dice-two"></i>',
      '<i class="all-dice fas fa-dice-three"></i>',    
      '<i class="all-dice fas fa-dice-four"></i>',
      '<i class="all-dice fas fa-dice-five"></i>',
      '<i class="all-dice fas fa-dice-six"></i>',
    ];

    var changedDice = document.querySelectorAll('.dice-button');
    
    for (var index = 0; index < changedDice.length; index += 1) {
      if (changedDice[index].classList.contains('selected') === false) {
      changedDice[index].innerHTML = dice[Math.floor(Math.random() * 6)];
    }
    
    changedDice[0].addEventListener('click', app.diceBlock1);
    changedDice[1].addEventListener('click', app.diceBlock2);
    changedDice[2].addEventListener('click', app.diceBlock3);
    changedDice[3].addEventListener('click', app.diceBlock4);
    changedDice[4].addEventListener('click', app.diceBlock5);

  }
  },

  diceBlock1 : function() {
      var dice1 = document.querySelector('#dice1');
      dice1.classList.toggle('selected');
      dice1.classList.toggle('text-info');      
  },

  diceBlock2 : function() {
    var dice2 = document.querySelector('#dice2');
    dice2.classList.toggle('selected');
    dice2.classList.toggle('text-info');
},

  diceBlock3 : function() {
  var dice3 = document.querySelector('#dice3');
  dice3.classList.toggle('selected');
  dice3.classList.toggle('text-info');
},

  diceBlock4 : function() {
  var dice4 = document.querySelector('#dice4');
  dice4.classList.toggle('selected');
  dice4.classList.toggle('text-info');
},

  diceBlock5 : function() {
  var dice5 = document.querySelector('#dice5');
  dice5.classList.toggle('selected');
  dice5.classList.toggle('text-info');
},
}




// Lorsque la page a fini de charger, je veux lancer la fonction init
document.addEventListener('DOMContentLoaded', app.init);