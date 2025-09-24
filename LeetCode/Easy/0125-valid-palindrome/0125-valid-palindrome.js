/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 소문자로 변환, 알파벳과 숫자 이외의 문자 제거
    const converted = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // 투포인터: 문자열의 양끝을 포인터로 잡기
    let start = 0;
    let end = converted.length - 1;

    // 두 포인터가 교차하기 전까지 비교
    while(start < end) {
        if(converted[start] !== converted[end]) return false;
        start++;
        end--;
    }

    return true;
    // return converted === [...converted].reverse().join('');
};