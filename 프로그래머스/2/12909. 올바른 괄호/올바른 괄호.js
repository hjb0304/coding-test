function solution(s) {
    var answer = 0;
    
    // while문과 replaceAll()로 풀면 시간복잡도 두 배
    for(let i = 0; i < s.length; i++) {
        // 괄호 열면 +
        if(s[i] === '(') {
            answer++;
            // 괄호 닫히면 -
        } else {
            answer--;
        }
        // 괄호 열기 전에 닫히면 음수가 됨
        if(answer < 0) {
            return false;
        }
    }

    return answer === 0 ?  true : false;
}