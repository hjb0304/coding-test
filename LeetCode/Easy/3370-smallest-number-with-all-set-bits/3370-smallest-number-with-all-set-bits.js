/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let x = n;

    while (true) {
        if (x.toString(2).includes('0')) {
            x++;
        } else return x;
    }
};