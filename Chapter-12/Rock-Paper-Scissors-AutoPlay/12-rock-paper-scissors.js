let score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,loses:0,tie:0
        };

        updateElementScore();

        // console.log(localStorage.getItem('message'));
        /*
        if(!score){
            wins:0,
            loses:0,
            tie:0
        }
        */

        function resetScore(){
            score.wins = 0;
            score.loses = 0;
            score.tie = 0;

            localStorage.removeItem('score');

           // alert(`Score:- Won: ${score.wins} Lost: ${score.loses} Tie: ${score.tie}`);

        }
        let isAuto = false;
        let intervalId;

        function autoPlay(){
            if(!isAuto){
                intervalId = setInterval(()=>{
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                },1000);
                isAuto=true;
            }else{
                clearInterval(intervalId);
                isAuto=false;
            }
        }

        document.querySelector('.js-rock-button').addEventListener('click',()=>{
          playGame('rock');
        });
        document.querySelector('.js-paper-button').addEventListener('click',()=>{
          playGame('paper');
        });
        document.querySelector('.js-scissor-button').addEventListener('click',()=>{
          playGame('scissors');
        });
        document.querySelector('.js-reset-button').addEventListener('click',()=>{
          resetScore(); 
          updateElementScore();
        });
        document.querySelector('.js-auto-button').addEventListener('click',()=>{
          autoPlay();
        });

        document.body.addEventListener('keydown',(event)=>{
          if(event.key==='r'||event.key==='R'){
            playGame('rock');
          }else if(event.key==='p'||event.key==='P'){
            playGame('paper');
          }else if(event.key==='s'||event.key==='S'){
            playGame('scissors');
          }
        });

        function playGame(playerMove){
          const computerMove = pickComputerMove();

          let result = '';

          //  ------------ Logic for Rock ------------------

          if(playerMove ==='rock'){

              if(computerMove === 'rock') {
                result = `It's a Tie!`;
              } else if(computerMove === 'paper') {
                result = 'You lose!';
              } else if(computerMove === 'scissors') {
                result = 'You win!';
              }
          }

          //  ------------ Logic for Paper ------------------

          else if(playerMove ==='paper'){
            
              if (computerMove === 'rock') {
                result = 'You win!';
              } else if (computerMove === 'paper') {
                result = `It's a Tie!`;
              } else if (computerMove === 'scissors') {
                result = 'You lose!';
              }

          }

          //  ------------ Logic for Scissors ------------------

          else if(playerMove ==='scissors'){

            if (computerMove === 'rock') {
              result = 'You lose!';
            } else if (computerMove === 'paper') {
              result = 'You win!';
            } else if (computerMove === 'scissors') {
              result = `It's a Tie!`;
            }
          }

          if(result === 'You win!') score.wins+=1;
          else if(result === 'You lose!') score.loses+=1;
          else if(result === `It's a Tie!`) score.tie+=1;


            // ---------------- Local Storage ----------------------

            // localStorage.setItem('message','hello world!');
            localStorage.setItem('score',JSON.stringify(score));

            updateElementScore();
            document.querySelector('.js-result').innerHTML=result;
            document.querySelector('.js-moves').innerHTML=`You picked <img src="css-images/${playerMove}-emoji.png" class="moves-icon"> Computer picked <img src="css-images/${computerMove}-emoji.png" class="moves-icon">`;


            //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
            //Scores:- Won: ${score.wins} Lost: ${score.loses} Tie: ${score.tie}`);
          
        }

        function updateElementScore(){
            document.querySelector('.js-score').innerHTML=`Won: ${score.wins} Lost: ${score.loses} Tie: ${score.tie}`
        }

        function pickComputerMove(){
            const randomNumber = Math.random();

            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
              computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
              computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
              computerMove = 'scissors';
            }
          return computerMove;
        }
