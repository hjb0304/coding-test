function solution(s) {
    // 짝 없는 알파벳을 넣는 배열
    const arr = [];
    
    for(let i = 0; i < s.length; i++) {
        // 배열의 마지막 알파벳과 i번째 알파벳이 짝지어질 경우
        if(arr[arr.length - 1] === s[i]) {
            // 배열의 마지막 알파벳 제거
            arr.pop();
            continue;
        }
        // 배열의 i번째, i+1번째 알파벳이 다를 경우
        if(s[i] !== s[i + 1]) {
            // 배열에 짝 없는 알파벳 추가
            arr.push(s[i])
        }
        // 배열의 i번째, i+1번째 알파벳이 같을 경우
        if(s[i] === s[i + 1]) {
            // 다음 반복 건너뜀
            i++;
        }
    }
    
    return arr.length === 0 ? 1 : 0;
    // return arr;
}