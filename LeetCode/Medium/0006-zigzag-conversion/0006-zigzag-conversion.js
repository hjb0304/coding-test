/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arr = Array.from({length: numRows}, () => [])
    let idx = 0;
    let dir = 1;   

    // numRows개의 배열에 순서대로 push
    for(let ch of s) {
        arr[idx].push(ch);
        // 마지막 줄에 다다르면 방향 위로 바꿈
        if(idx === numRows - 1) {
            dir = -1;
            // 맨 윗줄에 다다르면 방향 아래로 바꿈
        } else if(idx === 0) dir = 1;
        idx += dir;
    }

    return arr.map(arr => arr.join('')).join('');
};