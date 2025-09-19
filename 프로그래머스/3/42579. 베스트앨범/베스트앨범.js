function solution(genres, plays) {
    let answer = [];
    const obj = {};
    // 'classic': {songs: [0, 2], total: 650}
    
    // 노래 장르별 노래의 고유 번호, 총 재생횟수 객체에 넣기
    genres.forEach((genre, i) => {
        if(obj[genre]) {
            obj[genre].songs.push(i);
            obj[genre].total += plays[i];
        } else {
            // 장르의 객체가 생성되지 않은 경우 정의해줘야 함
            obj[genre] = {songs: [i], total: plays[i]};
        }
    });
    
    // 많이 재생된 장르 순서대로 정렬    
    const sortedGenres = [...new Set(genres)];
    sortedGenres.sort((a, b) => obj[b].total - obj[a].total);
    
    for(genre of sortedGenres) {
        // 장르별 노래 많이 재생된 순서대로 정렬 (이미 고유 번호 낮은 순서대로 정렬되어 있음)
        let sortedSongs = obj[genre].songs;
        sortedSongs.sort((a, b) => plays[b] - plays[a]);
        // 2개 선택
        sortedSongs = sortedSongs.slice(0, 2);
        
        answer.push(...sortedSongs);
    }
    
    return answer;
}