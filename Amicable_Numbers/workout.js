const {performance} = require('perf_hooks');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const directSolution = range => {
	const start = performance.now();
	const getProperDivisorsSum = no => {
		let sum = 1;
		for (let i = 2; i < no ** 0.5; i += 1)
			if (no % i == 0)
				sum += i == Math.floor(no/i) ? i : i + Math.floor(no/i);
		return sum;
	};
	const amicableSum = [0];
	const divisorSum = [0];	
	for (let i = 1; i <= range; i += 1){
		divisorSum.push(getProperDivisorsSum(i));
		if (i == getProperDivisorsSum(divisorSum[i]) && divisorSum[i] != i)
			amicableSum.push(amicableSum[i-1] + i);
		else
			amicableSum.push(amicableSum[i-1]);
	}
	let answer = amicableSum[range];
	console.log(`Direct Solution, Ans: ${answer}, Time: ${(performance.now()-start)/1000} seconds`);
};

readline.question("Range: ", n => {
	directSolution(+n);
	readline.close();
});