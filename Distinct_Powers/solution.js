const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("B: ", input => {
    const a = 2;
    const b = parseInt(input);

    let cache = [];
    let distinctPowersCount = 0;

    for (let i = a; i <= b; i += 1)
        for (let j = a; j <= b; j += 1) {
            let val = i ** j;
            if (!cache.includes(val)) {
                cache.push(val);
                distinctPowersCount += 1;
            }
        }
    console.log(distinctPowersCount);
    readline.close();
});