/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {   
     var i=digits.length-1;
     if(digits[i]<9){
        digits[i]++;
        return digits
    }
    while((digits[i]+1)>9){
        digits[i] = 0;
        digits[i-1]++;
        if(digits[i-1]===9){
            return digits
        }
        i--;
        if(i<0 && digits[i+1] === 0){
            digits.unshift(1);
            return digits;
        }
    }
    return digits;
};