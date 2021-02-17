no = int(input("N : "))
product = -1
for a in range(1,(no//3)+1):
	b = (no*no - 2*no*a)//(2*no - 2*a)
	c = no - a - b
	if c*c == a*a + b*b:
		product = max(product, a*b*c)
print(product)