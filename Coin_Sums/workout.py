from time import time

MOD = (10 ** 9) + 7
COINS = [1, 2, 5, 10, 20, 50, 100, 200]
MAX_AMOUNT = 100001
N = len(COINS) + 1

def using2DArray(userAmount):
    START = time()
    dp2 = [[0] * MAX_AMOUNT] * N

    for i in range(N):
        dp2[i][0] = 1

    for i in range(1, N):
        for j in range(1, MAX_AMOUNT):
            if j >= COINS[i - 1]:
                dp2[i][j] = dp2[i][j-COINS[i-1]] + dp2[i-1][j]
            else:
                dp2[i][j] = dp2[i-1][j]

    ans = dp2[N-1][userAmount] % MOD 
    
    print("using2DArray, Ans : {}, Time : {} Seconds".format(ans, time()-START))


def using1DArray(userAmount):
    START = time()
    dp1 = [0] * MAX_AMOUNT
    dp1[0] = 1

    for i in range(N - 1):
        for j in range(COINS[i], MAX_AMOUNT):
            dp1[j] += dp1[j-COINS[i]]

    ans = dp1[userAmount] % MOD

    print("using1DArray, Ans : {}, Time : {} Seconds".format(ans, time()-START))

using2DArray(100)
using2DArray(1000)
using2DArray(10000)
using2DArray(100000)

print("--------")

using1DArray(100)
using1DArray(1000)
using1DArray(10000)
using1DArray(100000)
