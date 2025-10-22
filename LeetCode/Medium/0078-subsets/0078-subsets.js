/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [];

    function dfs(idx, arr) {
        answer.push(arr);
        if(arr.length === nums.length) return;

        for(let i = idx; i < nums.length; i++) {
            const num = nums[i];
            dfs(i + 1, [...arr, num])
        }
    }

    dfs(0, []);

    return answer;
};