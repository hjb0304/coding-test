/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let max = 0;

    for(let right = 0; right < s.length; right++) {
        // 마지막 글자가 set에 있으면 left 증가시켜 범위 좁히기
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // set에 글자 추가
        set.add(s[right]);

        // 중복 없는 상태에서 max 갱신
        max = Math.max(max, set.size);
    }

    return max;
};