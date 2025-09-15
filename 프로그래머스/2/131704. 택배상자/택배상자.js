function solution(order) {
    const stack = [];
    let box = 1;
    let idx = 0;
    
    while(box <= order.length){
        // 보조 컨테이너로 상자 옮김
        stack.push(box);            
        // 보조 컨테이너 벨트로 옮긴 맨 앞 상자 검사
        // 맞으면 트럭에 싣기
        while(stack.length && order[idx] === stack[stack.length - 1]) {
            stack.pop();
            idx++;
            } 
        // 박스 번호 증가
            box++;        
        }
    
    return idx;
}