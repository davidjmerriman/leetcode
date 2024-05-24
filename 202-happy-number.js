/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let i = n;
    let results = [];
    while (!results.includes(i)) {
        results.push(i);
        i = (""+i).split("").reduce((a, c) => a + parseInt(c) * parseInt(c), 0);
        if (i == 1) return true;
    }
    return false;
}

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
