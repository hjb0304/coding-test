function solution(picks, minerals) {
    var answer = 0;
    const set = [];
    const fatigue = {diamond: {diamond: 1, iron: 1, stone: 1}, iron: {diamond: 5, iron: 1, stone: 1}, stone: {diamond: 25, iron: 5, stone: 1}};
    const picksCount = picks.reduce((acc, cur) => acc + cur); 
    
    // 광석 목록을 5개씩 나누기
    minerals.forEach((mineral, i) => {
        if(((i + 1) % 5 === 0 || i === minerals.length - 1) && set.length < picksCount) {
            set.push(minerals.slice(set.length * 5 , i + 1));
        }
    });
    
    // 피로도 많이 소모되는 순서(내림차순)로 정렬: 돌 곡괭이 기준
    set.sort((a, b) => {
        let sumA = a.reduce((acc, cur) => acc + fatigue.stone[cur], 0);
        let sumB = b.reduce((acc, cur) => acc + fatigue.stone[cur], 0);
        return sumB - sumA;
    });
    
    // 정렬된 그룹 목록을 차례로 다이아-철-돌 순서로 캐기
    for(let item of set) {
        // 곡괭이 선택
        let pick = '';
        if(picks[0]) {
            pick = 'diamond';
            picks[0]--;
        } else if(picks[1]) {
            pick = 'iron';
            picks[1]--;
        } else if(picks[2]) {
            pick = 'stone';
            picks[2]--;
        }
        
        for(let mineral of item) {
            answer += fatigue[pick][mineral];
        }
    }
    
    return answer;
}