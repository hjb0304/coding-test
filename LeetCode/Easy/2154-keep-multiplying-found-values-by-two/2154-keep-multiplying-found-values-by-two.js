/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    while (true) {
        if (nums.includes(original)) {
            original *= 2;
        } else return original;
    }

};