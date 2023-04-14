function miniMaxSum(arr) {
    let min = arr[0];
    let max = 0;
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] != min)
        {
            maxSum += arr[i];
        }
        if (arr[i] != max)
        {
            minSum += arr[i]
        }
    }
    console.log(minSum + " " + maxSum)
}

arr = [7, 69, 2, 221, 8974]
miniMaxSum(arr)