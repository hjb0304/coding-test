function solution(people, limit) {
    var answer = 0;
    
    // 사람들 배열을 몸무게가 큰 순으로 정렬
    people.sort((a, b) => b - a);
    
    // 남아있는 가장 몸무게가 적은 사람과 같이 탈 수 있다면 같이 타는 사람 제거 후 보트 개수 증가
    // 혼자 타야 한다면 보트 개수만 증가
    people.forEach((e) => {
        if(e + people[people.length - 1] <= limit) {
            people.pop();
        }
        answer++;
    })
    
    return answer;
}