function solution(phone_book) {
    phone_book.sort();
    
    // for(let i = 1; i < phone_book.length; i++) {
    //     // 바로 전 순서의 전화번호가 접두사인지 확인
    //     if(phone_book[i].startsWith(phone_book[i - 1])) {
    //         return false;
    //     }
    // }
    
    // 해시 풀이
    const obj = new Set();
    
    for(let phone_number of phone_book) {
        for(let i = 0; i < phone_number.length; i++) {
            // 글자수별 접두사 만들기
            const prefix = phone_number.slice(0, i + 1);
            // set에 접두사가 있으면 false 반환
            if(obj.has(prefix)) return false;
        }
        
        // 전화번호를 set에 추가
        obj.add(phone_number);
    }
    
    return true;
}