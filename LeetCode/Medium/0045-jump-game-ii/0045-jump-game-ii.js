/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let end = 0;
    let start = 0;
    let count = 0;

    // 도착점이 끝에 도달할 때까지
    while (end < nums.length - 1) {
        let far = 0;
        // 현재 점프할 수 있는 구간(start~end)에서 가장 멀리 점프할 수 있는 곳 찾기
        for (let i = start; i <= end; i++) {
            far = Math.max(far, i + nums[i]);
        }
        // 다음 점프구간 갱신
        start = end + 1;
        end = far;
        count++;
    }

    return count;
};