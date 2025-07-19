'use strict'; 
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')
const diceI = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let player0 = document.querySelector('#current--0')
let player1 = document.querySelector('#current--1')






score0.textContent = 0;
score1.textContent = 0 ;
diceI.classList.add('hidden')

let currentScore = 0;


//rolling funcitonlity 
btnRoll.addEventListener('click', function(){

    const diceNum = Math.trunc(Math.random()*6)+1;

    diceI.classList.remove('hidden');
    diceI.src = `dice-${diceNum}.png`;
    console.log(diceNum);

    //if the number is 1 then the player need to be switched here am doing that 

    if(diceNum !== 1){
        //if not one im adding the score to teh current user 
        currentScore += diceNum;
        player0.textContent = currentScore;
        

    }else{
        //if one im switching the player 

    }
})
