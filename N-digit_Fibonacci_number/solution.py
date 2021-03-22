no = int(input("N: "))

fibonacii = [0, 1, 1]
nDigitFibo = {1:1}
size = 10
digit = 2

for i in range(3, 23924):
	fibonacii.append(fibonacii[i-1]+fibonacii[i-2])
	if fibonacii[i] >= size:
		nDigitFibo[digit] = i
		size *= 10
		digit += 1

print(nDigitFibo[no])