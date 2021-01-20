let n = prompt("Enter Maximum Value : ") - 0;
let largestPrime = 0;
while (n % 2 == 0){
	largestPrime = 2;
	n /= 2;
}
let i = 3;
while (i < n**0.5){
	while (n % i == 0){
		largestPrime = i;
		n /= i;
	}
	i += 2;
}
if (n > 2)
largestPrime = n;
alert(largestPrime);