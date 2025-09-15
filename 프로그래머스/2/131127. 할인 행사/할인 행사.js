function solution(want, number, discount) {
    var answer = 0;
    let wantObj = {}
    
    // 사야 할 물건들 품목과 개수 객체에 넣기
    want.forEach((item, i) =>  {
        wantObj[item] = number[i];
    });
    
    // 회원가입할 수 있는 경우의 수
    for(let i = 0; i <= discount.length - 10; i++) {
        let obj = {};
        let possible = true;
        // 10일 동안 구입했을 때 물건들의 품목과 개수 구하기
        for(let j = i; j < i + 10; j++) {
            if(obj.hasOwnProperty(discount[j])) {
                obj[discount[j]]++;
            } else {
                obj[discount[j]] = 1;
            }
        }
        
        // 원하는 제품 객체와 비교
        for(let item in wantObj) {
            // 구입한 제품 중 원하는 제품이 없을 경우/구입한 제품 수가 더 적은 경우
            if(!obj.hasOwnProperty(item) || obj[item] < wantObj[item]) {
                possible = false;
                break;
            }
        }
        if(possible) answer++;
    }
    
    
    return answer;
}