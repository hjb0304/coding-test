/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const answer = [words[0]];
    let current = '';

    for(let i = 1; i < words.length; i++) {
        const word = words[i];
        current = [...word].sort().join('');
        const prev = [...words[i - 1]].sort().join('');

        // answer의 마지막 요소가 anagram이 아니면 추가
        if(current !== prev) answer.push(word);
    }

    return answer;
};