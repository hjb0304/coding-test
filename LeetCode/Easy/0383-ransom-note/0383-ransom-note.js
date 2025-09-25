/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    // magazine의 문자 개수 Map에 저장
    for(let char of [...magazine]) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // ransomNote를 순회하며 Map에서 문자 하나씩 제거
    for(let char of [...ransomNote]) {
        // Map에 없으면 false 반환
        if(!map.has(char)) return false;
        map.set(char, map.get(char) - 1);
        if(map.get(char) === 0) map.delete(char);
    }

    return true;
};