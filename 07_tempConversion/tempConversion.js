const ftoc = function(temp) {
  let newTemp = (5/9)*(temp-32);
  return parseFloat(newTemp.toFixed(1));
};

const ctof = function(temp) {
 let newTemp = (9/5)*(temp) + 32;
  return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
