n = int(input("Enter Number : "))
largestPrime = 0
while not n % 2:
	largestPrime = 2
	n //= 2
i = 3  
while i < int(n**0.5):
	while not n % i:
		largestPrime = i
		n //= i
	i += 2
if n > 2:
	largestPrime = n
print(largestPrime)