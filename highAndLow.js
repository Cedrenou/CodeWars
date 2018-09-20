function highAndLow(numbers){
    // ...
    let numbersList = numbers.split.parseInt(' ')
    console.log(numbersList)
    
    let high = numbersList[0]
    let low = numbersList[0]

    for (let i = 1; i < numbersList.length; i++){
        if (numbersList[i] > high){
            high = numbersList[i]
        }
        if (numbersList[i] < low){
            low = numbersList[i]
        }
    }

    return high + ' ' + low
  }

  
  highAndLow('1 2 3 4')
  