const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const divisorsSum = n => {
	let result = 1;
	for (let i = 2; i <= Math.floor(n ** 0.5); i += 1)
		if (n % i == 0)
			result += i == Math.floor(n/i) ? i : i + Math.floor(n/i);
	return result;
};

rl.question("Number: ", no => {
	no = +no;
	const MAXVALUE = 28124;
	let abudants = [];
	let allNumbers = Array(MAXVALUE).fill("NO");
	for (let i = 1; i < MAXVALUE; i +=1){
		let s = divisorsSum(i);
		if (s > i)
			abudants.push(i);
	}
	for (let i = 0; i < abudants.length; i += 1){
		for (let j = i; j < abudants.length; j += 1){
			if (abudants[i] + abudants[j] >= MAXVALUE)
				break;
			allNumbers[abudants[i] + abudants[j]] = "YES";
		}
	}
	let answer = 0;
	//For Project Euler
	// for (let i = 1; i < MAXVALUE; i += 1)
	// 	if (allNumbers[i] == "NO")
	// 		answer += i;
	// console.log(answer);
	answer = no > MAXVALUE ? "YES" : allNumbers[no];
	console.log(answer);
	rl.close();
});