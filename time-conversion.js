function timeConversion(s) {
    amPm = s[s.length-2] + s[s.length - 1];
    hours = s[0] + s[1];
    minutes = s[3] + s[4]
    seconds = s[6] + s[7];
    
    if (hours == "12"){
        hours = "00"
    }
    
    if(amPm == 'PM')
    {
        let diff = parseInt(hours) + 12;
        
        return `${diff}:${minutes}:${seconds}`;
    }
    else
    {
        if(parseInt(hours) < 10)
        {
            return `${hours}:${minutes}:${seconds}`;
        }
        else
        {
            return `${hours}:${minutes}:${seconds}`;
        }
    }

}

s = "07:05:45AM";
console.log(timeConversion(s));