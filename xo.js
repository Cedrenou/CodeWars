// https://www.codewars.com/kata/exes-and-ohs/train/javascript
// Exes and Ohs


function XO(str) {
    //code here
    let x = 0;
    let o = 0;
    let newStr = str.toLowerCase()


    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === 'x'){
            x++;
        } else if(newStr[i] === 'o'){
            o++
        }
    }
    return x === o ? true : false
}