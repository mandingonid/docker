


      let tempObj={};
      let result = '';
      let moveCopy = '';
      let playerMove = '';
      let scoreTotal = {
        wins: 0,
        losses: 0,
        ties: 0,
        chips: 200,
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
        // To be used for initializing bank  scoreTotal.chips = 200;
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
        result = "No Chips";
        
        if(scoreTotal.chips > 0){
          if(buttonSelect === 'rock'){
            if(moveCopy === 'rock'){
              result = 'You Tie.';
              scoreTotal.ties++;
            }
            else if(moveCopy === 'paper'){
              result = 'You Lose.';
              scoreTotal.losses++;
              scoreTotal.chips--;
            }
            else if(moveCopy === 'scissors'){
              result = 'You Win.';
              scoreTotal.wins++;
              scoreTotal.chips++;
            }
            document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;
            
            // return result;
          }

          if(buttonSelect === 'paper'){
            if(moveCopy === 'rock'){
              result = 'You Win.';
              scoreTotal.wins++;
              scoreTotal.chips++;
            }
            else if(moveCopy === 'paper'){
              result = 'You Tie.';
              scoreTotal.ties++;
            }
            else if(moveCopy === 'scissors'){
              result = 'You Lose.';
              scoreTotal.losses++;
              scoreTotal.chips--;
            }
            document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;


            // return result;
          }
        
          if(buttonSelect === 'scissors'){
            if(moveCopy === 'rock'){
              result = 'You Lose.';
              scoreTotal.losses++;
              scoreTotal.chips--;
            }
            else if(moveCopy === 'paper'){
              result = 'You Win.';
              scoreTotal.wins++;
              scoreTotal.chips++;
            }
            else if(moveCopy === 'scissors'){
              result = 'You Tie.';
              scoreTotal.ties++;
            }
            document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;


        
          }
          document.querySelector('.js-moves').innerHTML = `You
            <img src="./emojis/${playerMove}-emoji.png" class="move-icon">
            <img src="./emojis/${moveCopy}-emoji.png" class="move-icon">
          Computer`;

          console.log(scoreTotal.chips);
          document.querySelector('.js-score').innerHTML = `${result} -  Chip Amount $${scoreTotal.chips}`;
        }
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

