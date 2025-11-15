/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    if(!prerequisites.length) return true;
    const graph = {};

    for (let [course, pre] of prerequisites) {
        if(graph[course]) {
            graph[course].push(pre);
        } else graph[course] = [pre];
    }

    // 현재 탐색중인 노드 방문 상태
    const visiting = Array(numCourses).fill(false);
    // 탐색 끝난 노드 방문 상태
    const visited = Array(numCourses).fill(false);

    function dfs(current) {
        // 탐색중인 노드에 다시 방문하면 사이클 존재함(수강 불가능)
        if(visiting[current]) return false;
        // 탐색 끝난 노드 방문 시 패스
        if(visited[current]) return true;

        visiting[current] = true;

        for(let next of graph[current] || []) {
            // precourse중 하나라도 사이클 존재하면 수강 불가능 
            if(!dfs(next)) return false;
        }

        visiting[current] = false;
        visited[current] = true;

        return true;
    }

    for (let [course, pre] of prerequisites) {
        if(!dfs(course)) return false;
    }

    return true;
};