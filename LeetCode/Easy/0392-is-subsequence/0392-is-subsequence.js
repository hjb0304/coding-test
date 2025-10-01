/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length) {
        console.log(sPointer, tPointer)
        if(tPointer === t.length) return false;
        // s의 i번째 글자를 발견할 때까지 t 인덱스 이동
        while (s[sPointer] !== t[tPointer] && tPointer < t.length) tPointer++;
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
            tPointer++;
        } else return false;
    }

    return true;
};