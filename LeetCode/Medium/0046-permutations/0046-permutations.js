/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const visited = new Set();
    const answer = [];

    function dfs(arr) {
        // nums의 길이만큼 배열이 완성되면 push
        if (arr.length === nums.length) {
            answer.push(arr);
            return;
        }

        for (let num of nums) {
            if (!visited.has(num)) {
                visited.add(num);
                dfs([...arr, num]);
                visited.delete(num);
            }
        }
    }

    dfs([]);

    return answer;
};