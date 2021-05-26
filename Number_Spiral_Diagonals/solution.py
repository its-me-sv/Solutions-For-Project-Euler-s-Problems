n = int(input("N: "))
n = (n - 1) // 2
squaredN = n * n

requiredSum = (8 * squaredN) + (15 * n) + 13
requiredSum *= (n * 2)
requiredSum //= 3
requiredSum += 1

print(requiredSum)