function solution(p) {
    // 올바른 문자열 여부 반환
    function isCorrect(str) {
        let sum = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i] === '(') {
                sum++;
            } else {sum--;}
            if(sum < 0) return false;
        }
        if(sum === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    if(isCorrect(p)) return p;
    
    // u가 올바른 문자열이 아닐 경우
    function makeUCorrect(u, v) {
        let newStr = '(' + makeVCorrect(u, v) + ')';
        let newU = u.slice(1, u.length - 1);
        return newStr + [...newU].map(i => i === '(' ? ')' : '(').join("");
    }
    
    // v가 올바른 문자열이 아닐 경우
    function makeVCorrect(u, v) {
        // 빈 문자열일 경우
        if(v === '') return '';
    
        // 균형잡힌 문자열로 분리
        let newU = '';
        let newV = '';
    
        let sum = 0;
        for(let i = 0; i < v.length; i++) {
            if(v[i] === '(') {
                sum++;
            } else {sum--;} 
            if(sum === 0) {
                newU = v.slice(0, i + 1);
                newV = v.slice(i + 1);
                break;
            }
        }
        console.log(newU, newV)
        // u가 올바른 문자열일 경우
        if(isCorrect(newU)) {
            return newU + makeVCorrect(newU, newV);
        } else {
            // u가 올바른 문자열이 아닐 경우
            return makeUCorrect(newU, newV);
        }        
    }
    
    return makeVCorrect('', p);
}