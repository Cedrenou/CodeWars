// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
// Count the smiley faces!

function countSmileys(arr) {
    let valid = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].length)
        if (arr[i].length === 2) {
            if ((arr[i].includes(':') || arr[i].includes(';')) && (arr[i].includes('D') || arr[i].includes(')'))) {
                valid++
            }
        } else if (arr[i].length === 3) {
            if ((arr[i].includes(':') || arr[i].includes(';')) && (arr[i].charAt(1) === '-' || arr[i].charAt(1) === '~') && (arr[i].includes('D') || arr[i].includes(')'))) {
                valid++
            }
        }
    }

    return valid
}


countSmileys([';~>', ';)', ';~>', ':~)', ';o)', ';o>', ':('])


(arr[i].charAt(2) === '-' || arr[i].charAt(2) === '~')