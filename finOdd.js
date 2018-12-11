// https://www.codewars.com/kata/find-the-odd-int/train/javascript
// Find The Odd Int

function findOdd(A) {
    //TODO
    for (let i = 1; i < A.length; i++) {
        if (A[0] === A[i]) {
            A.splice(i, 1)
            A.splice(0, 1)
            findOdd(A)
        }
    }
    return A[0]
}