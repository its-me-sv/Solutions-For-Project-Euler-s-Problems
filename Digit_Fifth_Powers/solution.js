const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("N: ", input => {
    const N = parseInt(input);
    
    let powers = [];
    for (let i = 0; i <= 9; i += 1)
        powers.push(i ** N);

    const lowerLimit = 10;
    const upperLimit = (N + 1) * (10 ** N);

    const isNarcissistic = number => {
        let numberCpy = number;
        let sumPowers = 0;
        while (numberCpy != 0) {
            sumPowers += powers[numberCpy % 10];
            numberCpy = Math.floor(numberCpy / 10);
        }
        return sumPowers == number;
    };

    let requiredSum = 0;

    for (let no = lowerLimit; no <= upperLimit; no += 1)
        if (isNarcissistic(no))
            requiredSum += no;

    console.log(requiredSum);
    readline.close();
});