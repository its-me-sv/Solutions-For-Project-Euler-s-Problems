const n = parseInt(prompt("N : "));
const k = parseInt(prompt("K : "));
const getProduct = lst => lst.reduce((a, b) => a * b, 1);
const no = [...n.toString()].map(i => parseInt(i));
let maxProduct = 0;
for (let i = 0; i < no.length - k; i += 1){
	const prodLst = getProduct(no.slice(i,i+k))
	if (prodLst > maxProduct)
	maxProduct = prodLst;
}
alert(maxProduct);