/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length;
    let one = 0;
    let gcd = 0;

    const getGcd = (a, b) => (b > 0 ? getGcd(b, a % b) : a);

    // 1의 개수 세기, 모든 수의 최대공약수 찾기
    for (let num of nums) {
        if (num === 1) one++;
        gcd = getGcd(gcd, num);
    }
    
    // 1이 존재하면 전체 개수-1의 개수만큼 실행하면 모두 1이 됨
    if (one > 1) return n - one;
    // 최대공약수가 1보다 크면 모두 1로 만들 수 없음
    if (gcd > 1) return -1;

    // 최대공약수가 1이 되는 부분배열의 최소 길이
    let minLength = n;
    for (let i = 0; i < n; i++) {
        let gcd = 0;
        for (let j = i; j < n; j++) {
            gcd = getGcd(gcd, nums[j]);
            if (gcd === 1) {
                minLength = Math.min(minLength, j - i + 1);
                break;
            }
        }
    }

    // 1을 만드는 데 실행되는 횟수 + 1이 모든 숫자로 확산되는 데 실행되는 횟수
    return (minLength - 1) + (n - 1);
};