function solution(n) {
    var answer = 0;
    let arr = [1, 2];
    
    if(n === 1) {
        return 1;
    }
    
    if(n === 2) {
        return 2;
    }
    
    // n칸에 도달하는 방법의 수: 피보나치 수열(n=3부터 시작)
    for(let i = 2; i < n; i++) {
        arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
    }
    
    // 배열의 맨 마지막 요소가 정답
    return arr[arr.length - 1] % 1234567;
}
