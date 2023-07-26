function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let minSum = 0;
    let maxSum = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    maxSum = sum - min;
    minSum = sum - max;
    console.log(minSum + " " + maxSum)
}

arr = [7, 69, 2, 221, 8974]
arr2 = [1, 2, 3, 4, 5]
miniMaxSum(arr2)