/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const converted = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
console.log(converted)
    return converted === [...converted].reverse().join('');
};