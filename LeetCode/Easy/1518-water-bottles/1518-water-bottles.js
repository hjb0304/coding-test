/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = numBottles;

    // 병을 바꿀 수 없을 때까지 반복
    while(numBottles >= numExchange) {
        // 바꾼 병의 수
        const changed = Math.floor(numBottles / numExchange);
        numBottles = numBottles - changed * numExchange + changed;
        count += changed;
    }

    return count; + numBottles;
};