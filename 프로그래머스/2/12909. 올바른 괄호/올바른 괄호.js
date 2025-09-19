function solution(s) {
    // var answer = 0;
    
//     // while문과 replaceAll()로 풀면 시간복잡도 두 배
//     for(let i = 0; i < s.length; i++) {
//         // 괄호 열면 +
//         if(s[i] === '(') {
//             answer++;
//             // 괄호 닫히면 -
//         } else {
//             answer--;
//         }
//         // 괄호 열기 전에 닫히면 음수가 됨
//         if(answer < 0) {
//             return false;
//         }
//     }

//     return answer === 0 ?  true : false;
    
    // 스택 풀이
    const arr = [...s];
    const stack = [arr.shift()];
    
    for(let i = 0; i < arr.length; i++) {
        // 괄호 꺼내기
        const current = arr[i];
        
        // 스택의 마지막 괄호와 짝 맞는지 체크
        if(stack[stack.length - 1] === '(' && current === ')') {
            // 맞으면 마지막 괄호 빼기
            stack.pop();
        } else {
            // 맞지 않으면 스택에 넣기
            stack.push(current);
        }
    }
    
    return stack.length ? false : true;  
}