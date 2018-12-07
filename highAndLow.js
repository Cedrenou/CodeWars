// https://www.codewars.com/kata/highest-and-lowest/train/javascript
// Highest and Lowest


function highAndLow(numbers) {
    // ...
    let arrNum = numbers.split(' ').map(x => parseInt(x))
    
    let high = arrNum[0]
    let low = arrNum[0]
    
    for (let i = 1; i < arrNum.length; i++){
        if (arrNum[i] > high) {
            high = arrNum[i]
        } else if (arrNum[i] < low) {
            low = arrNum[i]
        }
    } 
    return `${high} ${low}`
}


highAndLow("1 2 3 4 5")