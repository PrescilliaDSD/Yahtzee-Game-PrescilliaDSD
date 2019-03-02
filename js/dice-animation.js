var app = {
  init : function () {
    var diceButton = document.querySelector('.throw-dice');
    // quand on clique sur le bouton "lancer les dés", on applique la fonction diceResult
    diceButton.addEventListener('click', app.diceResult);   
  },

  diceResult : function () {
    // chacun des 5 dés change de valeur, prise au hasard dans le tableau ci-dessous
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
      if (changedDice[index].classList.contains('selected') === false && counter < 3) {
      changedDice[index].innerHTML = dice[Math.floor(Math.random() * 6)];
    }
    
    // On peut cliquer sur chaque dé individuellement afin de bloquer son résultat
    changedDice[0].addEventListener('click', app.diceBlock1);
    changedDice[1].addEventListener('click', app.diceBlock2);
    changedDice[2].addEventListener('click', app.diceBlock3);
    changedDice[3].addEventListener('click', app.diceBlock4);
    changedDice[4].addEventListener('click', app.diceBlock5);
  };

  // On a le droit à trois lancers. Donc si le compteur arrive à 3
  counter += 1;
  if (counter === 3) {
    // On fait apparaître un bouton reset
    var reset = document.createElement('button');
    reset.className += ('bg-transparent');
    reset.className += (' reset-button');
    reset.innerHTML = "<i class=\"fas fa-redo-alt\"></i>";
    var resetButtonDiv = document.querySelector('.reset-button-div');
    resetButtonDiv.appendChild(reset);
    // Sur ce bouton on ajoute un event listener pour appliquer la fonction app.resetDice
    reset.addEventListener('click', app.resetDice);
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

var counter = 0;


// Lorsque la page a fini de charger, je veux lancer la fonction init
document.addEventListener('DOMContentLoaded', app.init);