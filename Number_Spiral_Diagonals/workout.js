const {performance} = require('perf_hooks');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const directSolution = no => {
    const START = performance.now();

    no = BigInt(no);
    no = (no - 1n) / 2n;
    let squaredN = no * no;

    let requiredSum = (8n * squaredN) + (15n * no) + 13n;
    requiredSum *= (no * 2n);
    requiredSum /= 3n;
    requiredSum += 1n;

    console.log(`Direct Solution, Ans : ${requiredSum}, Time : ${(performance.now() - START) / 1000} seconds`);
};

readline.question("N: ", n => {
    directSolution(n);
    readline.close();
});