function makeNegative(num) {
    // Si num est positive alors retourne num en negatif
    if(num > 0){
        return(-num);
    }else{ // Si num est deja negatif alors retourne le tel quel 
        return num;
    }
}