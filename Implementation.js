class SnakeLadder{
    generateRandomNo(){
        var startPosition = 0;
        return (Math.floor(Math.random()*6)) + 1;
      }
      checkForTheOption(){
        return (Math.floor(Math.random() * 3)) +1;
    }
}

module.exports = new SnakeLadder();