function solution(data, col, row_begin, row_end) {
    var answer = [];
    
    // col번째 컬럼의 값을 기준으로 오름차순 정렬
    // 값이 같으면 첫번째 컬럼의 값을 기준으로 내림차순 정렬
    data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);
    
    // S_i 누적
    data.forEach((tuple, i) => {
        if(i >= row_begin - 1 && i <= row_end - 1) {
            let sum = 0;
            tuple.forEach((col) => {
                sum += col % (i + 1);
            })
            answer.push(sum);
        }
    })
    
    let result = answer[0];
    for(let i = 1; i < answer.length; i++) {
        result = result^answer[i];
    }
    
    return result;
}