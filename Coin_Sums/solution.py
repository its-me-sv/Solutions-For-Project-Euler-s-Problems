GIVEN_COINS = [1, 2, 5, 10, 20, 50, 100, 200]
N = len(GIVEN_COINS)
amount = int(input("Amount: "))

dp = [0] * (amount + 1)
dp[0] = 1

for i in range(N):
    for j in range(GIVEN_COINS[i], amount + 1):
        dp[j] += dp[j-GIVEN_COINS[i]]

MOD = (10 ** 9) + 7
print(dp[amount] % MOD)