/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    
    // Building character map
    let sCharMap = {};
    
    for(let i = 0; i < s.length; i++) {
        let sChar = s[i];
        sCharMap[sChar] = sCharMap[sChar] + 1 || 1;
    }
    
    // Removing occurences of another string t
    for(let i = 0; i < t.length; i++) {
        let tChar = t[i];
        
        if(!sCharMap[tChar]) return false;
        else sCharMap[tChar]--;
    }
    return true;

};