function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    const reportCount = {};
    
    // 신고당한 유저: 신고한 유저 형식의 객체(Set로 중복 제거)
    [...new Set(report)].forEach(i => {
        const [reportId, reportedId] = i.split(" ");
        if(reportCount.hasOwnProperty(reportedId)) {
        reportCount[reportedId].push(reportId);
        } else  {reportCount[reportedId] = [reportId];}
    })
    
    // 신고당한 유저 중 정지당한 유저 구하기
    const bannedId = Object.keys(reportCount).filter(key => reportCount[key].length >= k);
    
    // 정지당한 유저를 신고한 유저들의 신고 횟수 구하기
    bannedId.forEach(id => {
        reportCount[id].forEach(i => {
            let idx = id_list.indexOf(i);
            answer[idx]++;
        })
    })
    
    
    return answer;
}