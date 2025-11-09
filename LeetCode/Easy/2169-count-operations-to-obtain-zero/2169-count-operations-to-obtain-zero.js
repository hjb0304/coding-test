/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let answer = 0;

    while(num1 && num2) {
        if(num1 >= num2) {
            num1 -= num2;
        } else num2 -= num1;
        answer++;
    }

    return answer;
};