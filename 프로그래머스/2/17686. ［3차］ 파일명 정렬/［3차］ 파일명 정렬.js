function solution(files) {
    var answer = []; 
        
    // 파일명에서 HEAD, NUMBER 찾는 함수
    function findHeadNumber(file) {
        let arr = ["", ""];
        for(let i = 0; i < file.length; i++) {
            // 숫자일 경우(공백이 아님) number에 추가
            if(!isNaN(file[i]) && file[i] !== " ") {arr[1] += file[i];}
            // 문자일 경우 head에 추가(대문자로 변환)
                else {
                // 문자일 경우 number에 요소가 있으면 반복문 탈출
                    if(arr[1].length) {break;}
                    arr[0] += file[i].toUpperCase();
                }           
            
        }
        return arr;
    }       
    
    // HEAD 기준으로 정렬 후 같으면 NUMBER 기준으로 정렬
    files.sort((a, b) => (findHeadNumber(a)[0].localeCompare(findHeadNumber(b)[0])) || (+findHeadNumber(a)[1] - +findHeadNumber(b)[1]));
    
    return files;
}