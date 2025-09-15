function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    timelogs.forEach((timelog, i) => {
        let today = startday;
        let setTime = schedules[i] + 10;
        if ((setTime + "").slice(-2) >= 60) {
            setTime = setTime + 40;
        }
            
        for(let j = 0; j < 7; j++) {
            if(today !== 6 && today !== 7 &&  today !== 13 && timelog[j] > setTime) {
                break;
            }
            today++;
        }
        if (today === startday + 7) {answer++;}
    })
    
    return answer;
}