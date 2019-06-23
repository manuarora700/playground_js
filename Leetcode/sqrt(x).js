/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1;
    while(i*i <= x) {
        if(i*i === x)
            return i;
        i++;
    }
    return i-1;
};