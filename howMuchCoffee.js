function howMuchCoffee(events) {
    // Code go here
    let count = 0;

    for (let i = 0; i < events.length; i++) {
        if (events[i] === 'cw' || events[i] === 'dog' || events[i] === 'cat' || events[i] === 'movie') {
            count += 1;
        }
        if (events[i] === 'CW' || events[i] === 'DOG' || events[i] === 'CAT' || events[i] === 'MOVIE') {
            count += 2;
        }
    }

    if (count > 3) {
        return 'You need extra sleep';
    }
    if(count <= 3){
        return count;
    }
}