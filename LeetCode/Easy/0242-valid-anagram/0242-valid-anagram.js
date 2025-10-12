/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 정렬 풀이
    // return [...s].sort().join('') === [...t].sort().join('');

    // 해시 풀이
    const count = {};

    for(let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }

    // 모든 값이 0이어야 아나그램
    return Object.values(count).every(item => item === 0);
};