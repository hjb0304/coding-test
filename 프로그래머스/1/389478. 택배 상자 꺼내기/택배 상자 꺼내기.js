function solution(n, w, num) {
    var answer = 0;
    let floor = parseInt(n / w);
    // 층수만큼 2차원 배열 생성
    const arr = Array.from({length: floor + 1}, () => Array(w).fill(0));
    let box = 1;
    let idx = 0;
    
    // 1부터 n까지의 숫자를 차례대로 2차원 배열의 값에 할당
    outer: for(let i = 0; i < floor + 1; i++) {
        // 각 층마다 계산
        for(let j = 0; j < w; j++) {
            // 층수가 홀수일 경우 역순서대로 할당 
            if(i % 2) {
                arr[i][w - j - 1] = box;
            }
            // 층수가 짝수일 경우 순서대로 할당
            else {
                arr[i][j] = box;
            }
            // 손님의 택배 번호의 인덱스 구하기
            if(box === num) {
                idx = arr[i].indexOf(num)
            }
            box++;
            // 택배 번호가 전체 택배 수보다 크면 종료
            if(box > n) {
                break outer;
            }
        }
    }
    
    // 각 층의 idx번째 택배 번호가 num보다 크거나 같으면 꺼냄
    arr.forEach(i => {
        if(i[idx] >= num) {
            answer++;
        }
    })
    
    return answer;
}