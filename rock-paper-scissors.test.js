const { expect, test } = require('@jest/globals');
const play = require('./rock-paper-scissors');

test('rock beats scissors', () => {
    //arrange
    let expectedResult = "Player 1 wins!"
    
    //act
    let result = play(0, 2);
    
    //assert
    expect(result).toBe(expectedResult);
})

test('same moves results in draw', () => {
    let expectedResult = "Draw!"
    
    let result = play(0, 0);


    expect(result).toBe(expectedResult);
})
