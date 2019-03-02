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

  // On a le droit à trois lancers. On lance donc un compteur pour limiter l'utilisation de la fonction.
  counter += 1;

  // Dès lors qu'on a lancé les dés au moins une fois, on peut noter notre résultat dans le tableau
  if (counter === 1) {
  var scoreTd = document.querySelectorAll('.score-td');
    for (tdCounter = 0; tdCounter < scoreTd.length; tdCounter += 1) {
      var tdButton = document.createElement('button');
      tdButton.className += ('bg-transparent ');
      tdButton.className += ('score-button ');
      tdButton.className += ('score-button-' + tdCounter)
      tdButton.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
      scoreTd[tdCounter].appendChild(tdButton);
    }
  }

  
  if (counter === 3) {
    // On fait apparaître un bouton reset
    var reset = document.createElement('button');
    reset.className += ('bg-transparent ');
    reset.className += ('reset-button ');
    reset.innerHTML = "<i class=\"fas fa-redo-alt\"></i>";
    var resetButtonDiv = document.querySelector('.reset-button-div');
    resetButtonDiv.appendChild(reset);
    // Sur ce bouton on ajoute un event listener pour appliquer la fonction app.resetDice
    reset.addEventListener('click', app.resetDice);

    
  }
  },

  diceBlock1 : function() {
    if (counter !== 0) {
      var dice1 = document.querySelector('#dice1');
      dice1.classList.toggle('selected');
      dice1.classList.toggle('text-info');      
    }
  },

  diceBlock2 : function() {
    if (counter !== 0) {
    var dice2 = document.querySelector('#dice2');
    dice2.classList.toggle('selected');
    dice2.classList.toggle('text-info');
    }
  },

  diceBlock3 : function() {
    if (counter !== 0) {
  var dice3 = document.querySelector('#dice3');
  dice3.classList.toggle('selected');
  dice3.classList.toggle('text-info');
    }
  },

  diceBlock4 : function() {
    if (counter !== 0) {
  var dice4 = document.querySelector('#dice4');
  dice4.classList.toggle('selected');
  dice4.classList.toggle('text-info');
    }
  },

  diceBlock5 : function() {
    if (counter !== 0) {
  var dice5 = document.querySelector('#dice5');
  dice5.classList.toggle('selected');
  dice5.classList.toggle('text-info');
    }
  },

  resetDice : function() {
    var resetButton = document.querySelector('.reset-button');
    var resetButtonDiv = document.querySelector('.reset-button-div');
    resetButtonDiv.removeChild(resetButton);

    var dice1 = document.querySelector('#dice1');
    var dice2 = document.querySelector('#dice2');
    var dice3 = document.querySelector('#dice3');
    var dice4 = document.querySelector('#dice4');
    var dice5 = document.querySelector('#dice5');

    dice1.innerHTML = '<i class="all-dice fas fa-dice-one"></i>';
    dice2.innerHTML = '<i class="all-dice fas fa-dice-two"></i>';
    dice3.innerHTML = '<i class="all-dice fas fa-dice-three"></i>';
    dice4.innerHTML = '<i class="all-dice fas fa-dice-four"></i>';
    dice5.innerHTML = '<i class="all-dice fas fa-dice-five"></i>';

    dice1.classList.remove('selected');
    dice1.classList.remove('text-info');
    dice2.classList.remove('selected');
    dice2.classList.remove('text-info');
    dice3.classList.remove('selected');
    dice3.classList.remove('text-info');
    dice4.classList.remove('selected');
    dice4.classList.remove('text-info');
    dice5.classList.remove('selected');
    dice5.classList.remove('text-info');

    var scoreTd = document.querySelectorAll('.score-td');
    
    for (tdCounter = 0; tdCounter < scoreTd.length; tdCounter += 1) {
      var scoreButton = document.querySelector('.score-button-' + tdCounter);
      console.log(scoreButton);
      scoreTd[tdCounter].removeChild(scoreButton);  
    }

    counter = 0;
  },
}



// Lorsque la page a fini de charger, je veux lancer la fonction init
document.addEventListener('DOMContentLoaded', app.init);
// initialiser un compteur pour le nombre de lancers
var counter = 0;

// préparer la somme des totaux et le bonus
// bonus
var bonus = document.querySelector('.bonus');
bonus.value = 0;
bonus.textContent = bonus.value;
// total supérieur
var superiorScore = document.querySelector('.superior-score');
superiorScore.value = 0;
superiorScore.textContent = superiorScore.value;
// total inférieur
var inferiorScore = document.querySelector('.inferior-score');
inferiorScore.value = 0;
inferiorScore.textContent = inferiorScore.value;
// total des totaux
var finalScore = document.querySelector('.final-score');
finalScore.textContent = inferiorScore.value + superiorScore.value;