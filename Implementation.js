let throwDice;
let option;
let turn = 0;
let Player1Position = 0;
let Player2Position = 0
const WinningPosition = 100;
let CountForFirstPlayer = 0;
let CountForSecondPlayer = 0;

class SnakeLadder {
        generateRandomNo = (input) => {
        return (Math.floor(Math.random() * input)) + 1;
    }
    startPlayingFurther (option, position) {
        switch (option) {
            case 1:
                console.log("you got " + throwDice +" " + " You got a snake")
                position = position - throwDice;
                if (position < 0)
                position = position + throwDice;
                console.log("your current possition" + position)
                break;

            case 2:
               console.log("you got " + throwDice +" " + "Sorry you have to stay here only");
               console.log("Your position is...." + position)
                break;

            case 3:
               console.log("you got..." + throwDice +" "+ " you got a ladder");
               position = position + throwDice;
               if (position > WinningPosition) {
                   position = position - throwDice;
                   console.log("You cannot cross the limit " + WinningPosition)
               }
                   console.log("Your position is ..... " + position)
                break;
        }
        return position;
    }
    playingBetweenTwoPlayer = () => {

        while (Player1Position != WinningPosition && Player2Position != WinningPosition) {
            throwDice = this.generateRandomNo(6);
            option = this.generateRandomNo(3);

            if (turn % 2 == 0) {
                console.log("This is the first player turn ")
                Player1Position = this.startPlayingFurther(option, Player1Position);
                CountForFirstPlayer++;
                turn++;
                if (Player1Position == WinningPosition) {
                    console.log("Player 1 won the game...."+" "+"No of times dice played =>"+ CountForFirstPlayer);
                }
            }
            else {
                console.log("This is second player turn")
                Player2Position = this.startPlayingFurther(option, Player2Position);
                CountForSecondPlayer++;
                turn++;
                if (Player2Position == WinningPosition) {
                    console.log("Player 2 won the game...."+" "+"No of times dice played =>"+ CountForSecondPlayer);
                }
            }
        }
    }
}
module.exports = new SnakeLadder();