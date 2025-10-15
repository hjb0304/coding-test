/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const letters = { 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] };
    const answer = [];

    function dfs(com) {
        // 조합이 완성되면 answer에 넣고 함수 종료
        if (com.length === digits.length) { answer.push(com); return; }

        for (letter of letters[digits[com.length]]) {
            dfs(com + letter);
        }

    }

    dfs('');

    return answer;
};