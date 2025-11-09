/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const max = Math.max(...strs.map(str => str.length));

    let i = 0;
    // 모든 단어의 i번째 문자가 같으면 증가
    while(strs.every(str => str[i] === strs[0][i]) && i < max) {
        i++;
    }

    return i === 0 ? '' : strs[0].slice(0, i);
};