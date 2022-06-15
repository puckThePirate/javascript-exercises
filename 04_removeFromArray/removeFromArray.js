const removeFromArray = function(arr,...rem) {
    for(let i=0;i<rem.length;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[j]===rem[i]) arr.splice(j,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
