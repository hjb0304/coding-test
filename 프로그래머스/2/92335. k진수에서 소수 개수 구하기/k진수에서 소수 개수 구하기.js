function solution(n, k) {
    var answer = 0;
    // k진수로 변환 후 0이 아닌 수들 골라내기
    const arr = n.toString(k).split("0");
    
    for(let i = 0; i < arr.length; i++) {
        let num = +arr[i];
        let valid = num !== 0 && num !== 1 ? true : false;
        console.log(num, valid)
        // 소수인지 판별
        for(let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                valid = false;
                break };
        }
        if(valid) answer++;
    }
    
    return answer;
}