function solution(numbers) {    
   return numbers.map(number => {
        // 2진수로 변환
        let bit = [...number.toString(2)];
        
        // 짝수인 경우: +1
        if(number % 2 === 0) {
            return number + 1;
            // 홀수인 경우: 마지막 0을 1로 바꾸고 그 뒷자리 1을 0으로 바꾸기
        } else {
            // 앞에 0 더해주기
            bit.unshift('0');
            for(let i = bit.length - 1; i >= 0; i--) {
                if(bit[i] === '0') {
                    bit[i] = '1';
                    bit[i + 1] = 0;
                    break;
                }
            }
                return parseInt(bit.join(""), 2);
        }
        }
        // while(true) {
        //     number++;
        //     let otherBit = number.toString(2);
            
            // 다른 수의 비트와 자릿수 맞추기
            // while(bit.length < otherBit.length) {
            //     bit = '0' + bit;
            // }
            // let count = 0;
            
            // 두 숫자의 비트를 하나하나 비교 (시간초과)
//             for(let i = 0; i < bit.length; i++) {
//                 if(bit[i] !== otherBit[i]) count++;
//             }
            
//             if(count <= 2) {
//                 answer.push(number);
//                 break;
//             }
        // }
    );
}