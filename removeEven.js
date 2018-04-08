function removeEveryOther(arr) {
    //your code here
    let keepTab = [];

    for(let i = 0; i < arr.length; i++){
        if(i%2 === 0){
            keepTab.push(arr[i]);
        }
    }
    return keepTab;
}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));