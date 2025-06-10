function solution(n, t, m, p) {
    var answer = '';
    let line = '';
    
    let i = 0;
    while(line.length < t * m) {
        // n진수로 변환
        let num = i.toString(n).toUpperCase();
        // 전체 문자열에 넣기
        line += num;
        i++;
    }
    
    // 튜브의 순서만 골라내기
    let count = 0;
    for(let i = p - 1; i < line.length; i += m) {
        answer += line[i];
    }
    
    return answer.slice(0, t);
}