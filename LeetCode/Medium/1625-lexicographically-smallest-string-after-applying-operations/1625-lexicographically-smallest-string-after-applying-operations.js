/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
    let min = s;
    // 만들었던 숫자 모음
    const visited = new Set([...s]);

    function dfs(str) {
        if (str < min) min = str;

        let arr = [...str];
        // 홀수 인덱스에 a 더하기
        for (let i = 1; i < arr.length; i += 2) {
            arr[i] = String((Number(arr[i]) + a) % 10);
        }

        const newStr = arr.join('');

        if (!visited.has(newStr)) {
            visited.add(newStr)
            dfs(newStr);
        }

        // s 오른쪽으로 b번 회전
        str = str.slice(-b) + str.slice(0, -b);

        if (!visited.has(str)) {
            visited.add(str);
            dfs(str);
        }
    }

    dfs(s);

    return min;
};