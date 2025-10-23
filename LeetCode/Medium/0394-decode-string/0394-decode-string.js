/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];

    for (i = 0; i < s.length; i++) {
        const item = s[i];

        // ]이면 숫자가 나올 때까지 스택에서 하나씩 빼서 숫자만큼 반복 -> 다시 스택에 넣기 
        if (item === ']') {
            let str = '';
            let cha = stack.pop();
            while (isNaN(cha)) {
                str = cha + str;
                cha = stack.pop();
            }
            stack.push(str.repeat(Number(cha)));
            continue;
        }

        // ]이나 [이 아니면 스택에 넣기
        if (item !== '[') {
            stack.push(item);
        }

    }

    return stack.join('');
}