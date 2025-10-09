/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const dic = {};
    const arr = s.split(' ');

    // 단어와 알파벳 개수가 다르면 false   
    if(pattern.length !== arr.length) return false;

    for(let i = 0; i < pattern.length; i++) {
        const cha = pattern[i];
        // 사전의 key나 value가 이미 있고 현재 단어와 다르면 false
        if((dic[cha] || Object.values(dic).includes(arr[i])) && arr[i] !== dic[cha]) return false;
        // 사전에 없거나 현재 단어와 같으면 사전에 추가
        dic[cha] = arr[i];
    }

    return true;
};