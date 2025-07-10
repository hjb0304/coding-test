function solution(weights) {
    var answer = 0;
    // 무게별 사람 수
    let count = {};
    
    for(let weight of weights) {
        count[weight] = (count[weight] ?? 0) + 1;
    }
    
    // 무게별로 균형을 이루는 무게가 존재하는지 확인
    for(let weight in count) {
        for(otherWeight in count) {
            // 같은 무게일 경우 경우의 수 계산
            if(+weight === +otherWeight) {
                answer += (count[weight] * (count[weight] - 1)) / 2;
            } else
                // 다른 무게일 경우(여러개 있을 경우의 수)
            if(+weight * 2 === +otherWeight * 3 || +weight * 3 === +otherWeight * 4 || +weight * 2 === +otherWeight * 4) {
                answer += count[weight] * count[otherWeight];
            }
        }
    }
    
    // 시간 초과
    // for(let i = 0; i < weights.length; i++) {
    //     for(let j = i + 1; j < weights.length; j++) {
    //         if(weights[i] === weights[j] || arr.includes(+(weights[i] / weights[j]).toFixed(2)) || arr.includes(+(weights[j] / weights[i]).toFixed(2))) {
    //             answer++;
    //         }
    //     }
    // }
    
    return answer;
}