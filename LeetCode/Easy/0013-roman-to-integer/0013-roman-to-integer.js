/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const str = String(s);
    let answer = 0;

    const dic = {
        I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000
    }

    for(let i = 0; i < s.length; i++) {
        const double = s.slice(i, i + 2);
        // 두개 붙인 수가 사전에 있으면 사용
        if(dic[double]) {
            answer += dic[double];
            i++;
        } else answer += dic[s[i]];
    }

    return answer;
};