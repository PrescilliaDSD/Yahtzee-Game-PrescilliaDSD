var app = {
  init : function () {
    var diceButton =document.querySelector('.throw-dice');
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

    var changingDice = document.querySelectorAll('.dice-button');

    for (var index = 0; index < changingDice.length; index += 1) {
      changingDice[index].innerHTML = dice[Math.floor(Math.random() * 6)];
    }

    changingDice.addEventListener('click', app.blockDice);
  },

  blockDice = function() {
    
  }

}


// Lorsque la page a fini de charger, je veux lancer la fonction init
document.addEventListener('DOMContentLoaded', app.init);