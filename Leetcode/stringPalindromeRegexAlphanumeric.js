/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === "") return true;
    
    s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let i = 0, j = s.length - 1;
    while(i < j) {
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
};

