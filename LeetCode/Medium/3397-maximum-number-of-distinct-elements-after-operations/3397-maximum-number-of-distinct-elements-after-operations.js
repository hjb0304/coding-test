/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
    // 오름차순 정렬
    nums.sort((a, b) => a - b);

    // 만들 수 있는 가장 작은 숫자부터 시작
    let target = nums[0] - k;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // 목표 숫자가 현재 숫자+k보다 크면 패스
        if (nums[i] + k < target) continue;

        // 목표 숫자가 현재 숫자-k보다 작으면 목표 숫자 변경
        if (target < nums[i] - k) {
            target = nums[i] - k;
        }

        // 목표 숫자 기록
        nums[i] = target;
        target++;
        count++;
    }

    return count;
};