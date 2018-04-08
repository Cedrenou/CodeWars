// FONCTION QUI SUPPRIME LE PREMIER ET LE DERNIER CARACTERE DE LA CHAINE PASSÉ EN PARAMETRE


function removeChar(str){
    //You got this!
    let newStr = '';

    for(let i = 1; i < str.length - 1; i++){
        newStr += str[i];
    }
    return newStr;
};

console.log(removeChar('eloquent'), 'loquen');