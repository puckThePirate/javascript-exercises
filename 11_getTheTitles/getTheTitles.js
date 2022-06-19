const getTheTitles = function(arr) {
const titles = arr.reduce((tit,entry) => {
    tit.splice(tit.length,1,entry.title);
    return tit;
},[]);
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
