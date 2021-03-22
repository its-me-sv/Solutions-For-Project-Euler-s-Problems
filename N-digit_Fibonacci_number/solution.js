const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let fibonacii = [0n, 1n, 1n];
let nDigitFibo = {1: 1};
let size = 10n;
let digit = 2;
for (let i = 3; i <= 23923; i += 1){
	fibonacii.push(fibonacii[i-1] + fibonacii[i-2]);
	if (fibonacii[i] >= size){
		nDigitFibo[digit] = i;
		size *= 10n;
		digit += 1;
	}
}

rl.question("N: ", n => {
	console.log(nDigitFibo[+n]);
	rl.close();
});