/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const str = String(num);
    let answer = '';

    const dic = {
        0: { 1: 'I', 5: 'V' }, 1: { 1: 'X', 5: 'L' }, 2: { 1: 'C', 5: 'D' }, 3: { 1: 'M' }
    }

    for (let i = str.length - 1; i >= 0; i--) {
        let convert = '';
        const num = Number(str[str.length - 1- i]);

        if (num >= 1 && num <= 3) {
            convert = dic[i][1].repeat(num);
        } else if (num === 4) {
            convert = dic[i][1] + dic[i][5];
        } else if (num === 5) {
            convert = dic[i][5];
        } else if (num >= 6 && num <= 8) {
            convert = dic[i][5] + dic[i][1].repeat(num % 5)
        } else if (num === 9) {
            convert = dic[i][1] + dic[i + 1][1];
        }

        answer += convert;
    }

    return answer;
};