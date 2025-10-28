/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
    let count = 0;

    // function isValid(cur, dir, arr) {
    //     while (cur >= 0 && cur < nums.length) {
    //         if (arr[cur] === 0) {
    //             cur += dir;
    //         } else {
    //             arr[cur]--;
    //             dir *= -1;
    //             cur += dir;
    //         }
    //     }
    //     return arr.every(num => num === 0);
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         // 왼쪽으로 이동
    //         if(isValid(i, -1, [...nums])) count++;
    //         // 오른쪽으로 이동
    //         if(isValid(i, 1, [...nums])) count++;
    //     }
    // }

    let prefix = 0;
    let suffix = nums.reduce((acc, cur) => acc + cur);
console.log(suffix)
    for(let num of nums) {
        if(num === 0) {
            // num을 기준으로 왼쪽의 합과 오른쪽의 합이 같으면 양방향 둘다 가능
            if(prefix === suffix) {
                count += 2;
                // 합이 1 차이나면 한쪽 방향만 가능
            } else if(Math.abs(prefix - suffix) == 1) count++;
        }
        prefix += num;
        suffix -= num;
    }

    return count;
};