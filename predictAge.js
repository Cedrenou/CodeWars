function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let Age1 = age1 * age1;
    let Age2 = age2 * age2;
    let Age3 = age3 * age3;
    let Age4 = age4 * age4;
    let Age5 = age5 * age5;
    let Age6 = age6 * age6;
    let Age7 = age7 * age7;
    let Age8 = age8 * age8;

    let addThem = Age1 + Age2 + Age3 + Age4 + Age5 + Age6 + Age7 + Age8
    let total = Math.sqrt(addThem) / 2
    let finish = Math.round(total)

    return finish
}

/**
 * Take a list of ages.
 *
 * Multiply each number by itself.
 * Add them all together.
 * Take the square root of the result.
 * Divide by two.
 */


predictAge(65,60,75,55,60,63,64,45) // 86