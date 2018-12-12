// https://www.codewars.com/kata/decode-the-morse-code/train/javascript
// Decode the morse code

// Code illisible, mais sur une ligne et ca c'est la classe :D

function decodeMorse(morseCode) {
    //your code here
    return morseCode.trim().split('   ').map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ')
}