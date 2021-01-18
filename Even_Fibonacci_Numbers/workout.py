from time import time
def calcIterative(maxVal):
    sumEven = 0
    recFibo = lambda no : no if no < 2 else recFibo(no-1) + recFibo(no-2)
    for pos in range(3,maxVal,3):
        num = recFibo(pos)
        if num > maxVal:
            return sumEven
        sumEven += num

def calcMath(maxVal):
	if maxVal < 2:
		return 0
	if maxVal < 8:
		return 2
	sumEven = 10
	secondPrev = 2
	firstPrev = 8
	while True:
		currNum = (firstPrev*4) + secondPrev
		if currNum > maxVal:
			return sumEven
		sumEven += currNum
		secondPrev = firstPrev
		firstPrev = currNum

def testFunction(function, value):
	start = time()
	print("Ans : {}, Time : {} seconds".format(function(value),time()-start))

n = int(input("Enter Maximum Value : "))
print("Using Iteration,", end =" ")
testFunction(calcIterative,n)
print("Using Maths,", end =" ")
testFunction(calcMath,n)