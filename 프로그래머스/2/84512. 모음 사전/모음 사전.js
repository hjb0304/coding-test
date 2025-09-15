function solution(word) {
    let count = 0;
    var answer = 0;
    const alphabet = ["A", "E", "I", "O", "U"];
    let current = "";
    let found = false;
    
    function makeWord(current) {
        if(found) {
            return;
        }
        
        // 현재 단어가 word와 같을 시 순서 반환
        if(current === word) {
            answer = count;
            found = true;
            return;
        }
        
        // 현재 단어 길이가 <5일 때 새로운 단어 생성
        if(current.length < 5) {
        for(let al of alphabet) {
            count++;
            makeWord(current + al);
        }}
    }
     
    makeWord(current);
    
            return answer;
    
}