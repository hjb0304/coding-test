function solution(s) {
    // 문자열 변경을 위해 배열로 변환
    const arr = s.toLowerCase().split("")
    
    // 공백 뒤의 문자거나 문장의 첫글자일 때 대문자로 변환
    for(let i = 0; i < arr.length; i++) {
        if(arr[i - 1] === " " || i === 0) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    

    return arr.join("");
}