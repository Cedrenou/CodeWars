var min = function (list) {
    let plusPetit = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] < plusPetit) {
            plusPetit = list[i];
        }
    }

    return plusPetit;
}

var max = function (list) {
    let plusGrand = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] > plusGrand) {
            plusGrand = list[i];
        }
    }
    return plusGrand;
}
// trouve le plus petit ou plus grand nombre dans un tableau de nombre