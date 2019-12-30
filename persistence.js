// https://www.codewars.com/kata/persistent-bugger/train/javascript
// Persistent Bugger

function persistence(num) {
    let strNum = num.toString().split('')
    let count = 0
    let newStrNum

    while (strNum.length > 1) {
        newStrNum = strNum.reduce((accumulator, currentValue) => accumulator * currentValue)
        count++
        strNum = newStrNum.toString().split('')
    }
    return count
}