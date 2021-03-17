const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const getProperDivisorsSum = no => {
	let sum = 1;
	for (let i = 2; i < no ** 0.5; i += 1)
		if (no % i == 0)
			sum += i == Math.floor(no/i) ? i : i + Math.floor(no/i);
	return sum;
};

readline.question("Range: ", range => {
	range = +range;
	const amicableSum = [0];
	const divisorSum = [0];
	for (let i = 1; i <= range; i += 1){
		divisorSum.push(getProperDivisorsSum(i));
		if (i == getProperDivisorsSum(divisorSum[i]) && divisorSum[i] != i)
			amicableSum.push(amicableSum[i-1] + i);
		else
			amicableSum.push(amicableSum[i-1]);
	}
	console.log(amicableSum[range]);
	readline.close();
});