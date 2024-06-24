<!DOCTYPE html>

<html>

  <head>
    <title>Rochambeau Score</title>
    <style>

    </style>
    
  </head>

  <body>
    <p>Rochembo with Score</p>

    <button onclick="
      moveCopy = pickComputerMove();

      if(moveCopy === 'rock'){
        result = 'Tie.';
      }
      else if(moveCopy === 'paper'){
        result = 'You loose.';
      }
      else if(moveCopy === 'scissors'){
        result = 'You win.';
      }

      alert(`You picked rock. Computer picked ${moveCopy} ${result}`);
    ">Rock</button>


    <button onclick="
      moveCopy = pickComputerMove();

      if(moveCopy === 'rock'){
        result = 'You win.';
      }
      else if(moveCopy === 'paper'){
        result = 'Tie.';
      }
      else if(moveCopy === 'scissors'){
        result = 'You loose.';
      }

      alert(`You picked paper. Computer picked ${moveCopy} ${result}`);
    ">Paper</button>


    <button onclick="  
      moveCopy = pickComputerMove();

      if(moveCopy === 'rock'){
        result = 'You lose.';
      }
      else if(moveCopy === 'paper'){
        result = 'You win.';
      }
      else if(moveCopy === 'scissors'){
        result = 'Tie.';
      }

      alert(`You picked scissors. Computer picked ${moveCopy} ${result}`);
    ">Scissors</button>

    <script>

      let result = '';
      let moveCopy = '';

      function pickComputerMove(){

        const randomNumber = Math.random(); 
        let computerMove = '';

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
    </script>


  </body>



</html>