const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("N: ", n => {
    n = BigInt(n);
    n = (n - 1n) / 2n;
    let squaredN = n * n;

    let requiredSum = (8n * squaredN) + (15n * n) + 13n;
    requiredSum *= (2n * n);
    requiredSum /= 3n;
    requiredSum += 1n;
    
    console.log(requiredSum);
    readline.close();
});