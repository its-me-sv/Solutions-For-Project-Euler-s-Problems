let cache = {1:1};
const getCollatzLength = no => {
	if (cache[no])
		return cache[no];
	let result = 1 + getCollatzLength(no%2==0?Math.floor(no/2):no*3+1);
	cache[no] = result;
	return result;
};
const limit = parseInt(prompt("Limit : "));
let maxValue = 1, maxLength = 1;
for (let i = Math.floor(limit/2); i < limit; i += 1){
	let currLength = getCollatzLength(i);
	if (currLength >= maxLength){
		maxLength = currLength;
		maxValue = i;
	}
}
alert(maxValue);