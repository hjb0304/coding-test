/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */  
var minSteps = function (s, t) {
    let answer = 0;

    // 각 문자열의 문자 개수가 담긴 Map 생성               
    const makeCount = (str) => {
        const count = new Map();

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            count.set(char, (count.get(char) || 0) + 1);
        }
        return count;
    }

    // const sCount = makeCount(s);
    const tCount = makeCount(t);

    // 두 Map의 각 문자 개수 비교
    // for (let [tKey, tValue] of tCount.entries()) {
    //     const sValue = sCount.get(tKey) || 0;

    //     // t의 문자 개수보다 s의 문자 개수가 많은 경우 바꿔야 함
    //     if (tValue > sValue) {
    //         answer += tValue - sValue;
    //     }
    // }

    // 다른 풀이: t의 문자 개수를 기록한 Map에서 s의 각 문자 빼기
    for(let char of [...s]) {
        // s의 문자가 t에 없는 경우 answer 증가 
        if(!tCount.has(char)) {
            answer++;
        } else {
            tCount.set(char, tCount.get(char) - 1);
            if(tCount.get(char) === 0) tCount.delete(char);
        }
    }

    return answer;
};