/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let count = 0;
    let emptyBottles = 0;

    while (numBottles > 0 || emptyBottles >= numExchange) {
        console.log(numBottles, emptyBottles, numExchange, count)
        // 모든 물을 마시고 빈 병으로 바꾸기
        if (numBottles) {
            count += numBottles;
            emptyBottles += numBottles;
            numBottles = 0;
        } else {
            // numExchange개의 빈 병만 1개의 물병으로 바꾸고 numExchange 증가
            emptyBottles -= numExchange;
            numExchange++;
            numBottles++;
        }
    }

    return count;
};