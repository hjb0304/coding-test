function solution(participant, completion) {
    let answer = '';
    
//     participant.sort();
//     completion.sort();
    
//     for(let i = 0; i < participant.length; i++) 
//     {if(participant[i] !== completion[i]) {
//         return participant[i]
//     }}
    
    // 해시 풀이
    const map = new Map();
    
    participant.forEach((name, i) => {
        map.set(name, (map.get(name) || 0) + 1);
        map.set(completion[i], (map.get(completion[i]) || 0) - 1);
    })
    
    for(let name of participant) {
        if(map.get(name) > 0) return name;
    }
}