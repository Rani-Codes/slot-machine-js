// var prompt = require('prompt-sync')();

/* Different tasks needed to create the slot machine app
1. Deposit Money
2. Determine # of lines to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if user has won
6. Give user their winnings
7. Play again
*/

const depositMoney = () => {
    let depositAmount = prompt("How much money do you want to deposit? $")
    depositAmount = parseFloat(depositAmount)
    if(isNaN(depositAmount) || depositAmount <= 0) {
        return depositMoney()
    }
    return depositAmount
}


const linesBet = () => {
    console.log("\n")
    let numberOfLines = prompt("Do you want to bet on 1, 2, or all 3 lines? ")
    numberOfLines = parseInt(numberOfLines)

    if(numberOfLines == 3) {
        return console.log(`You bet on all ${numberOfLines} lines`)
    } 

    else if(numberOfLines == 2) {
        console.log("\n1 = top, 2 = middle, 3 = bottom\n")
        let firstChoice = prompt("What is the first line you want to bet on? ")
        firstChoice = parseInt(firstChoice)

        if (firstChoice != 1 && firstChoice != 2 && firstChoice != 3) {
            console.log("You have to pick between 1, 2, or 3")
            return linesBet()
        }

        let secondChoice = prompt("What is the second line you want to bet on? ")
        secondChoice = parseInt(secondChoice)
        if (secondChoice != 1 && secondChoice != 2 && secondChoice != 3) {
            console.log("You have to pick between 1, 2, or 3")
            return linesBet()
        }

        if (firstChoice == secondChoice) {
            console.log("Can't pick the same line twice, choose again.\n")
            return linesBet()
        }
        
        return console.log(`You bet on ${numberOfLines} lines and those lines were ${firstChoice} and ${secondChoice}`)
    } 

    else if(numberOfLines == 1) {
        console.log("\n1 = top, 2 = middle, 3 = bottom\n")
        let firstChoice = prompt("What is the line you want to bet on? ")
        firstChoice = parseInt(firstChoice)

        if (firstChoice != 1 && firstChoice != 2 && firstChoice != 3) {
            console.log("You have to pick between 1, 2, or 3")
            return linesBet()
        }
        return console.log(`You bet on line ${firstChoice}`)
    } 

    else return linesBet()
}


const betAmount = (availableMoney) => {
    console.log(`You have $${availableMoney}`)
    let amount = prompt("How much do you want to bet? ")

    while(isNaN(amount) || (amount > availableMoney || amount <= 0)) {
        console.log(`You have $${availableMoney}`)
        const temp = prompt("How much do you want to bet? ")
        amount = temp
    }
    console.log(`\nYou bet $${amount} out of your $${availableMoney}\n`)
    return amount
}

//Simple way to see the depositMoney updating, can be turned into 
// a while loop later for repeated betting done by user if they have the funds.


// let availableMoney = depositMoney()
// amount = betAmount(availableMoney)
// availableMoney = availableMoney - amount
// betAmount(availableMoney)
// availableMoney = availableMoney - amount
// console.log(`You have $${availableMoney} remaining in your wallet.`)


// linesBet()


/* The following needs to happen to spin the slot machine:
1. Create symbols
2. Start the machine
3. Create an animation for the spinning
4. Stop the machine and animation
*/
// Define symbols
const symbols = ['Cherry', 'Lemon', 'Orange', 'Apple', 'Grapes', 'Banana']

// Function to generate random symbol
const getRandomSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)]
}


// Define the spinReels function in global scope
function spinReels() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.textContent = getRandomSymbol();
    });
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
    spinReels();

    // Set a timeout to stop the spinning animation after a certain duration
    setTimeout(() => {
        stopSpinAnimation(); // Call function to stop spinning animation
        checkForWins();
    }, 1000); // Adjust duration as needed
});

// Function to stop the spinning animation
function stopSpinAnimation() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.classList.remove('animate-spin'); // Remove the spinning animation class
    });
}

const checkForWins = () => {
    const row1 = document.querySelectorAll('.R1')
}