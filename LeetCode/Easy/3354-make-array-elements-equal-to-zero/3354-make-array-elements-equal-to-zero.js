/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
    let count = 0;

    function isValid(cur, dir, arr) {
        while (cur >= 0 && cur < nums.length) {
            if (arr[cur] === 0) {
                cur += dir;
            } else {
                arr[cur]--;
                dir *= -1;
                cur += dir;
            }
        }
        return arr.every(num => num === 0);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            // 왼쪽으로 이동
            if(isValid(i, -1, [...nums])) count++;
            // 오른쪽으로 이동
            if(isValid(i, 1, [...nums])) count++;
        }
    }

    return count;
};