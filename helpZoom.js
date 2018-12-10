// https://www.codewars.com/kata/password-system/train/javascript
// Password System

/**
 *  J'ai decidé de diviser le tableau en deux partie, puis de 'reverse' la seconde partie du tableau afin de les comparer.
 *  A partir du moment ou un element et different alors le programme s'arreter et retourne "No"
 */

// TODO : clean code !

function helpZoom(key) {
    //code here..
    let firstHalfKey = key.slice(0, key.length / 2);
    let reverseKey = [];
    let yes = '';

    if (key.length % 2 === 0) {
        reverseKey = key.slice(key.length / 2).reverse();
    } else {
        reverseKey = key.slice((key.length / 2) + 1).reverse();
    }

    for (let i = 0; i < firstHalfKey.length; i++) {
        if (firstHalfKey[i] === reverseKey[i]) {
            yes = 'Yes'
        } else {
            return 'No'
        }
    }
    return yes
}