'use strict';
//selecting items
let count;
let current0 = 0;
let current1 = 0;
let tr =1;
let sckeep0 = 0;
let sckeep1 = 0;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnhld = document.querySelector('.btn--hold');
const btnrll = document.querySelector('.btn--roll');
const currentEl0 = document.querySelector('#current--0'); 
const currentEl1 = document.querySelector('#current--1'); 

//starting condition
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

btnnew.addEventListener('click',function(){
 current0 = 0;
 current1 = 0;
 tr =1;
 sckeep0 = 0;
 sckeep1 = 0;
 currentEl0.textContent= current0;
 currentEl1.textContent= current1;
 score0El.textContent =sckeep0;
 score1El.textContent = sckeep1;
 diceEl.classList.add('hidden');

});
//rolling dice functionality
btnrll.addEventListener('click', function () {
    

  //1.random number to the dice
  count = Math.trunc(Math.random() * 6) + 1;
  //2.remove the hidden
  diceEl.classList.remove('hidden');
  //3.change the dice image
  diceEl.src = `dice-${count}.png`;
  //4.if statement add the current score
  if(count!=1 && tr%2!=0)
  {
      current0 += count;
      currentEl0.textContent= current0;
      console.log('i have got 1 -A');

  }
  else if(count==1)
  {
    current0 = 0;
    current1 = 0;
    tr++;
    currentEl0.textContent= current0;
    currentEl1.textContent= current1;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
  else if(tr%2==0 && count!=1){
    current1 +=count;
    currentEl1.textContent= current1;
    console.log('i have got 1 -B');

    
  }
});

btnhld.addEventListener('click',function()
{
    sckeep0 +=current0;
    sckeep1 +=current1;
    tr++;
    current0 = 0;
    current1 = 0;
    currentEl0.textContent= current0;
    currentEl1.textContent= current1;
    score0El.textContent =sckeep0;
    score1El.textContent = sckeep1;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
});
