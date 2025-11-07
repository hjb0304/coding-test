/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function (stations, r, k) {
    const power = Array(stations.length).fill(0);

    // 슬라이딩윈도우로 현재 발전소의 power 구하기
    // 초기(0~r까지의 합)
    let windowSum = 0;
    for (let i = 0; i < Math.min(stations.length, r + 1); i++) {
        windowSum += stations[i];
    }
    power[0] = windowSum;

    for (let i = 1; i < stations.length; i++) {
        // 나가는 숫자
        if(i - r - 1 >= 0) windowSum -= stations[i - r - 1];
        // 들어오는 숫자
        if(i + r < stations.length) windowSum += stations[i + r];
        power[i] = windowSum;
    }

    // 최소 power를 x로 만들 수 있는지 확인
    function canGet(x) {
        const add = Array(stations.length).fill(0);
        let sum = 0;
        let count = k;

        for (let i = 0; i < stations.length; i++) {
            sum += add[i];
            if (power[i] + sum < x) {
                const need = x - (power[i] + sum);
                if (count < need) return false;

                count -= need;
                const end = Math.min(stations.length - 1, i + r);
                sum += need;
                if (end + r + 1 < stations.length) add[end + r + 1] -= need;
            }
        }
        return true;
    }

    // 이진탐색으로 최대 x값 구하기
    let left = Math.min(...stations);
    let right = stations.reduce((a, b) => a + b, 0) + k;
    let max = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canGet(mid)) {
            max = mid;
            left = mid + 1;
        } else right = mid - 1;
    }

    return max;
};