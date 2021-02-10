const n = parseInt(prompt("N : "));
const isPalindrome = no => no.toString() == no.toString().split("").reverse().join("");
const upperLimit = (10 ** n) - 1;
const lowerLimit = (upperLimit/10) + 1;
let maxProduct = 0, product;
for (let i = upperLimit; i >= lowerLimit; i -= 1){
	for (let j = i; j >= lowerLimit; j -= 1){
		product = i * j;
		if (product < maxProduct)
		break;
		if (isPalindrome(product) == true && product > maxProduct)
		maxProduct = product;
	}
}
alert(maxProduct);