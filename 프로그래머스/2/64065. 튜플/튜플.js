function solution(s) {
    var answer = [];
    const set = new Set();
    
    // 2차원 배열로 변환
    s = s.slice(2, -2).replaceAll('},{', ' ').split(" ").map(i => i.split(",").map(Number));
    
    // 집합 순서대로 정렬
    s.sort((a, b) => a.length - b.length);
    
    for(let arr of s) {
        // 튜플에 포함되지 않은 숫자면 추가(includes() 대신 set 사용)
        for(let num of arr) {
            if (!set.has(num)) {
                set.add(num)
                answer.push(num);
            }}
    }
    
    return answer;
}