const {performance} = require('perf_hooks');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const directSolution = input => {
    const START = performance.now();

    const a = 2;
    const b = parseInt(input);

    let cache = [];
    let distinctPowersCount = 0;

    for (let i = 2; i <= b; i += 1)
        for (let j = 2; j <= b; j += 1) {
            let val = i ** j;
            if (!cache.includes(val)) {
                cache.push(val);
                distinctPowersCount += 1;
            }
        }
    console.log(`Direct Solution, Ans : ${distinctPowersCount}, Time : ${(performance.now()-START)/1000} seconds`);
};

readline.question("B: ", input => {
    directSolution(input);
    readline.close();
});