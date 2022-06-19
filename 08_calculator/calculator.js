const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
  }
  return sum;
};

const multiply = function(arr) {
 let prod = 1;
 for(let i=0;i<arr.length;i++){
  prod = prod * arr[i];
}
return prod;

};

const power = function(a,b) {
  let pow = a;
	for(let i=1;i<b;i++){
    pow = pow*a;
  }
  return pow;
};

const factorial = function(a) {
	let fact = 1;
  for(let i=1;i<=a;i++){
    fact = fact*i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
