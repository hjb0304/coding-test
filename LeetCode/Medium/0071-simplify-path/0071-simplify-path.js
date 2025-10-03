/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const answer = [];
    const arr = path.split('/');

    if (path === '/') return "/";

    for (let str of arr) {
        // ..이면 마지막 요소 제거
        if (str === '..') {
            answer.pop();
            continue;
        }
        // .는 빼고 스택에 넣기
        if (str !== '.' && str !== '') answer.push(str);
    }
    console.log(answer)
    return !answer.length ? '/' : answer.map((str) => '/' + str).join('');
};