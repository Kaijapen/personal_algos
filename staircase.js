function staircase(n) {
    let numSpaces = n - 2
    let string = ""
    for ( let i = 0; i < n; i++)
    {
        for (let j = 0; j < n; j++)
        {
            if(j <= numSpaces)
            {
                string += " ";
            }
            else
            {
                string += "#";
            }
        }
        numSpaces--;
        console.log(string);
        string = ""
    }
}

let n = 4;
staircase(n);