function solution(n) {
   let arr = new Array(n - 1).fill(true);
    arr = [false, false, ...arr]
    
    // 에라토스테네스의 체: 2부터 i의 제곱근까지만 나눈다.
    for(let i = 2; i <= Math.sqrt(n); i++) {
        // i가 소수일 경우
        if (arr[i]) {
            for(let j = i * i; j <= n; j += i) {
                // i의 배수는 소수가 아님
                arr[j] = false;
            }
        }
    }
    
    return arr.filter(i => i).length;
}