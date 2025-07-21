function solution(n) {
    var answer = '';
    
    // 진법 변환: n을 3으로 나눈 나머지를 끝에서부터 붙이고 몫을 나누는 것을 반복
    while(n > 0) {
        let remain = n % 3;
        n = Math.floor(n / 3);
        // 나머지가 0이면 1,2,4에 0이 없으므로 몫을 하나 빼와서 더함
        if(remain === 0) {
            remain += 3;
            n--;
        }
        // 나머지 붙이기(3이면 4로 치환)
        answer = (remain === 3 ? '4' : remain.toString()) + answer;
    }
    
    return answer;
}