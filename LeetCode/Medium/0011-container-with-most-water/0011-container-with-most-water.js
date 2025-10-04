/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    // 양 끝에서 시작
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(area, max);

        // 왼,오른쪽 중 작은 쪽을 이동
        if(height[left] < height[right]) {
            left++;
        } else right--;
    }

    return max;
};