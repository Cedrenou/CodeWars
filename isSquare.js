// https://www.codewars.com/kata/youre-a-square/train/javascript
// You're a square!

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0 && Math.sqrt(n) * Math.sqrt(n) === n
}
