function birthdayCakeCandles(candles) {
    let count = 1;
    let max = candles[0];
    for(let i = 1; i < candles.length; i++){
        if(max < candles[i]) {
            count = 1;
            max = candles[i];
        }
        else if(max ==  candles[i]) {
            count++;
        }
    }
    return count;

}

arr = [3, 3, 4, 3];
console.log(birthdayCakeCandles(arr));