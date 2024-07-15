
      /*
      let htmlElement = document.querySelector('.button-reset ');
      console.log(htmlElement);

    
      document.body.innerHTML = 'Hello';
      document.title = "Good Job";
      (document.querySelector('.js-button-rock')).innerHTML;  
      
      document.title = 'Rochambeau w/ DOM';

      // Import HTML body into javascript document
      document.body;
      
      // Gain control of all HTML within the javascript body
      document.body.innerHTML;


    */

      let tempObj={};
      let result = '';
      let moveCopy = '';
      let playerMove = '';
      let scoreTotal = {
        wins: 0,
        losses: 0,
        ties: 0,
        method: function display(){console.log(`display score method: ${scoreTotal}`)}
      };

      const keyScore = 'scoreKey';
      const keySaved = 'savedKey';
      scoreTotal.method();
      console.log(scoreTotal);

      // Recall/recover stored score from last game
      let needToRecall = localStorage.getItem(keySaved);
      console.log(needToRecall);
      if("true" === needToRecall){
        tempObj = localStorage.getItem(keyScore);
        console.log(`Retrieved scores: ${tempObj}`);
        scoreTotal = JSON.parse(tempObj);
        console.log(`previous score: ${scoreTotal}`);
      }
      else
        houseKeeping(JSON.stringify(scoreTotal));



      function houseKeeping(scoreString){
        console.log(`Setting up persistent write: ${keyScore} ${scoreString}`);
        localStorage.setItem(keySaved, 'true');
        localStorage.setItem(keyScore, scoreString); 
      }

      //
      //
      function computeResult(buttonSelect){
        playerMove = buttonSelect;
        if(buttonSelect === 'rock'){
          if(moveCopy === 'rock'){
            result = 'Tie.';
            scoreTotal.ties++;
          }
          else if(moveCopy === 'paper'){
            result = 'You lose.';
            scoreTotal.losses++;
          }
          else if(moveCopy === 'scissors'){
            result = 'You win.';
            scoreTotal.wins++;
          }
          document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;
          // return result;
        }

        if(buttonSelect === 'paper'){
          if(moveCopy === 'rock'){
            result = 'You win.';
            scoreTotal.wins++;
          }
          else if(moveCopy === 'paper'){
            result = 'Tie.';
            scoreTotal.ties++;
          }
          else if(moveCopy === 'scissors'){
            result = 'You lose.';
            scoreTotal.losses++;
          }
          document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;


          // return result;
        }
      
        if(buttonSelect === 'scissors'){
          if(moveCopy === 'rock'){
            result = 'You lose.';
            scoreTotal.losses++;
          }
          else if(moveCopy === 'paper'){
            result = 'You win.';
            scoreTotal.wins++;
          }
          else if(moveCopy === 'scissors'){
            result = 'Tie.';
            scoreTotal.ties++;
          }
          document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;

          // document.querySelector('.js-result').innerHTML = result;
      

        }

        document.querySelector('.js-moves').innerHTML = `You
         <img src="../emojis/${playerMove}-emoji.png" class="move-icon">
          <img src="../emojis/${moveCopy}-emoji.png" class="move-icon">
        Computer`;

        return result;
      }
    
      //
      //
      function pickComputerMove(){
        let computerMove = '';
        const randomNumber = Math.random(); 
        console.log(randomNumber);
        if(randomNumber >= 0 && randomNumber < 1/3){
          computerMove = 'rock';
          console.log('rock');
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
          console.log('paper');
        }
        else {
          computerMove = 'scissors';
          console.log('scissors');
        }
        return computerMove;
      }

