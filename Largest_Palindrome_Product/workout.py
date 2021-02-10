from time import time

def iterativeSolution(n):
	start = time()
	isPalindrome = lambda x: x == int(str(x)[::-1])
	upperLimit = (10 ** n) - 1
	lowerLimit = (upperLimit//10) + 1
	maxProduct = 0
	for i in range(upperLimit, lowerLimit - 1, -1):
		for j in range(i, lowerLimit - 1, -1):
			product = i * j
			if product < maxProduct:
				break
			if isPalindrome(product) and product > maxProduct:
				maxProduct = product
	print("Using Loops, Ans : {}, Time : {} seconds".format(maxProduct,time()-start))

N = int(input("N : "))
iterativeSolution(N)