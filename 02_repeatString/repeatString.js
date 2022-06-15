const repeatString = function(str,num) {
    let str1 = '';
    if(num<0) return "ERROR";
    else {
        while(num--) {
            str1 = str1 + str;
        }
        return str1;
    }

};

// Do not edit below this line
module.exports = repeatString;
