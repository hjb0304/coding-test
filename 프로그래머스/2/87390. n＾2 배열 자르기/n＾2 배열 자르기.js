function solution(n, left, right) {
//     let arr = Array.from({length: n}, i => Array(n).fill(0));
    
//     // 1부터 n까지 반복
//     for(let i = 1; i <= Math.ceil(right / n); i++) {
//         // 1행부터 i행까지
//         for(let j = 0; j < i; j++) {
//             // 1열부터 i열까지
//             for(let k = 0; k < i; k++) {
//              // 빈칸일 때 i로 채움
//                 if(!arr[j][k]) {
//                 arr[j][k] = i;
//             }
//             }
//         }        
//     }
    
//         // 1차원 배열로 변환
//         let newArr = arr.reduce((acc, cur) => [...acc, ...cur]);
    
    
//     return newArr.slice(left, right + 1);
    
    let arr = [];
    
    // 규칙: 인덱스 값은 행(몫), 열(나머지) 중 큰 값+1
    for(let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col = i % n;
        arr.push(Math.max(row + 1, col + 1));
    }
    
    return arr;
}
