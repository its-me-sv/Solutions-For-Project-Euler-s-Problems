let n = prompt("Enter Upper Limit : ") - 1;
const getSum = x => x * Math.floor(n / x) * Math.floor((n / x) + 1) / 2;
alert(getSum(3)+getSum(5)-getSum(15));