function solution(orders, course) {
    var answer = [];
    const object = {};
    
    // 개수별로 조합 구하는 함수
    function getCombination(arr, count) {
        const result = [];
        // 1개 뽑을 때 각 숫자를 배열에 담아 반환
        if(count === 1) return arr.map(i => [i]);
        
        arr.forEach((num, idx) => {
            // 정한 숫자 외 나머지 숫자의 배열
            const rest = arr.slice(idx + 1);
            // 나머지 숫자의 배열의 조합 구하기
            const combination = getCombination(rest, count - 1);
            // 정한 숫자와 나머지 조합 결합
            const unit = combination.map(com => [num, ...com]);
            result.push(...unit);
        });
            return result;
    }    
    
    // 주문별/코스 가짓수별 경우의 수 구하기
    for(let num of course) {
        object[num] = {};
        for(let order of orders) {
            const combinations = getCombination([...order].sort(), num);
            // 객체에 넣기(가짓수, 주문 수)            
            for(let com of combinations) {
                object[num][com.join('')] = (object[num][com.join('')] ?? 0) + 1;
            }
        }
    }
    
    // 가짓수별로 가장 많이 나온 조합 구하기
    for(let num in object) {
        let max = 0;
        // 가장 많이 나온 수 구하기
        for(let com in object[num]) {
            if(object[num][com] >= 2 && object[num][com] >= max) {
                max = object[num][com];
            }
        }
        // 그 수만큼 나온 조합 구하기
        for(let com in object[num]) {
            if(object[num][com] === max) {
                answer.push(com);
            }
        }
    }
    
    return answer.sort();
}