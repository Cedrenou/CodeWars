// FONCTION QUI FAIT LA SOMME DES VALEUR POSITIVE DANS UN TABLEAU DE NOMBRE


function positiveSum(arr) {
    var result = 0;
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
          result = arr[i] + result;
        }
    }
    return result;
}

console.log(positiveSum([1,2,3,4,5]));