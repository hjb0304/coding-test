function solution(prices) {
    // var answer = [];
    
    // 스택 풀이
    let stack = [];
    let answer = Array(prices.length).fill(0);
    
    for(let i = 0; i < prices.length; i++) {
        // 현재 주식 가격이 n초 전 가격보다 적을 때
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            // 그 간격만큼이 가격이 유지된 초수
            let last = stack.pop();
            answer[last] = i-last;
        }
        stack.push(i);
    }
    
    // 가격이 계속 유지되었던 주식들
    while(stack.length) {
        let last = stack.pop();
        // 생성된 순간부터 끝날 때까지 유지
        answer[last] = prices.length - last - 1;
    }
    
    // for(let i = 0; i < prices.length; i++) {
    //     let count = 0;
    //     for(let j = i + 1; j < prices.length; j++) {
    //         // 가격이 떨어졌다면 그전까진 유지했으므로 count 증가 후 탈출
    //         if(prices[j] < prices[i]) {
    //             count++;
    //             break;
    //             // 떨어지지 않았다면 count 증가
    //         } else {
    //             count++;
    //         }
    //     }
    //     answer.push(count)
    // }
    
    return answer;
}