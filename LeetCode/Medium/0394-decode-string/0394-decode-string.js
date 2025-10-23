/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];

    for (i = 0; i < s.length; i++) {
        const item = s[i];
        console.log(stack)
        // ]이면 [가 나올 때까지 스택에서 하나씩 빼서 숫자만큼 반복 -> 다시 스택에 넣기 
        if (item === ']') {
            let num = '';
            let str = '';
            let cha = stack.pop();

            while (cha !== '[') {
                str = cha + str;
                cha = stack.pop();
            }

            cha = stack.pop();
            while (!isNaN(cha)) {
                num = cha + num;
                cha = stack.pop();
            }
            
            stack.push(cha)
            stack.push(str.repeat(Number(num)));
            continue;
        } else {
            // ]이 아니면 스택에 넣기
            stack.push(item);
        }
    }

    return stack.join('');
}