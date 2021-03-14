factorials = [1]
for i in range(1, 1001):
	factorials.append(factorials[i-1]*i)

number = int(input("Number : "))
number = factorials[number]

sumOfDigits = 0
while number != 0:
	sumOfDigits += number % 10
	number //= 10

print(sumOfDigits)