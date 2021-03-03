const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("N : ", no => {
	no = BigInt(no);
	no = 2n*(2n**(no-1n));
	let ans = 0n;
	if (no <= 10n)
		ans = no;
	else{
		while (no != 0n){
			ans += no % 10n;
			no -= no % 10n;
			no /= 10n;
		}
	}
	console.log(Number(ans));
	readline.close();
});