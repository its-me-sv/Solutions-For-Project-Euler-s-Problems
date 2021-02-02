let n = +prompt("Enter upper limit : ");
const getGCD = (a,b) => b == 0 ? a : getGCD(b,a%b);
const getLCM = (a,b) => (a*b)/getGCD(a,b);
alert([...new Array(n+1).keys()].slice(1).reduce(getLCM));