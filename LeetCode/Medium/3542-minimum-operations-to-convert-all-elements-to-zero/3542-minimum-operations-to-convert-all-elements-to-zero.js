/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const stack = [];
    let count = 0;

    for (let num of nums) {
        if (num === 0) {
            continue;
        }

        // 마지막 숫자보다 작으면 하나씩 빼기 (같은 숫자 있는지 확인)
        while (stack.length && num < stack[stack.length - 1]) {
            stack.pop();
        }

        // 마지막 숫자보다 크면 현재 숫자로 다시 시작
        if (!stack.length || num > stack[stack.length - 1]) {
            count++;
            stack.push(num);
        }
    }

    return count;
};