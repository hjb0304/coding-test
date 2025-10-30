/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
    let count = 0;

    for (let i = 0; i < target.length; i++) {
        if (i === 0) {
            count += target[i];
            continue;
        }
        // 이전 target 요소보다 클 때만 부족한 만큼 증가
        if (target[i - 1] < target[i]) count += target[i] - target[i - 1];
    }

    return count;
};