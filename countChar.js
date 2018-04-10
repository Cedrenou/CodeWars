function countChar(string, char) {
    let nbChar = 0;

    string = string.toLowerCase();
    char = char.toLowerCase();

    for(let i = 0; i < string.length; i++){
        if(string[i] === char){
            nbChar++;
        }
    }
    return nbChar;
}