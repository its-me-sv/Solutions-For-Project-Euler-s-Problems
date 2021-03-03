const {performance} = require('perf_hooks');

const directSolution = no => {
	let start = performance.now();
    const getNthTerm = n => 2n*(2n**(n-1n));
    const getDigitSum = no => {
        if (no <= 10n)
            return no;
        let digitSum = 0n;
        while (no != 0n){
            digitSum += no % 10n;
            no -= no % 10n;
            no /= 10n;
        }
        return digitSum;
    };
    let answer = Number(getDigitSum(getNthTerm(no)));
    console.log(`Direct Solution, Ans : ${answer}, Time : ${(performance.now()-start)/1000} seconds`);
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question("N : ", n => {
	directSolution(BigInt(n));
	readline.close();
});