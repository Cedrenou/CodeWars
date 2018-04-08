// FONCTION QUI ADDITIONNE TOUT LES CHIFFRE DU TABLEAU EXEPTÉ LE PLUS GRAND ET LE PLUS PETIT


function sumArray(array) {
    if (array.length < 2) {
        return 0;
    let result = 0;

    let min = array[0];
    let max = array[0];
    // ICI JE FAIS L'ADDITION DE TOUT LES ELEMENT DU TABLEAU
    // TODO: ECRIRE LA CONDITION POUR ELIMINER LE MIN ET LE MAX !
    for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            } else if (array[i] > max) {
                max = array[i];
            }
            result = result + array[i];
        }
        return result - min - max;
}

console.log(sumArray([6, 2, 1, 8, 10]), 16);