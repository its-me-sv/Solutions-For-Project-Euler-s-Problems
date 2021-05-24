MAX_VAL = 22000
sieve = [True] * MAX_VAL
for i in range(2, int(MAX_VAL ** 0.5) + 1):
    if sieve[i]:
        for j in range(i * 2, MAX_VAL, i):
            sieve[j] = False
sieve[0] = False
sieve[1] = False

def getMaxN(c1, c2):
    n = 0
    while sieve[(n*n)+(n*c1)+c2]:
        n += 1
    return n

N = int(input())

maxN = 0
maxA = 0
maxB = 0
cnt = 0

for b in range(3, N, 2):
    for a in range(-N, 0):
        cnt = getMaxN(a, b)
        if cnt > maxN:
            maxN = cnt
            maxA = a
            maxB = b

print(maxA * maxB)