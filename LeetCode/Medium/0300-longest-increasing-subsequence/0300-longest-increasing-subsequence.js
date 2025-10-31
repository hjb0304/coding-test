/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 증가하는 배열
    const sub = [];

    // 위치 찾기 위해 이진탐색
    function findIndex(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((right - left) / 2);

            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    for (let num of nums) {
        // 배열에 요소가 없거나 새 요소가 마지막 요소보다 크면(순서 맞음) push
        if (!sub.length || num > sub[sub.length - 1]) {
            sub.push(num);
        } else {
            // 순서가 맞지 않으면 새 요소 위치 찾아서 그 위치에 넣기
            const idx = findIndex(sub, num);
            sub[idx] = num;
        }
    }

    return sub.length;
};