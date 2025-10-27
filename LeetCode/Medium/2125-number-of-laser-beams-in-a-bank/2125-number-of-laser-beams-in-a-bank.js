/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let count = 0;

    // 시작 행의 1의 개수 세기
    for (let start = 0; start < bank.length; start++) {
        const startCount = [...bank[start]].filter(item => item === '1').length;
        if (startCount === 0) continue;
        // 도착 행의 1의 개수 세서 시작 행의 개수랑 곱하기
        for (let end = start + 1; end < bank.length; end++) {
            const endCount = [...bank[end]].filter(item => item === '1').length;
            if (endCount === 0) continue;
            count += startCount * endCount;
            break;
        }
    }

    return count;
};