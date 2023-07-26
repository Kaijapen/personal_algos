// Print the ratios of positive, negative and zero values in the array.Each value should be printed on a separate line with  digits after the decimal.The function should not return a value.

function plusMinus(arr) {
    let zero = 0;
    let pos = 0;
    let neg = 0;
    const LEN = arr.length;
    for (let i = 0; i < LEN; i++) {
        if (arr[i] == 0) {
            zero++;
        }
        else if (arr[i] > 0) {
            pos++;
        }
        else if (arr[i] < 0) {
            neg++;
        }
    }
    console.log((pos / LEN).toFixed(6));
    console.log((neg / LEN).toFixed(6));
    console.log((zero / LEN).toFixed(6));

}

let arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr);