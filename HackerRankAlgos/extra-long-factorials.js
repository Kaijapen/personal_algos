/*
why is this not working? fix me...
*/

function extraLongFactorials(n) {
    let res = n;
    for(let i = n-1; i > 0; i--)
    {
        res *= i;
    }
    console.log(BigInt(res).toString())
    return BigInt(res).toString();
}

console.log(extraLongFactorials(25))