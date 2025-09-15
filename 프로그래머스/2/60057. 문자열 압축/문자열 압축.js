function solution(s) {
    let answer = s.length;
    
    for(let i = 1; i <= Math.floor(s.length / 2); i++) {
        let prev = s.slice(0, i);
        let compressed = '';
        let count = 1;
        
        // 문자열 끝까지 i개씩 잘라서 비교
        for(let j = i; j < s.length; j += i) {
            const current = s.slice(j, j + i);
            // 직전에 자른 문자열과 같으면 count 증가
            if(current === prev) {
                count++;
                // 다르면 압축 문자열에 기록, 비교 문자열 변경, count 초기화
            } else {
                // count가 1보다 크면 횟수 기록, 1이면 생략 (1ab = ab)
                compressed += (count > 1 ? count : '') + prev;
                prev = current;
                count = 1;
            }
        }
        // 기록되지 않은 마지막 세트 기록
        compressed += (count > 1 ? count : '') + prev;
        answer = Math.min(compressed.length, answer);
    }
    
    return answer;
}