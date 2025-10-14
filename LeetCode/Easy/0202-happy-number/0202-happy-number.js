/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();
    let arr = [...String(n)];

    // 한자리수가 될 때까지 반복
    while (true) {
        console.log(arr)
        let sum = 0;
        for (let num of arr) {
            sum += num * num;
        }
        arr = [...String(sum)];

        // 한자리수가 됐을 때
        if (arr.length === 1) {
            // 1이면 true
            if(arr[0] === '1') {
                return true;
            }
            // 이미 나온 숫자면 false
            else if (set.has(arr[0])) {
                return false;
            }
            // 둘다 아니면 set에 추가
            else { set.add(arr[0]); }
        }
    }

    return true;
}; 