function solution(n, t, m, p) {
    var answer = '';
    const arr = [];
    
    let i = 0;
    while(arr.length < t * m) {
        // n진수로 변환
        let num = i.toString(n).toUpperCase();
        // 1의 자리로 쪼개기
        const split = num.split(""); 
        // 배열에 넣기
        let j = 0;
        while(arr.length < t * m && j < split.length) {
            arr.push(split[j]);
            j++;
        }
        i++;
    }
    
    // 튜브의 순서만 골라내기
    for(let i = p - 1; i < arr.length; i += m) {
        answer += arr[i];
    }
    
    return answer;
}