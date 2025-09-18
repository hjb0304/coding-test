function solution(people, limit) {
    let count = 0;
    
    // 몸무게 내림차순 정렬
    people.sort((a, b) => b - a);
    
    for(let person of people) {
        // 가장 무거운 사람 + 가장 가벼운 사람을 같이 태울 수 있다면
        if(person + people[people.length - 1] <= limit) {
            // 가벼운 사람 제거
            people.pop();
        } 
        // 보트 수 증가
        count++;
    }
    return count;
}