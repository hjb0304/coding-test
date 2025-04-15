function solution(s) {
    var answer = [0, 0];
    
    while(s > 1) {
        let orLength = s.length;
        s = s.replaceAll("0", "");
        answer[1] += orLength - s.length;
        s = s.length.toString(2);
        answer[0]++;
    }
    
    return answer;
}