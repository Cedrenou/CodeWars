// https://www.codewars.com/kata/rot13-1/train/javascript
// Rot13

function rot13(message) {
    //your code here

    let splitStr = message.split('');
    let rot13Msg = [];

    splitStr.map(letter => {
        if (letter >= 'a' && letter <= 'm' || letter >= 'A' && letter <= 'M') {
            return rot13Msg.push(String.fromCharCode(letter.charCodeAt(0) + 13))
        } else if (letter >= 'n' && letter <= 'z' || letter >= 'N' && letter <= 'Z') {
            return rot13Msg.push(String.fromCharCode(letter.charCodeAt(0) - 13))
        } else {
            return rot13Msg.push(letter)
        }
    });
    return rot13Msg.join('')
}


rot13("abc");

/**
 Create a function that takes a string and returns the string ciphered with Rot13.
 If there are numbers or special characters included in the string, they should be
 returned as they are. Only letters from the latin/english alphabet should be shifted,
 like in the original Rot13 "implementation".
 */
