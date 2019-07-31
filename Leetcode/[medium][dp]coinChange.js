const coinChange = (coins, amount) => {
    let dpArray = new Array(amount + 1).fill(Infinity);
    dpArray[0] = 0;
    
    for(let i = 1; i < dpArray.length; i++) {
        for(let j = 0; j < coins.length; j++) {
            const coinValue = coins[j];
            
            if(coinValue <= i ) {
                dpArray[i] = Math.min(dpArray[i - coinValue] + 1, dpArray[i]);
            }
        }
    }
    
    const answer = dpArray[dpArray.length - 1];
    console.log(dpArray);
    return answer === Infinity ? -1 : answer;
}