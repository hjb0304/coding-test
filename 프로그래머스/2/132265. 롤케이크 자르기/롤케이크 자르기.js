function solution(topping) {
    var answer = 0;
    // 왼쪽/오른쪽의 토핑 종류와 수를 담을 Map (아이템 추가/삭제 성능 좋음)
    const left = new Map();
    const right = new Map();
    
    for(let i = 0; i < topping.length; i++) {
        let sort = topping[i];
        // 오른쪽 Map에 모든 토핑 종류와 수 넣기
        let count = right.get(sort);
        right.set(sort, count ? count + 1 : 1);
        
        // const left = topping.slice(0, i);
        // const right = topping.slice(i);
    }
    for(let i = 0; i < topping.length; i++) {
        let sort = topping[i];
        // 왼쪽 Map에 오른쪽 Map의 토핑 하나씩 옮기기
        let leftCount = left.get(sort);
        let rightCount = right.get(sort);
        
        left.set(sort, leftCount ? leftCount + 1 : 1);
        right.set(sort, rightCount > 1 ? rightCount - 1 : 0);
        
        // 오른쪽 Map의 i번째 토핑 개수가 0이 되면 제거
        if(right.get(sort) === 0) {
            right.delete(sort);
        }
    
        // 토핑 종류 개수가 같으면 방법 수 증가
        if(left.size === right.size) {
            answer++;
            }
    }
    
    return answer;
}