// https://www.codewars.com/kata/printer-errors/train/javascript
// Printer Errors

function printerError(s) {
    // your code
    let error = 0;
    const split = s.split('')

    for (let i = 0; i < split.length; i++){
        if (split[i].valueOf() !== 'a' && split[i].valueOf() !== 'b' && split[i].valueOf() !== 'c' && split[i].valueOf() !== 'd' && split[i].valueOf() !== 'e' && split[i].valueOf() !== 'f' && split[i].valueOf() !== 'g' && split[i].valueOf() !== 'h' && split[i].valueOf() !== 'i' && split[i].valueOf() !== 'j' && split[i].valueOf() !== 'k' && split[i].valueOf() !== 'l' && split[i].valueOf() !== 'm' ){
            error++
        }
    }
    return `${error} / ${s.length}`
}