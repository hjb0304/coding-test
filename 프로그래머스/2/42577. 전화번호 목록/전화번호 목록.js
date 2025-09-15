function solution(phone_book) {
    phone_book.sort();
    
    for(let i = 1; i < phone_book.length; i++) {
        // 바로 전 순서의 전화번호가 접두사인지 확인
        if(phone_book[i].startsWith(phone_book[i - 1])) {
            return false;
        }
    }
    
    return true;
}