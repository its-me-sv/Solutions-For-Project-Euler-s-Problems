const {performance} = require('perf_hooks');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const directSolution = n => {
	const start = performance.now();
	const getCycleLength = no => {
		let cache = [];
		cache[1] = 1;
		let i = 2;
		let nr = 1;
		while (true){
			nr *= 10;
			let rem = nr % no;
			if (rem == 0)
				return 0;
			if (cache[rem])
				return i - cache[rem];
			cache[rem] = i;
			i += 1;
			nr = rem;
		}
	};
	let answers = [];
	let cycleLengths = [];
	answers[3] = 3;
	answers[4] = 3;
	cycleLengths[3] = 1;
	cycleLengths[4] = 1;
	for (let i = 5; i <= 10000; i += 1){
		let len = getCycleLength(i);
		if (len > cycleLengths[answers[i-1]]){
			answers[i] = i;
			cycleLengths[i] = len;
		} else{
			answers[i] = answers[i-1];
			cycleLengths[i] = cycleLengths[i-1];
		}
	}
	const ans = answers[n-1];
	console.log(`Direct Solution, Ans: ${ans}, Time: ${(performance.now()-start)/1000} seconds`);
};

rl.question("N: ", N => {
	directSolution(+N);
	rl.close();
});