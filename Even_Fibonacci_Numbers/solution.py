maxVal = int(input("Enter Maximum Value : "))
if maxVal < 2:
	print(0)
elif maxVal < 8:
	print(2)
else:
	sumEven = 10
	secondPrev = 2
	firstPrev = 8
	while True:
		currNum = (firstPrev*4) + secondPrev
		if currNum > maxVal:
			break
		sumEven += currNum
		secondPrev = firstPrev
		firstPrev = currNum
	print(sumEven)