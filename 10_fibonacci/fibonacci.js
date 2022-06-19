const fibonacci = function(a) {
    if (a < 1) return "OOPS";
    else {
        let t1, t2, t3;
        t1 = 1;
        t2 = 1;
        t3 = 1;
        while (a-2>0) {
            t3 = t2 + t1;
            t1 = t2;
            t2 = t3;
            a--;
        }
        return t3;
    }
};

// Do not edit below this line
module.exports = fibonacci;