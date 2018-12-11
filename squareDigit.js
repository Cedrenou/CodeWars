// https://www.codewars.com/kata/square-every-digit/train/javascript
// Square every digit


function squareDigits(num){
    //may the code be with you
    let result = num.toString().split('').map(n => (n * n)).join('')
    return parseInt(result)
}