const reverseString = function(str) {
    let rstr = '';
    let arr = str.split('');
    for(let i=str.length-1;i>=0;i--){
        rstr = rstr + arr[i];
    }
    return rstr;
};

// Do not edit below this line
module.exports = reverseString;
