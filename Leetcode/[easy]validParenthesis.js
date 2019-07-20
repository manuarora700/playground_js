const isValid = s => {
    let stack = [];
    let pairs  = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(pairs[char]) {
            stack.push(char);
        } else {
            const topOfStack = stack[stack.length - 1];
            char === pairs[topOfStack]
            ? stack.pop()
            : stack.push(char);
        }
    }
    return stack.length === 0;
}