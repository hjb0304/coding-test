function solution(k, tangerine) {
    let choose = 0;
    let count = 0;
    const obj = {};
    
    // 각 크기의 귤의 개수를 담은 객체
    for(let tan of tangerine) {
        if(obj.hasOwnProperty(tan)) {
            obj[tan]++;
        } else {
            obj[tan] = 1;
        }
    }
    
    // 객체를 배열로 변환
    const arr = Object.entries(obj)
    
    // 배열을 귤 개수가 많은 순으로 정렬
    arr.sort((a, b) => b[1] - a[1]);
    
    // 상자에 담은 귤이 k개가 될 때까지 담음
    let i = 0;
    while(choose < k) {
        let num = arr[i][1];
        // 귤을 더한 총합이 k 이하일 경우 그 크기의 귤 전체를 담음
        if(choose + num <= k) {
            choose += num;
            // 총합이 k를 초과할 경우 총합은 바로 k가 됨
        } else {
            choose = k;
        }
        // 한 종류의 귤을 담을 때마다 종류의 수 증가
        count++;
        i++;
    }
    
    return count;
}