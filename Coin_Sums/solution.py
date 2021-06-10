coins = [1, 2, 5, 10, 20, 50, 100, 200]
lenOfCoins = len(coins) + 1
MOD = (10 ** 9) + 7

amount = int(input("Amount: "))

dp = [0] * (amount + 1)
dp[0] = 1

for i in range(lenOfCoins - 1):
    for j in range(coins[i], amount + 1):
        dp[j] += dp[j-coins[i]]

print(dp[amount] % MOD)