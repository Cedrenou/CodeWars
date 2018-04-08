//  MA METHODE

function opposite(number) {
    return number += -(number * 2);
}
console.log(opposite(0));

// AUTRE METHODE
// PROBLEME RENCONTRÉ SI number = 0 la valeur retourner est "-0"

function opposite(number) {
    return(-number);
}