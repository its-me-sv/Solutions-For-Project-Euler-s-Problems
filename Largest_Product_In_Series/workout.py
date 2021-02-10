from time import time

def iterativeSolution(n, k):
	start = time()
	def getProduct(lst):
		product = 1
		for no in lst:
			product *= no
		return product
	no = [int(i) for i in str(n)]
	maxProduct = 0
	for i in range(len(no) - k):
		prodLst = getProduct(no[i:i+k])
		if prodLst > maxProduct:
			maxProduct = prodLst
	print("Using Loops, Ans : {}, Time : {} seconds".format(maxProduct,time()-start))

N = int(input("N : "))
K = int(input("K : "))
iterativeSolution(N, K)