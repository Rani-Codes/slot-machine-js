var prompt = require('prompt-sync')();

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
    return console.log(`$${depositAmount}`)
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


// depositMoney()
linesBet()