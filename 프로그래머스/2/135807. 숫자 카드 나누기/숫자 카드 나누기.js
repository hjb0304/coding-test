function solution(arrayA, arrayB) {
    var answer = 0;
    const gcd = (a, b) => 
        a % b === 0 ? b : gcd(b, a % b);
    
    const multiGcd = (numbers) => {
        let result = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            result = gcd(result, numbers[i]);
        }
        return result;
    }
    
    // A와 B의 최대공약수 구하기
    const gcdA = multiGcd(arrayA);
    const gcdB = multiGcd(arrayB);
    
    // A, B의 원소들로 나누어지지 않는지 확인
    answer = Math.max(arrayA.every(num => num % gcdB !== 0) ? gcdB : 0, arrayB.every(num => num % gcdA !== 0) ? gcdA : 0);
    
    return answer;
}