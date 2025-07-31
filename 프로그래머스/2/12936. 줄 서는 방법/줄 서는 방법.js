function solution(n, k) {
    var answer = [];
    // 전체 숫자 배열
    const nums = Array.from({length: n}, (_, i) => i + 1);
    
    // 팩토리얼 구하기
    let fac = [1];
    for(let i = 1; i <= n; i++) {
        fac[i] = fac[i - 1] * i;
    }
    
    // 인덱스 0으로 변경
    k--;
    
    // 앞자리부터 순서대로 넣기
    for(let i = n; i > 0; i--) {
        // 앞자리가 정해지면 그뒤 숫자들의 경우의 수
        const f = fac[i - 1];
        // k가 속한 세트 인덱스 구하기
        const idx = Math.floor(k / f);
        // 남은 숫자들 중 인덱스에 맞는 숫자 줄에 추가 후 삭제
        answer.push(nums[idx]);
        nums.splice(idx, 1);
        // 나머지 업데이트
        k %= f;
    }
    
    return answer;
}