function solution(citations) {
    // var answer = 0;
    
    // for(let i = citations.length; i > 0; i--) {
    //     let cited = 0;
    //     for(let count of citations) {
    //         if(count >= i) {
    //             cited++;
    //         }
    //     }
    //     if(cited >= i) {
    //         answer = i;
    //         break;
    //     }
    // }
    
//     let max = citations.length;
//     while(max > 0) {
//         const cited = citations.filter(citation => citation >= max).length;
//         if(cited >= max) return max;
//         max--;
//     }
    
//     return max;
    
    // 정렬 풀이
    let h = 0;
    
    // 내림차순 정렬
    citations.sort((a, b) => b - a);
    
    // h번째 논문의 인용 횟수가 논문 개수 이상이면 h 증가
    while(h + 1 <= citations[h]) {
        h++;
    }
    
    return h;
}