function solution(numbers) {
    // 원소가 모두 0일 경우
    if(numbers.filter(i => i === 0).length === numbers.length) {
        return "0";
    }
    
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i].toString();
    }
    
    // 사전순으로 정렬    
    numbers.sort((a, b) => {
        // n과 nn일 경우 둘을 붙인 수를 자리 바꿔 비교
        if(a[0] === b[0]) {
            if(+(a + b) > +(b + a)) {
                return -1;
            } else return 1;
        }
        // 나머지는 내림차순
        return b.localeCompare(a)});
    
    
    return numbers.join("");
}