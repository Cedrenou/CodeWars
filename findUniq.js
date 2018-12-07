//https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
// Find the unique number

function findUniq(arr) {
    // do magic
    arr.sort((a, b) => a - b)

    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

findUniq([0, 1, 0]) // 1