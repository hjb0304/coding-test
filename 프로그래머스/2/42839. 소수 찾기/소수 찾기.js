function solution(numbers) {
    var answer = 0;
    let arr = numbers.split("");
    const visit = Array(numbers.length).fill(false);
    const newNumbers = new Set();
    
    // 종이조각으로 숫자 만들기
    function dfs(number) {
        newNumbers.add(+number);
        
        arr.forEach((num, i) => {
            if(!visit[i]) {
                visit[i] = true;
                dfs(number + num);
                visit[i] = false;
            }
        });
    }
    
    arr.forEach((num, i) => {
        visit[i] = true;
        dfs(num, i);
        visit[i] = false;
    })
    
    // 소수 판별
    for(let newNumber of newNumbers) {
        if(newNumber === 0 || newNumber === 1) continue;
        let valid = true;
        for(let j = 2; j <= Math.sqrt(newNumber); j++) {
            if(newNumber % j === 0) {
                valid = false;
                break;}
        }
        if(valid) answer++;
    }
    
    return answer;
}