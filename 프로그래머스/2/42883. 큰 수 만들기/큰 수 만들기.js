function solution(number, k) {
    let arr = [...number].map(Number);
    let length = arr.length - k;
    let stack = [];
    
    for (let num of arr) {
        // k가 0이 아니고 스택의 마지막 수가 현재 수보다 작으면 계속 삭제
        while(k > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }  
            stack.push(num);
    }
    
    // k만큼 제거하지 못한 경우(내림차순)
    stack = stack.slice(0, length);
    
    return stack.join("");
}