/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
    const map = new Map();
    let max = 0;

    for(let num of nums) {
        // 음수도 양수 나머지가 나오게 계산
        const mod = ((num % value) + value) % value; 
        map.set(mod, (map.get(mod) || 0) + 1);
    }

    while(true) {
        if(map.has(max)) {
            map.set(max, map.get(max) - 1);
            if(map.get(max) === 0) map.delete(max);
            max++;
        } else {
            return max;
        }
    }

    return max;
};