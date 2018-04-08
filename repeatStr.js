// FONCTION QUI REPETE NBFOIS LA STRING PASSÉ EN PARAMETRE

function repeatStr (number, str) {
  let repeatStr = '';

  while(number > 0){
    repeatStr += str;
    number--;
  }
 
    return repeatStr;
}

console.log(repeatStr(3, "*"));