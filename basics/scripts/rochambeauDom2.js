


      let tempObj={};
      let result = '';
      let moveCopy = '';
      let playerMove = '';
      let betAmount = 1;
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
        scoreTotal.chips = 450;
      }
      else
        houseKeeping(JSON.stringify(scoreTotal));

      
       const dropdowns = document.querySelectorAll('.dropdown');
      // Loop through all dropdown elements
      dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
          select.classList.toggle('select-clicked');
          caret.classList.toggle('caret-rotate');
          menu.classList.toggle('menu-open');
        });

        // Loop through all option elements 
        options.forEach(option => {
          option.addEventListener('click', () => {
            selected.innerTest = option.innerText;
            selected.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
              option.classList.remove('active');
            });
          });
        });
      });

      
      function houseKeeping(scoreString){
        console.log(`Setting up persistent write: ${keyScore} ${scoreString}`);
        localStorage.setItem(keySaved, 'true');
        localStorage.setItem(keyScore, scoreString); 
      }

      //
      //
      function computeResult(buttonSelect){

        document.querySelector('.js-current-bet').innerHTML=`Current Bet $${betAmount}`;
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
              scoreTotal.chips -= betAmount;
            }
            else if(moveCopy === 'scissors'){
              result = 'You Win.';
              scoreTotal.wins++;
              scoreTotal.chips += betAmount;
            }
            document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;
            
            // return result;
          }

          if(buttonSelect === 'paper'){
            if(moveCopy === 'rock'){
              result = 'You Win.';
              scoreTotal.wins++;
              scoreTotal.chips += betAmount;
            }
            else if(moveCopy === 'paper'){
              result = 'You Tie.';
              scoreTotal.ties++;
            }
            else if(moveCopy === 'scissors'){
              result = 'You Lose.';
              scoreTotal.losses++;
              scoreTotal.chipsb-= betAmount;
            }
            document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;


            // return result;
          }
        
          if(buttonSelect === 'scissors'){
            if(moveCopy === 'rock'){
              result = 'You Lose.';
              scoreTotal.losses++;
              scoreTotal.chips -= betAmount;
            }
            else if(moveCopy === 'paper'){
              result = 'You Win.';
              scoreTotal.wins++;
              scoreTotal.chips += betAmount;
            }
            else if(moveCopy === 'scissors'){ 
              result = 'You Tie.';
              scoreTotal.ties++;
            }
            document.querySelector('.js-display-score').innerHTML=`  Wins ${scoreTotal.wins} Losses ${scoreTotal.losses} Ties ${scoreTotal.ties}`;


        
          }
          document.querySelector('.js-moves').innerHTML = `You
            <img src="../emojis/${playerMove}-emoji.png" class="move-icon">
            <img src="../emojis/${moveCopy}-emoji.png" class="move-icon">
          Computer`;

          console.log(scoreTotal.chips);
          document.querySelector('.js-score').innerHTML = `${result} -  Chip Balance $${scoreTotal.chips}`;
        }
        else
        {
          scoreTotal.chips = 220;
          houseKeeping(score.Total);
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