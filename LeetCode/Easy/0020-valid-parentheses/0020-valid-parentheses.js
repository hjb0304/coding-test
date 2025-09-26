/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pair = {')': '(', '}': '{', ']': '['};

    for(let str of s) {
        // 여는 괄호일 경우 stack에 추가
        if(Object.values(pair).includes(str)) {
            stack.push(str);
        } else {
        // 닫는 괄호일 경우 stack의 마지막 괄호 빼서 짝 맞는지 체크
            if(stack.pop() !== pair[str]) return false;
        }
    }

    // for(let str of [...s]) {
    //     // 마지막 괄호랑 짝이 맞으면 둘다 제거
    //     if(stack[stack.length - 1] === '(' && str === pair['('] || stack[stack.length - 1] === '{' && str === pair['{'] || stack[stack.length - 1] === '[' && str === pair['[']) {
    //         stack.pop();
    //         } else stack.push(str);
    // }

    return stack.length ? false : true;
};