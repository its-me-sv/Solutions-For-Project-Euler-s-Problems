const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getPossibleWays = input => {
    let coins = [2, 5, 10, 20, 50, 100, 200];
    let amount = parseInt(input);

    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < coins.length; i += 1)
        for (let j = coins[i]; j <= amount; j += 1)
            dp[j] += dp[j-coins[i]];

    return dp[amount];
};

readline.question(
    "Amount: ", 
    userInput => {
        console.log(getPossibleWays(userInput));
        readline.close();
    }
);