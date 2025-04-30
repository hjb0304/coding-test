function solution(s) {
    var answer = 0;
    let arr = [...s];
    
    for(let i = 0; i < arr.length; i++) {
        // 맨 앞글자 하나씩 뒤로 보냄
        if(i > 0) {
        arr.push(arr.shift());}
        
        // 올바른 괄호 문자열인지 판별
        let valid = true;
        // 대, 중, 소괄호
        let big = 0;
        let mid = 0;
        let sm = 0;
        
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === '[') {
                big++;
            } else if(arr[j] === ']') {
                if(arr[j - 1] === '(' || arr[j - 1] === '{') {
                    valid = false;
                    break;
                }
                big--;
            } else if(arr[j] === '{') {
                mid++;
            } else if(arr[j] === '}') {
                    if(arr[j - 1] === '(' || arr[j - 1] === '[') {
                    valid = false;
                    break;
                }
                mid--;
            } else if(arr[j] === '(') {
                sm++;
            } else if(arr[j] === ')') {
                    if(arr[j - 1] === '[' || arr[j - 1] === '{') {
                    valid = false;
                    break;
                }
                sm--;
            }
            
            // 닫는 괄호값이 음수가 되면 잘못된 괄호 문자열 
            if(big < 0 || mid < 0 || sm < 0) {
                valid = false;
                break;
            }
        }
        // 닫는 괄호값이 음수가 되지 않았고 괄호값의 합이 모두 0이면 올바른 괄호 문자열
        if (valid && big === 0 && mid === 0 && sm === 0) answer++;
    }
    
    return answer;
}