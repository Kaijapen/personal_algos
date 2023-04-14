function plusMinus(arr) {
    let propPos = 0;
    let propNeg = 0;
    let propZero = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            propPos++;
        }
        else if(arr[i] < 0)
        {
            propNeg++;
        }
        else
        {
            propZero++;    
        }
    }
    console.log(parseFloat(propPos / arr.length).toFixed(6));
    console.log(parseFloat(propNeg / arr.length).toFixed(6));
    console.log(parseFloat(propZero / arr.length).toFixed(6));

}

arr = [1, 1, 0, -1, -1]
plusMinus(arr);