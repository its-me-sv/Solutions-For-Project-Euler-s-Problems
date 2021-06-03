n = int(input("N: "))

smallestNumber = 10
largestNumber = (n + 1)*(9 ** n)

powers = []
for i in range(10):
    powers.append(i**n)

requiredSum = 0

def isNarcissistic(number):
    tempSum = 0
    numberCpy= number
    while number != 0:
        tempSum += powers[number % 10]
        number //= 10
    return tempSum == numberCpy

for no in range(smallestNumber, largestNumber + 1):
    if isNarcissistic(no):
        requiredSum += no

print(requiredSum)