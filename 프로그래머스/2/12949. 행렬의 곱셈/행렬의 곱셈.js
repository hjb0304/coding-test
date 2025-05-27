function solution(arr1, arr2) {
    const row = arr1.length;
    const col = arr2[0].length;
    
    // arr1의 행 수 * arr2의 열 수
    // 2차원 배열 초기화 주의!
    var answer = Array.from({length: row}, () => Array(col).fill(0));
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            // 각각 곱해서 합 구하기
            let result = 0;
            for(let k = 0; k < arr2.length; k++) {
                result += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = result;
        }
    }
    
    return answer;

}