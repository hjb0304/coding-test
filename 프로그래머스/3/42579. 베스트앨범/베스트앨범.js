function solution(genres, plays) {
    var answer = [];
    const obj = {};
    // {'classic': {'music': [1, 2, 3], 'play': 0}}
    
    // 장르별 노래 분류
    genres.forEach((genre, i) => {
        if(obj[genre]) {
            obj[genre].music.push(i)
            obj[genre].play += plays[i];
        } else {
            obj[genre] = {};
            obj[genre].music = [i];
            obj[genre].play = plays[i];
        }
    });
    
    // 많이 재생된 장르순으로 정렬
    const set = [...new Set(genres)];
    set.sort((a, b) => obj[b].play - obj[a].play);    
    
    // 많이 재생된 노래순으로 정렬해서 2개 선택
    for(let genre of set) {
        const sorted = obj[genre].music.sort((a, b) => plays[b] - plays[a]).slice(0, 2);
        answer.push(...sorted);
    }
    
    return answer;
}