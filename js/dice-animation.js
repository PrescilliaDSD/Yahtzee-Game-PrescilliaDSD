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
      if (scoreTd[tdCounter].classList.contains('empty')) {
      var tdButton = document.createElement('button');
      tdButton.className += ('bg-transparent ');
      tdButton.className += ('score-button ');
      tdButton.className += ('score-button-' + tdCounter)
      tdButton.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
      scoreTd[tdCounter].appendChild(tdButton);
      }
    }

    if (document.querySelector('.score-button-0')) {
      document.querySelector('.score-button-0').addEventListener('click', app.enterScore0);
    }
    if (document.querySelector('.score-button-1')) {
      document.querySelector('.score-button-1').addEventListener('click', app.enterScore1);
    }
    if (document.querySelector('.score-button-2')) {
      document.querySelector('.score-button-2').addEventListener('click', app.enterScore2);
    }
    if (document.querySelector('.score-button-3')) {
      document.querySelector('.score-button-3').addEventListener('click', app.enterScore3);
    }
    if (document.querySelector('.score-button-4')) {
      document.querySelector('.score-button-4').addEventListener('click', app.enterScore4);
    }
    if (document.querySelector('.score-button-5')) {
      document.querySelector('.score-button-5').addEventListener('click', app.enterScore5);
    }
    if (document.querySelector('.score-button-6')) {
      document.querySelector('.score-button-6').addEventListener('click', app.enterScore6);
    }
    if (document.querySelector('.score-button-7')) {
      document.querySelector('.score-button-7').addEventListener('click', app.enterScore7);
    }
    if (document.querySelector('.score-button-8')) {
      document.querySelector('.score-button-8').addEventListener('click', app.enterScore8);
    }
    if (document.querySelector('.score-button-9')) {
      document.querySelector('.score-button-9').addEventListener('click', app.enterScore9);
    }
    if (document.querySelector('.score-button-10')) {
      document.querySelector('.score-button-10').addEventListener('click', app.enterScore10);
    }
    if (document.querySelector('.score-button-11')) {
      document.querySelector('.score-button-11').addEventListener('click', app.enterScore11);
    }
    if (document.querySelector('.score-button-12')) {
      document.querySelector('.score-button-12').addEventListener('click', app.enterScore12);
    }
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

    counter = 0;
  },

  enterScore0 : function() {   
    // on sélectionne tous les dés pour savoir combien il y a de "1".
    var howManyDice = document.querySelectorAll('.all-dice');
    var diceOne = 0;
    for (var tdCounter = 0; tdCounter < howManyDice.length; tdCounter += 1) {
      if (howManyDice[tdCounter].classList.contains('fa-dice-one')) {
        diceOne += 1;
      }
    }
    // Une fois qu'on a compté le nombre de "1", on veut faire disparaître les boutons.

    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
    }
    // Ensuite on souhaite faire apparaître la valeur de diceOne dans la case.
    var newP0 = document.createElement('p');
    newP0.classList.add('already-fill-0');
    newP0.classList.add('score-button');
    newP0.value = diceOne;
    newP0.textContent = newP0.value;
    buttonParent[0].appendChild(newP0);

    buttonParent[0].classList.remove('empty');
    // on reset les dés
    app.resetDice();

  },

  enterScore1 : function() {
    // on sélectionne tous les dés pour savoir combien il y a de "2".
    var howManyDice = document.querySelectorAll('.all-dice');
    var diceTwo = 0;
    for (var tdCounter = 0; tdCounter < howManyDice.length; tdCounter += 1) {
      if (howManyDice[tdCounter].classList.contains('fa-dice-two')) {
        diceTwo += 2;
      }
    }
    // Une fois qu'on a compté le nombre de "2", on veut faire disparaître les boutons.

    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
    // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
    // Si pas de class empty, on laisse l'enfant en place. 
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
      
    }
    // Ensuite on souhaite faire apparaître la valeur de diceTwo dans la case.
    var newP1 = document.createElement('p');
    newP1.classList.add('already-fill-1');
    newP1.classList.add('score-button');
    newP1.value = diceTwo;
    newP1.textContent = newP1.value;
    buttonParent[1].appendChild(newP1);

    buttonParent[1].classList.remove('empty');
    // on reset les dés
    app.resetDice();

  },

  enterScore2 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore3 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore4 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore5 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore6 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore7 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore8 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore9 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore10 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore11 : function() {
    counter = 2;
    app.diceResult();
  },

  enterScore12 : function() {
    counter = 2;
    app.diceResult();
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