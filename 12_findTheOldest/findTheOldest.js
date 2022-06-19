const findTheOldest = function(arr) {
    const oldest = arr.reduce((obj, entry) => {
        if (entry.yearOfDeath == undefined) {
            let d = new Date();
            if (obj.max < d.getFullYear() - entry.yearOfBirth)
                obj.name = entry.name;
            obj.max = Math.max(obj.max, d.getFullYear() - entry.yearOfBirth);
            return obj;
        } 
        else {
            if (obj.max < entry.yearOfDeath - entry.yearOfBirth)
                obj.name = entry.name;
            obj.max = Math.max(obj.max, entry.yearOfDeath - entry.yearOfBirth);
            return obj;
        }
    }, { max: -1, name: "ol" });
    console.log(oldest);

    return oldest;
};
findTheOldest([{
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
    },
]);
// Do not edit below this line
module.exports = findTheOldest;