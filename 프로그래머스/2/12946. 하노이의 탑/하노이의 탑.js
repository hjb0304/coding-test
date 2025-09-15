function solution(n) {
    var answer = [];
    
    // k개의 원판을 끝으로 옮김
    function hanoi(k, from, to, aux) {
        if(k === 0) return;
        // k-1개의 원판을 중간으로 옮김(재귀)
        hanoi(k - 1, from, aux, to);
        // k번째 원판을 끝으로 옮김
        answer.push([from, to]);
        // k-1개의 원판을 끝으로 옮김(재귀)
        hanoi(k - 1, aux, to, from);
    }
    
    hanoi(n, 1, 3, 2);
    return answer;
}