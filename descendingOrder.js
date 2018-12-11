// https://www.codewars.com/kata/descending-order/train/javascript
// Descending Order

function descendingOrder(n) {
    let arr = [];
    arr.push(n.toString().split('').sort((a, b) => b - a).join(''));
    return parseInt(arr[0])
}

descendingOrder(21445); // 54421