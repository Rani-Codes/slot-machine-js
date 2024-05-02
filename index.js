/* The following needs to happen to spin the slot machine:
1. Create symbols
2. Start the machine
3. Create an animation for the spinning
4. Stop the machine and animation
*/
// Define symbols

const symbols = ['Cherry', 'Lemon', 'Orange', 'Apple', 'Grape', 'Banana']

// Function to generate random symbol
const getRandomSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// Function to spin the reels
function spinReels() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.classList.add('animate-spin'); // Add the spinning animation class
        reel.textContent = getRandomSymbol();
    });
}

// Event listener for spin button
const spinButton = document.querySelector('button');
spinButton.addEventListener('click', () => {
    spinReels()
    hideLosingMessage()
    hideWinningMessage()
    spinButton.disabled = true

    // Set a timeout to stop the spinning animation after a certain duration
    setTimeout(() => {
        stopSpinAnimation(); // Call function to stop spinning animation
        checkForWins();
        spinButton.disabled = false
    }, 1000); // Adjust duration as needed
});

// Function to stop the spinning animation
function stopSpinAnimation() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.classList.remove('animate-spin'); // Remove the spinning animation class
    });
}

// **********************************************************************************************************************************************

const winningCombos = [
    ['Cherry', 'Cherry', 'Cherry'],
    ['Lemon', 'Lemon', 'Lemon'],
    ['Orange', 'Orange', 'Orange'],
    ['Apple', 'Apple', 'Apple'],
    ['Grape', 'Grape', 'Grape'],
    ['Banana', 'Banana', 'Banana'],
]


const losingMessage = document.getElementById('losingMessage');
const showLosingMessage = () => {
    losingMessage.classList.remove('hidden');
}
const hideLosingMessage = () => {
    losingMessage.classList.add('hidden');
}

const winningMessage = document.getElementById('winningMessage');
const showWinningMessage = () => {
    winningMessage.classList.remove('hidden');
}
const hideWinningMessage = () => {
    winningMessage.classList.add('hidden');
}



const checkForWins = () => {
    const reels = document.querySelectorAll('.reel');
    const symbols = Array.from(reels, reel => reel.textContent);

    // Define a function to check if a row contains a winning combination
    const checkRowForWin = (row) => {
        for (const combo of winningCombos) {
            if (combo.every((symbol, index) => symbol === row[index])) {
                return true;
            }
        }
        return false;
    };

    // Divide symbols into rows (3 by 3 grid)
    const rows = [];
    for (let i = 0; i < symbols.length; i += 3) {
        rows.push(symbols.slice(i, i + 3));
    }

    // Check each row for a win
    for (const row of rows) {
        if (checkRowForWin(row)) {
            showWinningMessage()
            return;
        }
    }
    showLosingMessage()
}
