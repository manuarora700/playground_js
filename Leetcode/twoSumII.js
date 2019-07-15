/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0; j = numbers.length - 1;
    let result = [];
    while(i < j) {
        if(numbers[i] + numbers[j] === target) {
            result.push(i+1);
            result.push(j+1);
                return result;

        }
        else if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
    

};