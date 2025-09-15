function solution(book_time) {
    var answer = 0;
    // 최근 퇴실 시간을 기록한 각 방 배열
    const rooms = [];
    
    // 시작 시각 빠른 순으로 정렬
    book_time.sort();
    
    // 예약 순서대로 방 하나씩 배정
    for(let book of book_time) {
        const [start, end] = book;
        if(rooms.length === 0) {
            rooms.push(book[1]);
            continue;
        }
        const startTime = +start.split(":")[0] * 60 + +start.split(":")[1];
        // 방의 마지막 예약 종료 시간보다 시작 시간이 10분 이상 늦을 경우 배정 
        let i = 0;
        while(true) {
            const lastTime = +rooms[i].split(":")[0] * 60 + +rooms[i].split(":")[1];
            if(lastTime + 10 <= startTime)  {
                rooms[i] = end;
                break;
            }
            if(i === rooms.length - 1) {
                rooms[i + 1] = end;
                break;
            }            
            i++;
        }
    }
    
    return rooms.length;
}