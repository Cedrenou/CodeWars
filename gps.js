// https://www.codewars.com/kata/speed-control/train/javascript
// Speed Control

function gps(s, x) {
    // your code
    let deltaDistance = 0;
    let result = 0;
    let arrOfSpeed = [];

    for (let i = 0; i < x.length - 1; i++) {
        deltaDistance = x[i + 1] - x[i];
        result = (3600 * deltaDistance) / s;
        arrOfSpeed.push(Math.floor(result))
    }
    return x.length === 0 || x.length === 1 ? 0 : Math.max(...arrOfSpeed);
}