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
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
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

    superiorScore.value += diceOne;
    superiorScore.textContent = superiorScore.value;
    app.bonus(superiorScore, bonus);
    app.finalScore(superiorScore, inferiorScore, bonus);

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

    superiorScore.value += diceTwo;
    superiorScore.textContent = superiorScore.value;
    app.bonus(superiorScore, bonus);
    app.finalScore(superiorScore, inferiorScore, bonus);
    

  },

  enterScore2 : function() {
    // on sélectionne tous les dés pour savoir combien il y a de "3".
    var howManyDice = document.querySelectorAll('.all-dice');
    var diceThree = 0;
    for (var tdCounter = 0; tdCounter < howManyDice.length; tdCounter += 1) {
      if (howManyDice[tdCounter].classList.contains('fa-dice-three')) {
        diceThree += 3;
      }
    }
    // Une fois qu'on a compté le nombre de "3", on veut faire disparaître les boutons.

    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
    // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
    // Si pas de class empty, on laisse l'enfant en place. 
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
      
    }
    // Ensuite on souhaite faire apparaître la valeur de diceThree dans la case.
    var newP2 = document.createElement('p');
    newP2.classList.add('already-fill-2');
    newP2.classList.add('score-button');
    newP2.value = diceThree;
    newP2.textContent = newP2.value;
    buttonParent[2].appendChild(newP2);

    buttonParent[2].classList.remove('empty');
    // on reset les dés
    app.resetDice();

    superiorScore.value += diceThree;
    superiorScore.textContent = superiorScore.value;
    app.bonus(superiorScore, bonus);
    app.finalScore(superiorScore, inferiorScore, bonus);
  },

  enterScore3 : function() {
    // on sélectionne tous les dés pour savoir combien il y a de "4".
    var howManyDice = document.querySelectorAll('.all-dice');
    var diceFour = 0;
    for (var tdCounter = 0; tdCounter < howManyDice.length; tdCounter += 1) {
      if (howManyDice[tdCounter].classList.contains('fa-dice-four')) {
        diceFour += 4;
      }
    }
    // Une fois qu'on a compté le nombre de "4", on veut faire disparaître les boutons.

    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
    // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
    // Si pas de class empty, on laisse l'enfant en place. 
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
      
    }
    // Ensuite on souhaite faire apparaître la valeur de diceFour dans la case.
    var newP3 = document.createElement('p');
    newP3.classList.add('already-fill-3');
    newP3.classList.add('score-button');
    newP3.value = diceFour;
    newP3.textContent = newP3.value;
    buttonParent[3].appendChild(newP3);

    buttonParent[3].classList.remove('empty');
    // on reset les dés
    app.resetDice();   

    superiorScore.value += diceFour;
    superiorScore.textContent = superiorScore.value;
    app.bonus(superiorScore, bonus);
    app.finalScore(superiorScore, inferiorScore, bonus);
  },

  enterScore4 : function() {
    // on sélectionne tous les dés pour savoir combien il y a de "5".
    var howManyDice = document.querySelectorAll('.all-dice');
    var diceFive = 0;
    for (var tdCounter = 0; tdCounter < howManyDice.length; tdCounter += 1) {
      if (howManyDice[tdCounter].classList.contains('fa-dice-five')) {
        diceFive += 5;
      }
    }
    // Une fois qu'on a compté le nombre de "5", on veut faire disparaître les boutons.

    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
    // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
    // Si pas de class empty, on laisse l'enfant en place. 
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
      
    }
    // Ensuite on souhaite faire apparaître la valeur de diceFive dans la case.
    var newP4 = document.createElement('p');
    newP4.classList.add('already-fill-4');
    newP4.classList.add('score-button');
    newP4.value = diceFive;
    newP4.textContent = newP4.value;
    buttonParent[4].appendChild(newP4);

    buttonParent[4].classList.remove('empty');
    // on reset les dés
    app.resetDice();   

    superiorScore.value += diceFive;
    superiorScore.textContent = superiorScore.value;
    app.bonus(superiorScore, bonus);
    app.finalScore(superiorScore, inferiorScore, bonus);
  },

  enterScore5 : function() {
    // on sélectionne tous les dés pour savoir combien il y a de "6".
    var howManyDice = document.querySelectorAll('.all-dice');
    var diceSix = 0;
    for (var tdCounter = 0; tdCounter < howManyDice.length; tdCounter += 1) {
      if (howManyDice[tdCounter].classList.contains('fa-dice-six')) {
        diceSix += 6;
      }
    }
    // Une fois qu'on a compté le nombre de "6", on veut faire disparaître les boutons.

    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
    // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
    // Si pas de class empty, on laisse l'enfant en place. 
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
      
    }
    // Ensuite on souhaite faire apparaître la valeur de diceSix dans la case.
    var newP5 = document.createElement('p');
    newP5.classList.add('already-fill-5');
    newP5.classList.add('score-button');
    newP5.value = diceSix;
    newP5.textContent = newP5.value;
    buttonParent[5].appendChild(newP5);

    buttonParent[5].classList.remove('empty');
    // on reset les dés
    app.resetDice(); 

    superiorScore.value += diceSix;
    superiorScore.textContent = superiorScore.value;
    app.bonus(superiorScore, bonus);
    app.finalScore(superiorScore, inferiorScore, bonus);
  },

  enterScore6 : function() {
    // en prenant chaque valeur possible de dés, on va parcourir le tableau pour savoir combien de fois ils apparaissent.
    // On parcourt pour voir combien il y a de one, de two, etc...
    // Si on trouve trois fois ou plus la même occurrence, on arrête.
    // On entre alors le score dans brelan, total des 5 dés.
    // Si a la fin on a pas trouvé au minimum 3 fois la même occurrence, on met un 0 pour le score.
    var trio = document.querySelectorAll('.all-dice');
    var trioScore = 0;
    var diceOne = 0;
    var diceTwo = 0;
    var diceThree = 0;
    var diceFour = 0;
    var diceFive = 0;
    var diceSix = 0; 
    for (var tdCount = 0; tdCount < trio.length; tdCount += 1) {
      if (trio[tdCount].classList.contains('fa-dice-one')) {
        diceOne += 1;
      } else if (trio[tdCount].classList.contains('fa-dice-two')) {
        diceTwo += 1;
      }
      else if (trio[tdCount].classList.contains('fa-dice-three')) {
        diceThree += 1;
      }
      else if (trio[tdCount].classList.contains('fa-dice-four')) {
        diceFour += 1;
      }
      else if (trio[tdCount].classList.contains('fa-dice-five')) {
        diceFive += 1;
      }
      else if (trio[tdCount].classList.contains('fa-dice-six')) {
        diceSix += 1;
      }
    }

    if (diceOne >= 3 || diceTwo >= 3 || diceThree >= 3 || diceFour >= 3 || diceFive >= 3 || diceSix >= 3 ) {
      for (var counter = 0; counter < trio.length; counter += 1) {
        if (trio[counter].classList.contains('fa-dice-one')) {
          trioScore += 1;
        }
        else if (trio[counter].classList.contains('fa-dice-two')) {
          trioScore += 2;
        }
        else if (trio[counter].classList.contains('fa-dice-three')) {
          trioScore += 3;
        }
        else if (trio[counter].classList.contains('fa-dice-four')) {
          trioScore += 4;
        }
        else if (trio[counter].classList.contains('fa-dice-five')) {
          trioScore += 5;
        }
        else if (trio[counter].classList.contains('fa-dice-six')) {
          trioScore += 6;
        }
      }
    }

    var buttonRemove = document.querySelectorAll('.score-button')
      var buttonParent = document.querySelectorAll('.score-td');
      for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
      // Si pas de class empty, on laisse l'enfant en place. 
        if (buttonParent[tdCounter].classList.contains('empty')) {
          buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
        }
        
      }
      var newP6 = document.createElement('p');
      newP6.classList.add('already-fill-6');
      newP6.classList.add('score-button');
      newP6.value = trioScore;
      newP6.textContent = newP6.value;
      buttonParent[6].appendChild(newP6);
  
      buttonParent[6].classList.remove('empty');
      // on reset les dés
      app.resetDice();   
  
      inferiorScore.value += trioScore;
      inferiorScore.textContent = inferiorScore.value;
      app.finalScore(superiorScore, inferiorScore, bonus);
  

  },

  enterScore7 : function() {
    // en prenant chaque valeur possible de dés, on va parcourir le tableau pour savoir combien de fois ils apparaissent.
    // On parcourt pour voir combien il y a de one, de two, etc...
    // Si on trouve quatre fois ou plus la même occurrence, on arrête.
    // On entre alors le score dans carré, total des 5 dés.
    // Si a la fin on a pas trouvé au minimum 4 fois la même occurrence, on met un 0 pour le score.
    var quadra = document.querySelectorAll('.all-dice');
    var quadraScore = 0;
    var diceOne = 0;
    var diceTwo = 0;
    var diceThree = 0;
    var diceFour = 0;
    var diceFive = 0;
    var diceSix = 0; 
    for (var tdCount = 0; tdCount < quadra.length; tdCount += 1) {
      if (quadra[tdCount].classList.contains('fa-dice-one')) {
        diceOne += 1;
      } else if (quadra[tdCount].classList.contains('fa-dice-two')) {
        diceTwo += 1;
      }
      else if (quadra[tdCount].classList.contains('fa-dice-three')) {
        diceThree += 1;
      }
      else if (quadra[tdCount].classList.contains('fa-dice-four')) {
        diceFour += 1;
      }
      else if (quadra[tdCount].classList.contains('fa-dice-five')) {
        diceFive += 1;
      }
      else if (quadra[tdCount].classList.contains('fa-dice-six')) {
        diceSix += 1;
      }
    }

    if (diceOne >= 4 || diceTwo >= 4 || diceThree >= 4 || diceFour >= 4 || diceFive >= 4 || diceSix >= 4 ) {
      for (var counter = 0; counter < quadra.length; counter += 1) {
        if (quadra[counter].classList.contains('fa-dice-one')) {
          quadraScore += 1;
        }
        else if (quadra[counter].classList.contains('fa-dice-two')) {
          quadraScore += 2;
        }
        else if (quadra[counter].classList.contains('fa-dice-three')) {
          quadraScore += 3;
        }
        else if (quadra[counter].classList.contains('fa-dice-four')) {
          quadraScore += 4;
        }
        else if (quadra[counter].classList.contains('fa-dice-five')) {
          quadraScore += 5;
        }
        else if (quadra[counter].classList.contains('fa-dice-six')) {
          quadraScore += 6;
        }
      }
    }

    var buttonRemove = document.querySelectorAll('.score-button')
      var buttonParent = document.querySelectorAll('.score-td');
      for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
      // Si pas de class empty, on laisse l'enfant en place. 
        if (buttonParent[tdCounter].classList.contains('empty')) {
          buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
        }
        
      }
      var newP7 = document.createElement('p');
      newP7.classList.add('already-fill-7');
      newP7.classList.add('score-button');
      newP7.value = quadraScore;
      newP7.textContent = newP7.value;
      buttonParent[7].appendChild(newP7);
  
      buttonParent[7].classList.remove('empty');
      // on reset les dés
      app.resetDice();   
  
      inferiorScore.value += quadraScore;
      inferiorScore.textContent = inferiorScore.value;
      app.finalScore(superiorScore, inferiorScore, bonus);
  },

  enterScore8 : function() {
    // Ici on cherche à avoir 2 fois le même dé puis 3 fois le même dé.
    // On parcourt pour trouver 2 ou 3 fois le 1.
    // Si c'est 3, on refait une autre boucle pour trouver 2 fois un autre chiffrE.
    // Si pas ok, on met 0 dans le score.     
    // Si ok, on met 25 dans le score.
    var full = document.querySelectorAll('.all-dice');
    var fullScore = 0;
    var diceOne = 0;
    var diceTwo = 0;
    var diceThree = 0;
    var diceFour = 0;
    var diceFive = 0;
    var diceSix = 0; 
    for (var tdCount = 0; tdCount < full.length; tdCount += 1) {
      if (full[tdCount].classList.contains('fa-dice-one')) {
        diceOne += 1;
      } else if (full[tdCount].classList.contains('fa-dice-two')) {
        diceTwo += 1;
      }
      else if (full[tdCount].classList.contains('fa-dice-three')) {
        diceThree += 1;
      }
      else if (full[tdCount].classList.contains('fa-dice-four')) {
        diceFour += 1;
      }
      else if (full[tdCount].classList.contains('fa-dice-five')) {
        diceFive += 1;
      }
      else if (full[tdCount].classList.contains('fa-dice-six')) {
        diceSix += 1;
      }
    }

    if (diceOne === 3 || diceTwo === 3 || diceThree === 3 || diceFour === 3 || diceFive === 3 || diceSix === 3 ) {
      if (diceOne === 2 || diceTwo === 2 || diceThree === 2 || diceFour === 2 || diceFive === 2 || diceSix === 2 ) {
        fullScore = 25;
      }
    }
      
  

    var buttonRemove = document.querySelectorAll('.score-button')
      var buttonParent = document.querySelectorAll('.score-td');
      for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
      // Si pas de class empty, on laisse l'enfant en place. 
        if (buttonParent[tdCounter].classList.contains('empty')) {
          buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
        }
        
      }
      var newP8 = document.createElement('p');
      newP8.classList.add('already-fill-8');
      newP8.classList.add('score-button');
      newP8.value = fullScore;
      newP8.textContent = newP8.value;
      buttonParent[8].appendChild(newP8);
  
      buttonParent[8].classList.remove('empty');
      // on reset les dés
      app.resetDice();   
  
      inferiorScore.value += fullScore;
      inferiorScore.textContent = inferiorScore.value;
      app.finalScore(superiorScore, inferiorScore, bonus);
  
  },

  enterScore9 : function() {
    var littleSuite = document.querySelectorAll('.all-dice');
    var littleSuiteScore = 0;
    var diceOne = 0;
    var diceTwo = 0;
    var diceThree = 0;
    var diceFour = 0;
    var diceFive = 0;
    var diceSix = 0; 
    
    for (var tdCount = 0; tdCount < littleSuite.length; tdCount += 1) {
      if (littleSuite[tdCount].classList.contains('fa-dice-one')) {
        diceOne += 1;
      } else if (littleSuite[tdCount].classList.contains('fa-dice-two')) {
        diceTwo += 1;
      }
      else if (littleSuite[tdCount].classList.contains('fa-dice-three')) {
        diceThree += 1;
      }
      else if (littleSuite[tdCount].classList.contains('fa-dice-four')) {
        diceFour += 1;
      }
      else if (littleSuite[tdCount].classList.contains('fa-dice-five')) {
        diceFive += 1;
      }
      else if (littleSuite[tdCount].classList.contains('fa-dice-six')) {
        diceSix += 1;
      }
    }

    if (diceThree > 0 && diceFour > 0) {
      if (diceOne > 0 && diceTwo > 0) {
        littleSuiteScore = 30;
      }
      else if (diceTwo > 0 && diceFive > 0) {
        littleSuiteScore = 30;
      }
      else if (diceFive > 0 && diceSix > 0) {
        littleSuiteScore = 30
      }
    }

    var buttonRemove = document.querySelectorAll('.score-button')
      var buttonParent = document.querySelectorAll('.score-td');
      for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
      // Si pas de class empty, on laisse l'enfant en place. 
        if (buttonParent[tdCounter].classList.contains('empty')) {
          buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
        }
        
      }
      var newP9 = document.createElement('p');
      newP9.classList.add('already-fill-9');
      newP9.classList.add('score-button');
      newP9.value = littleSuiteScore;
      newP9.textContent = newP9.value;
      buttonParent[9].appendChild(newP9);
  
      buttonParent[9].classList.remove('empty');
      // on reset les dés
      app.resetDice();   
  
      inferiorScore.value += littleSuiteScore;
      inferiorScore.textContent = inferiorScore.value;
      app.finalScore(superiorScore, inferiorScore, bonus);

      
  },

  enterScore10 : function() {
    var largeSuite = document.querySelectorAll('.all-dice');
    var largeSuiteScore = 0;
    var diceOne = 0;
    var diceTwo = 0;
    var diceThree = 0;
    var diceFour = 0;
    var diceFive = 0;
    var diceSix = 0; 
    
    for (var tdCount = 0; tdCount < largeSuite.length; tdCount += 1) {
      if (largeSuite[tdCount].classList.contains('fa-dice-one')) {
        diceOne += 1;
      } else if (largeSuite[tdCount].classList.contains('fa-dice-two')) {
        diceTwo += 1;
      }
      else if (largeSuite[tdCount].classList.contains('fa-dice-three')) {
        diceThree += 1;
      }
      else if (largeSuite[tdCount].classList.contains('fa-dice-four')) {
        diceFour += 1;
      }
      else if (largeSuite[tdCount].classList.contains('fa-dice-five')) {
        diceFive += 1;
      }
      else if (largeSuite[tdCount].classList.contains('fa-dice-six')) {
        diceSix += 1;
      }
    }

    if (diceTwo > 0 && diceThree > 0 && diceFour > 0 && diceFive > 0) {
      if (diceOne > 0) {
        largeSuiteScore = 40;
      }
      else if (diceSix > 0) {
        largeSuiteScore = 40;
      }   
    }

    var buttonRemove = document.querySelectorAll('.score-button')
      var buttonParent = document.querySelectorAll('.score-td');
      for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
      // Si pas de class empty, on laisse l'enfant en place. 
        if (buttonParent[tdCounter].classList.contains('empty')) {
          buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
        }
        
      }
      var newP10 = document.createElement('p');
      newP10.classList.add('already-fill-10');
      newP10.classList.add('score-button');
      newP10.value = largeSuiteScore;
      newP10.textContent = newP10.value;
      buttonParent[10].appendChild(newP10);
  
      buttonParent[10].classList.remove('empty');
      // on reset les dés
      app.resetDice();   
  
      inferiorScore.value += largeSuiteScore;
      inferiorScore.textContent = inferiorScore.value;
      app.finalScore(superiorScore, inferiorScore, bonus);

  },

  enterScore11 : function() {
    var yamsValue = 0;
    var yamsScore = 0;
    var yams = document.querySelectorAll('.all-dice');
    for (var counter = 0; counter < yams.length - 1; counter += 1) {
      if ((yams[counter].outerHTML == yams[counter + 1].outerHTML) === true ) {
        yamsValue += 1;
      } else {
        yamsValue = 0;
      }
    }
    if (yamsValue === 4) {
       yamsScore = 50;
      }


      var buttonRemove = document.querySelectorAll('.score-button')
      var buttonParent = document.querySelectorAll('.score-td');
      for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
      // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
      // Si pas de class empty, on laisse l'enfant en place. 
        if (buttonParent[tdCounter].classList.contains('empty')) {
          buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
        }
        
      }
      var newP11 = document.createElement('p');
      newP11.classList.add('already-fill-11');
      newP11.classList.add('score-button');
      newP11.value = yamsScore;
      newP11.textContent = newP11.value;
      buttonParent[11].appendChild(newP11);
  
      buttonParent[11].classList.remove('empty');
      // on reset les dés
      app.resetDice();   
  
      inferiorScore.value += yamsScore;
      inferiorScore.textContent = inferiorScore.value;
      app.finalScore(superiorScore, inferiorScore, bonus);
  },

  enterScore12 : function() {
    var chanceScore = 0;
    // on sélectionne tous les dés de résultats
    var chance = document.querySelectorAll('.all-dice');
    // on additionne toutes les valeurs
    for (var counter = 0; counter < chance.length; counter += 1) {
      if (chance[counter].classList.contains('fa-dice-one')) {
        chanceScore += 1;
      }
      else if (chance[counter].classList.contains('fa-dice-two')) {
        chanceScore += 2;
      }
      else if (chance[counter].classList.contains('fa-dice-three')) {
        chanceScore += 3;
      }
      else if (chance[counter].classList.contains('fa-dice-four')) {
        chanceScore += 4;
      }
      else if (chance[counter].classList.contains('fa-dice-five')) {
        chanceScore += 5;
      }
      else if (chance[counter].classList.contains('fa-dice-six')) {
        chanceScore += 6;
      }
    }
      
    var buttonRemove = document.querySelectorAll('.score-button')
    var buttonParent = document.querySelectorAll('.score-td');
    for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
    // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
    // Si pas de class empty, on laisse l'enfant en place. 
      if (buttonParent[tdCounter].classList.contains('empty')) {
        buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
      }
      
    }
    var newP12 = document.createElement('p');
    newP12.classList.add('already-fill-12');
    newP12.classList.add('score-button');
    newP12.value = chanceScore;
    newP12.textContent = newP12.value;
    buttonParent[12].appendChild(newP12);

    buttonParent[12].classList.remove('empty');
    // on reset les dés
    app.resetDice();   

    inferiorScore.value += chanceScore;
    inferiorScore.textContent = inferiorScore.value;
    app.finalScore(superiorScore, inferiorScore, bonus);

    },

  bonus : function(superiorScore, bonus) {
    if (superiorScore.value >= 63) {
      bonus.value = 35;
      bonus.textContent = bonus.value;
    }
  },

  finalScore : function(superiorScore, inferiorScore, bonus) {
    finalScore.value = superiorScore.value + inferiorScore.value + bonus.value;
    finalScore.textContent = finalScore.value;
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
finalScore.textContent = 0