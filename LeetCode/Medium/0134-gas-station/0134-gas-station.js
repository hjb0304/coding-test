/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    // 가스의 총합보다 비용의 총합이 크면 -1 반환
    if(gas.reduce((acc, cur) => acc + cur) < cost.reduce((acc, cur) => acc + cur)) return -1;

    let idx = 0;
    let sum = 0;

    for (let j = 0; j < gas.length; j++) {
        sum += gas[j];
        if (cost[j] <= sum) {
            sum -= cost[j];
        } else {
            // j에서 불가능해질 경우 sum 초기화, idx를 j+1부터 다시 시작 
            sum = 0;
            idx = j + 1;
        }
    }

    return idx;
};