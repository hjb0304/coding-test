/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const map = new Map();
    const answer = [];

    // 각 알파벳마다 나눗셈 결과 저장
    for (let i = 0; i < equations.length; i++) {
        const [cha1, cha2] = equations[i];
        if (!map.has(cha1)) map.set(cha1, new Map());
        map.get(cha1).set(cha2, values[i]);
        if (!map.has(cha2)) map.set(cha2, new Map());
        map.get(cha2).set(cha1, 1 / values[i]);
    }
    
    // 나눗셈 결과 찾기
    function dfs(start, end, result, visited) {
        visited.add(start);
        if (map.get(start).has(end)) return result * map.get(start).get(end);

        for (let [cha, val] of map.get(start)) {
            if (!visited.has(cha)) {
                const next = dfs(cha, end, result * val, visited);
                if(next !== -1) return next;
            }
        }
        // 모든 탐색 후 답이 없으면 -1
        return -1;
    }
   
    for (let query of queries) {
        const [cha1, cha2] = query;
        const visited = new Set();

        if (map.has(cha1) && map.has(cha2)) {
            if (cha2 === cha1) { answer.push(1); }
            else if (map.get(cha1).has(cha2)) {
                answer.push(map.get(cha1).get(cha2));
            }
            // map에 나눗셈 결과가 없으면 dfs 시작
            else answer.push(dfs(cha1, cha2, 1, visited));
        }
        else answer.push(-1);
    }

    return answer;
};
