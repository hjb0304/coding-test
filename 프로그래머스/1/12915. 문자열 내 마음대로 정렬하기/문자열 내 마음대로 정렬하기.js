function solution(strings, n) {
    strings.sort();
    strings.sort((a, b) => a[n].localeCompare(b[n]))
    return strings;
}