const {performance} = require('perf_hooks');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const directSolution = userInput => {
    const START = performance.now();
    
    const N = parseInt(userInput);

    let powers = [];
    for (let i = 0; i <= 9; i += 1)
        powers.push(i ** N);

    const isNarcissistic = number => {
        let numberCopy = number;
        let powerSum = 0;
        while (numberCopy != 0) {
            powerSum += powers[numberCopy % 10];
            numberCopy = Math.floor(numberCopy / 10);
        }
        return powerSum == number;
    };

    const lowerLimit = 10;
    const upperLimit = (N + 1) * (9 ** N);

    let requiredSum = 0;

    for (let no = lowerLimit; no <= upperLimit; no += 1)
        if (isNarcissistic(no))
            requiredSum += no;

    console.log(`Direct Solution, Ans: ${requiredSum}, Time: ${(performance.now()-START)/1000} seconds`);
};

readline.question("N: ", input => {
    directSolution(input);
    readline.close();
});