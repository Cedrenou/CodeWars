// https://www.codewars.com/kata/shortest-word/train/javascript
// Shortest Word

function findShort(s) {

    let strArr = s.split(' ');
    let strLen = [];

    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        strLen.push(strArr[i].length)
    }

    strLen.sort((a, b) => a - b);

    return strLen[0]
}

findShort('i want to travel the world writing code one day');

// Refactor Version

function findShortest(s) {
    let words = [];
    s.split(' ').map(word => words.push(word.length));
    return Math.min(...words)
}