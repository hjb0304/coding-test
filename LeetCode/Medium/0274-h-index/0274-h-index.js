/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let paper = 0;

    // h-index가 제일 큰 경우부터 시작
    for(let i = citations.length; i > 0; i--) {
        // 총 개수-i번째 수가 i보다 크면 i 이상인 수가 i개 -> h-index
        if(citations[citations.length - i] >= i) return i;
    }
    
    return 0;
};