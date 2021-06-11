const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const GIVEN_COINS = [1, 2, 5, 10, 20, 50, 100, 200];
const N = GIVEN_COINS.length;
const MOD = (10 ** 9) + 7;
const dp = new Array(amount + 1).fill(0);
dp[0] = 1;

readline.question(
    "Amount: ", 
    amount => {
        amount = parseInt(amount);
        for (let i = 0; i < N; i += 1) 
            for (let j = GIVEN_COINS[i]; j <= amount; j += 1)
                dp[j] += dp[j-GIVEN_COINS[i]];
        console.log(dp[amount] % MOD);
        readline.close();
    }
);