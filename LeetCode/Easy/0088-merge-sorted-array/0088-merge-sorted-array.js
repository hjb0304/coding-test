/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // nums1의 마지막 숫자와 nums2의 마지막 숫자를 포인터로 잡기
    let midx = m - 1;
    let nidx = n - 1;
    // nums1의 가장 마지막 숫자부터 채움
    let max = m + n - 1;

    // num2의 숫자를 모두 채워넣을 때까지 반복
    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[max] = nums1[midx];
            midx--;
        } else {
        // num1의 숫자를 모두 사용했으면 num2의 숫자 사용
            nums1[max] = nums2[nidx];
            nidx--;
        }
        max--;
    }
};