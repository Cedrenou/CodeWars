// https://www.codewars.com/kata/persistent-bugger/train/javascript
// Persistent Bugger

function persistence(num) {
    //code me
    let strNum = num.toString()
    let splitNum = strNum.split('')

    for (let i = 0; i < splitNum.length; i++) {
        let result = splitNum[i] * splitNum[i + 1]
        return result
    }
}


persistence(39) // 3