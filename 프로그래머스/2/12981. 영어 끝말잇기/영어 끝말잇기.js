function solution(n, words) {
    let used = [];
    let round = 1;

    for(let i = 0; i < words.length; i++) {
        // 앞사람 단어의 마지막 문자로 시작하는지, 이전에 등장하지 않았던 단어인지, 한 글자가 아닌지 확인
        if(i === 0) {
            used.push(words[i]);
            continue;
        }
        let last = words[i - 1];
        if(last[last.length - 1] !== words[i][0] ||
          used.includes(words[i]) ||
          words[i].length === 1) {
            return [i % n + 1, round];
        }
        // 등장했던 단어 배열에 추가
        used.push(words[i]);
        // 라운드 증가
        if((i + 1) % n === 0) {
            round++;
        }
    }

    return [0, 0];
}