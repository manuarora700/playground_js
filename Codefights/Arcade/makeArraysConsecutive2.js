// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
// each statue having an non-negative integer size. Since he likes to make things perfect, 
// he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
// He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of 
// additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.


function makeArrayConsecutive2(statues) {
    let counter = 0;
    if(statues.length === 1) return counter;
    

    // This is actual sorting, instead of just sort() method, we use a function which sorts in ascending order
    // on the basis of subtraction.
    sortedStatues = statues.sort(function(a,b) {
        return a - b;
    });
    
    for(let i = 0; i < sortedStatues.length - 1; i++) {
        let next = sortedStatues[i+1];
        let current = sortedStatues[i]
        
        counter = counter + (next - current -1);
    }
    
    return counter;
    
}
