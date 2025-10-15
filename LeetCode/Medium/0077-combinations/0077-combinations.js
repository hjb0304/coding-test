/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const answer = [];

    function dfs(start, com) {
        // 조합이 k개가 되면 push
        if (com.length === k) {
            answer.push([...com]);
            return;
        }
        // 1부터 n으로 시작하는 조합 만들기 (1씩 증가)
        for (let i = start; i <= n; i++) {
            com.push(i);
            dfs(i + 1, com);
            com.pop();
        }
    }


    dfs(1, []);


    return answer;
};