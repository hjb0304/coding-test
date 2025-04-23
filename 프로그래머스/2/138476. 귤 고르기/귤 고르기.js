function solution(k, tangerine) {
    let choose = 0;
    let count = 0;
    const obj = {};
    
    // 각 크기의 귤의 개수를 담은 객체
    for(let tan of tangerine) {
        // if(obj.hasOwnProperty(tan)) {
        //     obj[tan]++;
        // } else {
        //     obj[tan] = 1;
        // }
        obj[tan] = (obj[tan] || 0) + 1;
    }
    
    // 귤 개수 배열을 내림차순으로 정렬
    const arr = Object.values(obj).sort((a, b) => b - a);
    
    // 상자에 담은 귤이 k개가 될 때까지 담음
    for(tan of arr) {
        // 한 종류의 귤을 담을 때마다 종류의 수 증가
        count++;
        // 귤을 더한 총합이 k보다 작을 경우 그 크기의 귤 전체를 담음
        if(choose + tan < k) {
            choose += tan;
            // 총합이 k 이상일 경우 담기 중단
        } else {
            break;
        }
    }
    
    return count;
}