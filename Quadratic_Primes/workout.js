const {performance} = require('perf_hooks');

const directSolution = (N) => {
    let start = performance.now();
    const MAX_VALUE = 22000;
    let i = 2, j;
    let sieve = new Array(MAX_VALUE).fill(true);
    while (i * i <= MAX_VALUE) {
        if (sieve[i] === true)
            for (j = i * 2; j <= MAX_VALUE; j += i)
                sieve[j] = false;
        i += 1;
    }
    sieve[0] = false;
    sieve[1] = false;
    const getMaxN = (c1, c2) => {
        let n = 0;
        while (sieve[n*n+c1*n+c2] === true)
            n += 1;
        return n;
    };
    let cnt = 0, maxCnt = 0;
    let a, b;
    let maxA = 0, maxB = 0;
    for (b = 3; b < N; b += 2) {
        for (a = -N; a < 0; a += 1) {
            cnt = getMaxN(a, b);
            if (cnt > maxCnt) {
                maxCnt = cnt;
                maxA = a;
                maxB = b;
            }
        }
    }
    let answer = maxA * maxB;
    console.log(`Direct Solution, Ans : ${answer}, Time : ${(performance.now() - start) / 1000} seconds`);
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("N : ", input => {
    directSolution(+input);
    readline.close();
});