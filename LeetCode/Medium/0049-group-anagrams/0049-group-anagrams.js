/**
 * @param {string[]} strs
 * @return {string[][]}
 */    
var groupAnagrams = function(strs) {
    const map = new Map();   
    const answer = [];           
 
    for(let str of strs) {  
        // 각 문자열을 정렬
        const sorted = [...str].sort().join('');
        
        // 아나그램이 있으면 Map에 넣고 아니면 새 key 추가
        map.set(sorted, map.has(sorted) ? [...map.get(sorted), str] : [str]);
    }

    for(let value of map.values()) {
        answer.push(value);
    }

    return answer;
};