const {performance} = require('perf_hooks');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const directSolution = number => {
	let start = performance.now();
	let factorials = [1n];
	for (let i = 1; i <= 1000; i += 1)
		factorials.push(factorials[i-1]*BigInt(i));
	number = factorials[number];
	let sum = 0n;
	while (number != 0n){
		sum += number % 10n;
		number -= number % 10n
		number /= 10n;
	}
	let answer = Number(sum);
	console.log(`Direct Solution, Ans: ${answer}, Time: ${(performance.now()-start)/1000} seconds`);
};

readline.question("Number : ", N => {
	directSolution(BigInt(N));
	readline.close();
});