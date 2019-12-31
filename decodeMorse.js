// https://www.codewars.com/kata/decode-the-morse-code/train/javascript
// Decode the morse code

function decodeMorse(morseCode) {
    //your code here
    return morseCode.trim().split('   ').map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ')
}
