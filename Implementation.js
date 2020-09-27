
class SnakeLadder{
   
    generateRandomNo(){
       
        return (Math.floor(Math.random()*6)) + 1;
      }
      checkForTheOption(){
        return (Math.floor(Math.random() * 3)) +1;
    }
    startPlayingFurther = () => {

        let WinningPosition = 100;
        let startPosition = 0;
      
        while (startPosition <= WinningPosition) {
   
            let DiceNo= this.generateRandomNo();
            let option = this.checkForTheOption();
            switch (option) {
                case 1:
                    console.log("you got...." + DiceNo + " " + "so u r in front of snake") ;
                    if (startPosition <0)
                    {
                        startPosition=0
                    }
                    else{

                    startPosition = startPosition - DiceNo
                    }
                    console.log("now your position is..." + startPosition)
                    break;

                case 2:
                    console.log("you got " + DiceNo + " " + "so u have to wait in same position because its no play");
                   break;
                case 3:
                    console.log("you got...." + DiceNo + " " + "so u r in front of ladder") 
                    startPosition = startPosition + DiceNo
                   // console.log("now your position is..." + startPosition);
                    if(startPosition > WinningPosition){
                     startPosition = startPosition - DiceNo;
                    console.log("now your position is..." + startPosition);
                    }
                    console.log("now your position is..." + startPosition);
                    // if(startPosition == 100)
                    // console.log("you win the game");
                    break;
            }
        }
    }
}

module.exports = new SnakeLadder();