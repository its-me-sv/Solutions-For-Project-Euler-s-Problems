const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question("Number : ", number => {
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
	console.log(Number(sum));
	readline.close();
});