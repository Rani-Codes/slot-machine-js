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


depositMoney()