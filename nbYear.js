// Growth of a Population

function nbYear(p0, percent, aug, p) {
    let year = 0;
    for (let i = 0; p0 < p; i++){
        p0 += p0 * (percent / 100) + aug;
        year++
    }
    return year
}

nbYear(1000, 2, 50, 1200);//3

