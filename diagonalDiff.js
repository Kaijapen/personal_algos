function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let leftP = 0;
    let rightP = arr[0].length - 1;
    for(let i = 0; i < arr.length; i++)
    {
        console.log(sum1)
        sum1 += arr[i][leftP];
        sum2 += arr[i][rightP];
        leftP++;
        rightP--;
    }
    if (sum1 > sum2)
    {
        return sum1 - sum2;
    }
    else
    {
        return sum2 - sum1;
    }
    
}

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
console.log(diagonalDifference(arr))

