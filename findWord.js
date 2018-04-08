// FONCTION QUI TROUVE UN MOT DANS UN TABLEAU DE CHAINE DE CARACTERE


function findNeedle(haystack) {
    let needle = "needle";
    let founded = "found the needle at position ";
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle){
            return founded + i;
        }
    }
}


var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

console.log(findNeedle(haystack_1), 'found the needle at position 3');