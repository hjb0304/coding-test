function solution(record) {
    var answer = [];
    // 유저 아이디와 이름을 저장하는 객체
    const obj = {};
    
    // 각 문자열의 유저 아이디와 이름 객체에 넣기(중복 시 덮어씌움)
    for(let str of record) {
        let [_, id, name] = str.split(" ");
        // 문자열에 name이 존재할 경우(Enter, Change)에 객체에 추가
        if(name) obj[id] = name;
    }
    
    // 출입 여부에 따라 메시지 추가
    for(let str of record) {
        let [action, id] = str.split(" ");
        if(action === "Enter") {
            answer.push(obj[id] + '님이 들어왔습니다.')
        } else if(action === "Leave") {
            answer.push(obj[id] + '님이 나갔습니다.')
        }
    }
    
    return answer;
}