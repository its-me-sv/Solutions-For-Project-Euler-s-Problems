const N = prompt("Enter N : ") - 1;
const MAXVAL = 110000;
let sieve = new Array();
for (let number = 2; number < MAXVAL ** 0.5; number += 1){
	if (!sieve[number])
	for (let i = number * 2; i < MAXVAL; i += number)
	sieve[i] = true;
}
let allPrimes = new Array();
for (let i = 2; i < MAXVAL; i += 1)
if (!sieve[i])
allPrimes.push(i);
alert(allPrimes[N]);