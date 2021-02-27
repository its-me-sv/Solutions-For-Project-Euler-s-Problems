from time import time

cache = {1:1}
def directSolution(limit):
	start = time()
	def getCollatzLength(no):
		if no in cache:
			return cache[no]
		result = 1 + getCollatzLength(3*no + 1 if no % 2 else no//2)
		cache[no] = result
		return result
	maxLen = 1
	maxValue = 1
	for i in range(limit//2, limit):
		length = getCollatzLength(i)
		if length >= maxLen:
			maxLen = length
			maxValue = i
	print("Direct solution, Ans : {}, Time : {} Seconds".format(maxValue,time()-start))

limit = int(input("Limit : "))
directSolution(limit)