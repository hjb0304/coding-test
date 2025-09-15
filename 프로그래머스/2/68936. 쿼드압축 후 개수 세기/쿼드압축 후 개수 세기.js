function solution(arr) {
    let zero = 0;
    let one = 0;
    
    function compression(arr) {
        // 모든 수가 0이라면
        if(arr.every(row => row.every(i => i === 0))) {
            zero++;
        } else
        // 모든 수가 1이라면
        if(arr.every(row => row.every(i => i === 1))) {
            one++;
        } else
        // 0과 1이 섞여있다면 4개로 나눠 재귀함수 호출
         {
            let first = [];
            let second = [];
            let third = [];
            let fourth = [];
             
            arr.forEach((row, rowIdx) => {
                    // 윗줄
                    if(rowIdx < row.length / 2) {
                        // 사각형1
                        first.push(row.slice(0, row.length / 2));
                        // 사각형2
                        second.push(row.slice(row.length / 2));
                    // 아랫줄
                    } else {
                        // 사각형3
                        third.push(row.slice(0, row.length / 2));
                        // 사각형4
                        fourth.push(row.slice(row.length / 2));
                    }
            });
             
             compression(first);
             compression(second);
             compression(third);
             compression(fourth);
        }
    }
    
    compression(arr);
    return [zero, one];
}