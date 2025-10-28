/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let current = prices[0];
    let profit = 0;

    for (let price of prices) {
        if (price > current) {
            profit += price - current;
        }
        current = price;
    }

    return profit;
};