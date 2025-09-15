function solution(msg) {
    var answer = [];
    const dic = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26};
    
    while(msg.length > 0) {
        let word = msg[0] + (msg[1] ?? "");
        
        // 두글자를 붙인 단어가 사전에 있으면
            let i = 2;
        while(dic[word] && word.length < msg.length) {
            // 한글자 더 붙임
            word += msg[i];
            i++;
        }
        
        // 글자를 더 붙일 수 없고 단어가 사전에 있으면 색인 번호 출력하고 탈출
        if(word.length === msg.length && dic[word]) {
            answer.push(dic[msg]);
            break;
        }
        
        // 사전에 있는 단어 색인 번호 출력
        let originWord = word.slice(0, word.length - 1);
        answer.push(dic[originWord]);
        // 사전에 없는 단어 등록
        dic[word] = Object.keys(dic).length + 1;
        // 전체 단어에서 삭제
        msg = msg.slice(originWord.length);
    }
    
    return answer;
}