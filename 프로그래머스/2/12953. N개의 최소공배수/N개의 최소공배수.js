function solution(arr) {
    var answer = 0;
    arr.sort((a, b) => a - b)
    
    // 최대 공약수
    function getGcd(a, b) {
        let remain = b % a;
        while(remain > 0) {
            b = a;
            a = remain;
            remain = b % a;
        }
        return a;
    }
    
    // 최소 공배수
    function getLcm(a, b) {
        return a * b / getGcd(a, b);
    }
    
    // 배열의 길이가 1이 될 때까지 뒤에서부터 둘씩 짝지어 최소공배수 반환
    while(arr.length > 1) {
        let b = arr.pop();
        let a = arr.pop();
        arr.push(getLcm(a, b));
    }
    
    return arr[0];
}