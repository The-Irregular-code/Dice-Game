 const player0El = document.querySelector('.player--0');  
 const player1El = document.querySelector('.player--1');  
 const player2El = document.querySelector('.player--2');  

 const score0El = document.querySelector('#score--0');  
 const score1El = document.getElementById('score--1');  
 const score2El = document.getElementById('score--2');  


 const current0El = document.getElementById('current--0');  
 const current1El = document.getElementById('current--1');  
 const current2El = document.getElementById('current--2'); 

 const diceEl = document.querySelector('.dice');  
 const btnNew = document.querySelector('.btn--new');  
 const btnRoll = document.querySelector('.btn--roll');  
 const btnHold = document.querySelector('.btn--hold');  

 score0El.textContent = 0;  
 score1El.textContent = 0;  
 score2El.textContent = 0;  

 diceEl.classList.add('hidden');  
 let currentscore = 0;  
 const scores = [0, 0];  
 let activePlayer = 0;  
 let playing = true;  

 const switchPlayer = function () {  
  currentscore = 0;  
  document.getElementById(`current--${activePlayer}`).textContent = currentscore;  
  
  if(activePlayer == 0 ){
    activePlayer = 1;
  }
  else if(activePlayer == 1){
    activePlayer = 2;
  }
  else{
    activePlayer = 0;
  }
  player0El.classList.toggle('player--active');  
  player1El.classList.toggle('player--active'); 
  player2El.classList.toggle('player--active'); 

 };  

 btnRoll.addEventListener('click', function () {  
  if (playing) {  
   diceEl.classList.remove('hidden');  
   const dice = Math.trunc(Math.random() * 6) + 1;  
   console.log(dice);  
   diceEl.src = `dice-${dice}.png`;  
   if (dice !== 1) {  
    currentscore += dice;  
    document.getElementById(`current--${activePlayer}`).textContent = currentscore;  
   } else {  
    switchPlayer();  
   }  
  }  
 });  

 let active = 0;  
 btnHold.addEventListener('click', function () {  
  if (playing) {  

   scores[activePlayer] += currentscore;  

   document.getElementById(`score--${activePlayer}`).textContent =  scores[activePlayer];  
   if (scores[activePlayer] >= 20) {  
    playing = false;  
    diceEl.classList.add('hidden');  

    document.getElementById(`score--${activePlayer}`).textContent = 'Win!';  
    switchPlayer();  

    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');  

        if(activePlayer == 1 ){
            active = 2;
        }
        else if(activePlayer == 2){
            active = 0;
        }
        else if(activePlayer == 0){
            active = 1;
        }

    document.querySelector(`.player--${active}`).classList.add('player--active');  
   } else {  
    switchPlayer();  
   }  
  }  
 });  
 btnNew.addEventListener('click', function () {  
  playing = true;  
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');  
  activePlayer = 0;  
  document.querySelector('.player--0').classList.add('player--active');  
  document.querySelector('.player--1').classList.remove('player--active');  
  document.querySelector('.player--2').classList.remove('player--active');  

  scores[0] = 0;  
  scores[1] = 0;  
  scores[2] = 0; 

  document.getElementById('score--0').textContent = 0;  
  document.getElementById('score--1').textContent = 0;  
  document.getElementById('score--2').textContent = 0; 

 });  