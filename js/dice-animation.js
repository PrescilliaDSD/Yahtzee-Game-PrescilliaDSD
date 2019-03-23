var app = {
  init : function () {
    var diceButton = document.querySelector('.throw-dice');
    // quand on clique sur le bouton "lancer les dés", on applique la fonction throwingDices
    diceButton.addEventListener('click', app.throwingDices);   
  },

  throwingDices : function () {
    // Nous avons droit à 3 lancers. On incrémente donc le counter à chaque lancer de dé.
    counter += 1;
    // on sélectionne dans le DOM les 5 dés qui vont être lancés.
    var dicesToThrow = document.querySelectorAll('.dice-button');
    // on créé la variable random qui va servir à changer la valeur des dés.
    var random;
    // Pour chacune des entrées de dicesToThrow, on remplace le contenu au hasard parmi une des entrées du tableau dices.
    for (var index = 0; index < dicesToThrow.length; index += 1) {
      // Si l'entrée contient une class "selected", cela signifie que le dé a été bloqué, il ne faut donc pas le modifier.
      // Si le compteur a atteint 3, les 3 lancés autorisés ont été fait. On ne peut donc plus modifier les dés avant d'avoir noté son score. 
      if (dicesToThrow[index].classList.contains('selected') === false && counter <= 3) {
        random = Math.floor(Math.random() * 7);
        // Les index du tableau dices allant de 1 a 6, on veut exclure le 0 du Math.random
        while (random === 0) {
          random = Math.floor(Math.random() * 7);
        }
        dicesToThrow[index].innerHTML = dices[random];
      }
    }
    // On peut cliquer sur chaque dé individuellement afin de bloquer son résultat
    for (var index = 0; index < dicesToThrow.length; index+= 1) {
      (dicesToThrow[index]).addEventListener('click', app.diceBlock);
    }
    // on sélectionne toutes les cases qui vont accueillir les scores
    var scoreTd = document.querySelectorAll('.score-td');
    // Dès lors qu'on a lancé les dés au moins une fois, on peut noter notre résultat dans le tableau
      if (counter === 1) {
        for (var index = 0; index < scoreTd.length; index += 1) {
          // Si la case est vide et ne contient pas encore de score, on va créer un bouton pour pouvoir insérer le score.
          if (scoreTd[index].classList.contains('empty')) {
            // on créé l'élément bouton
            var tdButton = document.createElement('button');
            // on lui attribut les classes nécessaires
            tdButton.className += ('bg-transparent score-button ');
            if (index <6) {
              scoreTd[index].className += ('left-side ');
              tdButton.className += ('left-side-button-' + index)
              // on veut créer une fonction pour le score de la partie de gauche.
              tdButton.addEventListener('click', app.leftScore);
            } else {
              scoreTd[index].className += ('right-side ');
              tdButton.className += ('right-side-button-' + index)
              if (index === 6 || index === 7 || index === 11) {
                tdButton.addEventListener('click', app.tripsSquareYahtzee);
              } else if (index === 8) {
                tdButton.addEventListener('click', app.full);
              }
            }
            // on met à l'intérieur l'icône pour insérer le score.
            tdButton.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
            // on déplace l'élément créé dans la case concernée.
            scoreTd[index].appendChild(tdButton);
            }
        }
      }    
      
  },

//       // une fonction  chance

//       // une fonction pour les suites

  diceBlock : function(event) {
    var diceToBlock = event.currentTarget;
      if (counter !== 0) {
        diceToBlock.classList.toggle('selected');    
        diceToBlock.classList.toggle('text-info'); 
      }
  },

  leftScore : function (event) {
    var dicesResult = 0;
    var resultArray = [];
    var leftSide = document.querySelectorAll('.left-side');
    var dicesThrowed = document.querySelectorAll('.all-dice');
    for (var index = 0; index < dicesThrowed.length; index += 1) {
      for (var index2 in dices) {
        if (dicesThrowed[index].outerHTML == dices[index2]) {
          resultArray.push(index2); 
        }
      }
    }
    resultArray.sort();
    var a = []; var b = []; var prev;
    for ( var index = 0; index < resultArray.length; index += 1) {
      if ( resultArray[index] !== prev ) {
        a.push(resultArray[index]);
        b.push(1);
      } else {
        b[b.length-1]++;
      }
      prev = resultArray[index];
    }
    
    for (var index = 0; index < leftSide.length; index += 1) {
      if ((event.currentTarget).classList.contains('left-side-button-' + index)) {
        for (var index2 = 0; index2 < a.length; index2 += 1) {
          if (a[index2] == (index + 1)) {
            dicesResult = a[index2] * b[index2];
          }
        } 
      }
    }
    var newElement = document.createElement('p');
    newElement.value = dicesResult;
    newElement.classList.add('score-button');
    newElement.classList.add('filled');
    newElement.textContent = newElement.value;
    ((event.currentTarget).parentNode).classList.remove('empty');
    (event.currentTarget).replaceWith(newElement);

    app.resetDices();

    // On rajoute le score au total de la partie de gauche.
    leftScore.value += dicesResult;
    leftScore.textContent = leftScore.value;
    // on vérifie si les conditions du bonus sont ok.
    app.bonus(leftScore, bonus);
    // on fait le total de tous les points dans la partie "total".
    app.finalScore(leftScore, rightScore);
  },

  resetDices : function (event) {
    // on sélectionne les cinq dés à reset
    var dicesToReset = document.querySelectorAll('.dice-button');
    // Pour chaque dé, on veut lui redonner sa valeur initiale qui correspond à une entrée du tableau dices.
    for (var index = 0; index < dicesToReset.length; index += 1) {
      dicesToReset[index].innerHTML = dices[index + 1];
      dicesToReset[index].classList.remove('selected');
      dicesToReset[index].classList.remove('text-info');
    }
    // on remet le compteur à 0 pour pouvoir recommencer un tour.
    counter = 0;
    // on souhaite retirer tous les boutons de score une fois qu'on a cliqué pour entrer un score.
    // on sélectionne d'abord les td à vider.
    var buttonToRemoveIn = document.querySelectorAll('.score-td');
    // on sélectionne le bouton à supprimer
    var buttonToRemove = document.querySelectorAll('.score-button');
    for (var index = 0; index < buttonToRemoveIn.length; index += 1) {
      if (buttonToRemoveIn[index].classList.contains('empty')) {
        buttonToRemoveIn[index].removeChild(buttonToRemove[index]);
      }
    }
  },

  tripsSquareYahtzee : function(event) {
    // fonction pour le brelan, carré et Yahtzee.
    var dicesResult = 0;
    var resultArray = [];
    var dicesThrowed = document.querySelectorAll('.all-dice');
    for (var index = 0; index < dicesThrowed.length; index += 1) {
      for (var index2 in dices) {
        if (dicesThrowed[index].outerHTML == dices[index2]) {
          resultArray.push(index2); 
        }
      }
    }
    resultArray.sort();
    var a = []; var b = []; var prev;
    for ( var index = 0; index < resultArray.length; index += 1) {
      if ( resultArray[index] !== prev ) {
        a.push(resultArray[index]);
        b.push(1);
      } else {
        b[b.length-1]++;
      }
      prev = resultArray[index];
    }
    // après avoir trié les résultats des dés, on vérifie : 
    for (var index = 0; index < b.length; index += 1) {
      // si on a cinq fois le même dé et qu'on clique sur le score Yahtzee, on obtient 50 points.
      if (b[index] === 5 && event.currentTarget.classList.contains('right-side-button-11')) {
          dicesResult = 50;
      // si on a au moins quatre fois le même dé et qu'on clique sur le score carré, on obtient comme score la somme des cinq dés. 
      } else if (b[index] >= 4 && event.currentTarget.classList.contains('right-side-button-7')) {
          for (var index2 = 0; index2 < a.length; index2 += 1) {
            dicesResult += a[index2] * b[index2];
          } 
      // si on a au moins trois fois le même dé et qu'on clique sur le score brelan, on obtient comme score la somme des cinq dés. 
      } else if (b[index] >= 3 && event.currentTarget.classList.contains('right-side-button-6')) {
        for (var index2 = 0; index2 < a.length; index2 += 1) {
          dicesResult += a[index2] * b[index2];
        }
      }
    }
    var newElement = document.createElement('p');
      newElement.value = dicesResult;
      newElement.classList.add('score-button');
      newElement.classList.add('filled');
      newElement.textContent = newElement.value;
      ((event.currentTarget).parentNode).classList.remove('empty');
      (event.currentTarget).replaceWith(newElement);

      app.resetDices();

      // On rajoute le score au total de la partie de droite.
      rightScore.value += dicesResult;
      rightScore.textContent = rightScore.value;
      // on fait le total de tous les points dans la partie "total".
      app.finalScore(leftScore, rightScore);
  },

  full : function(event) {
    // on souhaite avoir 3 fois le même dé ET 2 fois le même dé.
    var dicesResult = 0;
    var resultArray = [];
    var leftSide = document.querySelectorAll('.left-side');
    var dicesThrowed = document.querySelectorAll('.all-dice');
    for (var index = 0; index < dicesThrowed.length; index += 1) {
      for (var index2 in dices) {
        if (dicesThrowed[index].outerHTML == dices[index2]) {
          resultArray.push(index2); 
        }
      }
    }
    resultArray.sort();
    var a = []; var b = []; var prev;
    for ( var index = 0; index < resultArray.length; index += 1) {
      if ( resultArray[index] !== prev ) {
        a.push(resultArray[index]);
        b.push(1);
      } else {
        b[b.length-1]++;
      }
      prev = resultArray[index];
    }
    // On regarde la longueur du tableau b. Pour un full, la longueur sera obligatoirement de 2.
    // Si cette condition est ok, on vérifie que le premier index vaut soit 2 (auquel cas le deuxième vaut forcément 3); ou 3 (auquel cas le deuxième index vaut forcément 2).
    if (b.length === 2 && (b[0] === 2 || b[0] === 3)) {
        dicesResult = 25;
    }
  
    var newElement = document.createElement('p');
      newElement.value = dicesResult;
      newElement.classList.add('score-button');
      newElement.classList.add('filled');
      newElement.textContent = newElement.value;
      ((event.currentTarget).parentNode).classList.remove('empty');
      (event.currentTarget).replaceWith(newElement);

      app.resetDices();

      // On rajoute le score au total de la partie de droite.
      rightScore.value += dicesResult;
      rightScore.textContent = rightScore.value;
      // on fait le total de tous les points dans la partie "total".
      app.finalScore(leftScore, rightScore);
  },

//   // enterScore9 : function() {
//   //   var littleSuite = document.querySelectorAll('.all-dice');
//   //   var littleSuiteScore = 0;
//   //   var diceOne = 0;
//   //   var diceTwo = 0;
//   //   var diceThree = 0;
//   //   var diceFour = 0;
//   //   var diceFive = 0;
//   //   var diceSix = 0; 
    
//   //   for (var tdCount = 0; tdCount < littleSuite.length; tdCount += 1) {
//   //     if (littleSuite[tdCount].classList.contains('fa-dice-one')) {
//   //       diceOne += 1;
//   //     } else if (littleSuite[tdCount].classList.contains('fa-dice-two')) {
//   //       diceTwo += 1;
//   //     }
//   //     else if (littleSuite[tdCount].classList.contains('fa-dice-three')) {
//   //       diceThree += 1;
//   //     }
//   //     else if (littleSuite[tdCount].classList.contains('fa-dice-four')) {
//   //       diceFour += 1;
//   //     }
//   //     else if (littleSuite[tdCount].classList.contains('fa-dice-five')) {
//   //       diceFive += 1;
//   //     }
//   //     else if (littleSuite[tdCount].classList.contains('fa-dice-six')) {
//   //       diceSix += 1;
//   //     }
//   //   }

//   //   if (diceThree > 0 && diceFour > 0) {
//   //     if (diceOne > 0 && diceTwo > 0) {
//   //       littleSuiteScore = 30;
//   //     }
//   //     else if (diceTwo > 0 && diceFive > 0) {
//   //       littleSuiteScore = 30;
//   //     }
//   //     else if (diceFive > 0 && diceSix > 0) {
//   //       littleSuiteScore = 30
//   //     }
//   //   }

//   //   var buttonRemove = document.querySelectorAll('.score-button')
//   //     var buttonParent = document.querySelectorAll('.score-td');
//   //     for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
//   //     // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
//   //     // Si pas de class empty, on laisse l'enfant en place. 
//   //       if (buttonParent[tdCounter].classList.contains('empty')) {
//   //         buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
//   //       }
        
//   //     }
//   //     var newP9 = document.createElement('p');
//   //     newP9.classList.add('already-fill-9');
//   //     newP9.classList.add('score-button');
//   //     newP9.value = littleSuiteScore;
//   //     newP9.textContent = newP9.value;
//   //     buttonParent[9].appendChild(newP9);
  
//   //     buttonParent[9].classList.remove('empty');
//   //     // on reset les dés
//   //     app.resetDice();   
  
//   //     inferiorScore.value += littleSuiteScore;
//   //     inferiorScore.textContent = inferiorScore.value;
//   //     app.finalScore(superiorScore, inferiorScore, bonus);

      
//   // },

//   // enterScore10 : function() {
//   //   var largeSuite = document.querySelectorAll('.all-dice');
//   //   var largeSuiteScore = 0;
//   //   var diceOne = 0;
//   //   var diceTwo = 0;
//   //   var diceThree = 0;
//   //   var diceFour = 0;
//   //   var diceFive = 0;
//   //   var diceSix = 0; 
    
//   //   for (var tdCount = 0; tdCount < largeSuite.length; tdCount += 1) {
//   //     if (largeSuite[tdCount].classList.contains('fa-dice-one')) {
//   //       diceOne += 1;
//   //     } else if (largeSuite[tdCount].classList.contains('fa-dice-two')) {
//   //       diceTwo += 1;
//   //     }
//   //     else if (largeSuite[tdCount].classList.contains('fa-dice-three')) {
//   //       diceThree += 1;
//   //     }
//   //     else if (largeSuite[tdCount].classList.contains('fa-dice-four')) {
//   //       diceFour += 1;
//   //     }
//   //     else if (largeSuite[tdCount].classList.contains('fa-dice-five')) {
//   //       diceFive += 1;
//   //     }
//   //     else if (largeSuite[tdCount].classList.contains('fa-dice-six')) {
//   //       diceSix += 1;
//   //     }
//   //   }

//   //   if (diceTwo > 0 && diceThree > 0 && diceFour > 0 && diceFive > 0) {
//   //     if (diceOne > 0) {
//   //       largeSuiteScore = 40;
//   //     }
//   //     else if (diceSix > 0) {
//   //       largeSuiteScore = 40;
//   //     }   
//   //   }

//   //   var buttonRemove = document.querySelectorAll('.score-button')
//   //     var buttonParent = document.querySelectorAll('.score-td');
//   //     for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
//   //     // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
//   //     // Si pas de class empty, on laisse l'enfant en place. 
//   //       if (buttonParent[tdCounter].classList.contains('empty')) {
//   //         buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
//   //       }
        
//   //     }
//   //     var newP10 = document.createElement('p');
//   //     newP10.classList.add('already-fill-10');
//   //     newP10.classList.add('score-button');
//   //     newP10.value = largeSuiteScore;
//   //     newP10.textContent = newP10.value;
//   //     buttonParent[10].appendChild(newP10);
  
//   //     buttonParent[10].classList.remove('empty');
//   //     // on reset les dés
//   //     app.resetDice();   
  
//   //     inferiorScore.value += largeSuiteScore;
//   //     inferiorScore.textContent = inferiorScore.value;
//   //     app.finalScore(superiorScore, inferiorScore, bonus);

//   // },

//   // enterScore12 : function() {
//   //   var chanceScore = 0;
//   //   // on sélectionne tous les dés de résultats
//   //   var chance = document.querySelectorAll('.all-dice');
//   //   // on additionne toutes les valeurs
//   //   for (var counter = 0; counter < chance.length; counter += 1) {
//   //     if (chance[counter].classList.contains('fa-dice-one')) {
//   //       chanceScore += 1;
//   //     }
//   //     else if (chance[counter].classList.contains('fa-dice-two')) {
//   //       chanceScore += 2;
//   //     }
//   //     else if (chance[counter].classList.contains('fa-dice-three')) {
//   //       chanceScore += 3;
//   //     }
//   //     else if (chance[counter].classList.contains('fa-dice-four')) {
//   //       chanceScore += 4;
//   //     }
//   //     else if (chance[counter].classList.contains('fa-dice-five')) {
//   //       chanceScore += 5;
//   //     }
//   //     else if (chance[counter].classList.contains('fa-dice-six')) {
//   //       chanceScore += 6;
//   //     }
//   //   }
      
//   //   var buttonRemove = document.querySelectorAll('.score-button')
//   //   var buttonParent = document.querySelectorAll('.score-td');
//   //   for (var tdCounter = 0; tdCounter < buttonParent.length; tdCounter += 1) {
//   //   // Pour enlever un bouton, on vérifie que le parent contient bien la class empty, et si c'est le cas, on supprime l'enfant.
//   //   // Si pas de class empty, on laisse l'enfant en place. 
//   //     if (buttonParent[tdCounter].classList.contains('empty')) {
//   //       buttonParent[tdCounter].removeChild(buttonRemove[tdCounter]);
//   //     }
      
//   //   }
//   //   var newP12 = document.createElement('p');
//   //   newP12.classList.add('already-fill-12');
//   //   newP12.classList.add('score-button');
//   //   newP12.value = chanceScore;
//   //   newP12.textContent = newP12.value;
//   //   buttonParent[12].appendChild(newP12);

//   //   buttonParent[12].classList.remove('empty');
//   //   // on reset les dés
//   //   app.resetDice();   

//   //   inferiorScore.value += chanceScore;
//   //   inferiorScore.textContent = inferiorScore.value;
//   //   app.finalScore(superiorScore, inferiorScore, bonus);

//   //   },


  bonus : function(leftScore, bonus) {
  // le bonus est validé si le score de la partie de gauche atteint ou dépasse 63.
    if (leftScore.value >= 63) {
      // Si c'est ok, le score du bonus est de 35. 
      bonus.value = 35;
      bonus.textContent = bonus.value;
      leftScore.value += bonus.value;
      leftScore.textContent = leftScore.value;
    }
  },

  finalScore : function(leftScore, rightScore) {
    // on additionne le score de gauche avec le score de droite.
    finalScore.value = leftScore.value + rightScore.value;
    finalScore.textContent = finalScore.value;
  },

}


// Lorsque la page a fini de charger, je veux lancer la fonction init
document.addEventListener('DOMContentLoaded', app.init);

// ci-dessous un tableau contenant toutes les valeurs possibles des dés.
var dices = {
  1: '<i class="all-dice fas fa-dice-one"></i>',
  2: '<i class="all-dice fas fa-dice-two"></i>',
  3: '<i class="all-dice fas fa-dice-three"></i>',    
  4: '<i class="all-dice fas fa-dice-four"></i>',
  5: '<i class="all-dice fas fa-dice-five"></i>',
  6: '<i class="all-dice fas fa-dice-six"></i>',
}

// initialiser un compteur pour le nombre de lancers
var counter = 0;

// préparer la somme des totaux et le bonus
// bonus
var bonus = document.querySelector('.bonus');
bonus.value = 0;
bonus.textContent = bonus.value;
// total supérieur
var leftScore = document.querySelector('.left-score');
leftScore.value = 0;
leftScore.textContent = leftScore.value;
// total inférieur
var rightScore = document.querySelector('.right-score');
rightScore.value = 0;
rightScore.textContent = rightScore.value;
// total des totaux
var finalScore = document.querySelector('.final-score');
finalScore.textContent = 0