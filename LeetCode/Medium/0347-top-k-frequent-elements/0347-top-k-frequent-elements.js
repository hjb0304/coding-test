/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();
    let max = 0;

    for(let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        max = Math.max(count.get(num), max);
    }

    return [...count.keys()].sort((a, b) => count.get(b) - count.get(a)).slice(0, k);
};