function solution(elements) {
    var answer = [];
    let length = elements.length;
    
    // 각 숫자로 시작하는 연속 부분 수열의 합 구하기
    elements.forEach((element, i) => {
        let sum = element;
        answer.push(sum);
        // 숫자의 총 개수만큼 누적해서 더함 => 합을 push
        for(let j = i + 1; j < i + length; j++) {
            // 첫 요소로 이어서 더할 경우 index 수정
            sum += elements[j] || elements[j - length];
            answer.push(sum);
        }
    });
    
    // 중복 제거
    return [...new Set(answer)].length;
}