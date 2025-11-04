/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const n = nums.length;
    const result = [];
    const freq = new Map();

    // 초기 윈도우 설정
    for (let i = 0; i < k; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    const getXSum = () => {
        // [num, freq] 배열로 만들어 정렬
        const arr = [...freq.entries()].sort((a, b) => {
            if (b[1] === a[1]) return b[0] - a[0]; // freq 같으면 값 큰 게 먼저
            return b[1] - a[1]; // freq 내림차순
        });
        let sum = 0;
        let count = 0;
        for (let [num, f] of arr) {
            if (count >= x) break;
            sum += num * f;
            count++;
        }
        return sum;
    };

    result.push(getXSum());

    for (let i = k; i < n; i++) {
        // 윈도우 이동
        const outNum = nums[i - k];
        const inNum = nums[i];

        // 나가는 숫자
        freq.set(outNum, freq.get(outNum) - 1);
        if (freq.get(outNum) === 0) freq.delete(outNum);

        // 들어오는 숫자
        freq.set(inNum, (freq.get(inNum) || 0) + 1);

        result.push(getXSum());
    }

    return result;
};
