const play = (num1, num2) => {
    // const moves = ["Rock", "Paper", "Scissors"];

    if(num1 == num2) {
        return "Draw!"
    }

    return "Player 1 wins!"
}

module.exports = play;