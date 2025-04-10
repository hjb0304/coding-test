function solution(friends, gifts) {
    const giftCount = {};
    let answer = 0;
    
    // 각 친구별 선물 준 횟수, 받은 횟수, 받을 횟수를 나타내는 객체 생성
    for(let friend of friends) {
        giftCount[friend] = [0, 0, 0];
    }
    
    // 선물 준 횟수와 받은 횟수만큼 각각의 객체 속성 값 지정
    for(let gift of gifts) {
        const [giver, taker] = gift.split(" ");
        giftCount[giver][0]++;
        giftCount[taker][1]++;
    }
    

    for(let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            let giver = friends[i];
            let taker = friends[j];
            console.log(giver, taker)
            // 선물 준 수와 받은 수 계산
            let give = gifts.filter(k => k === `${giver} ${taker}`).length;
            let take = gifts.filter(k => k === `${taker} ${giver}`).length;
            // 수 비교해서 받을 선물 수 증가
            console.log(give, take)
            if(give > take) {
                giftCount[giver][2]++;
            } else if(give < take) {
                giftCount[taker][2]++;
            } else {
                // 주고 받은 선물 수가 같다면 선물 지수 비교
                let giveGift = giftCount[giver][0] - giftCount[giver][1];
                let takeGift = giftCount[taker][0] - giftCount[taker][1];
                if(giveGift > takeGift) {
                    giftCount[giver][2]++;
                } else if(giveGift < takeGift) {
                    giftCount[taker][2]++;
                }
            }
        }
    }
    
    for(let friend in giftCount) {
        let gift = giftCount[friend][2];
        if(answer < gift)
        answer = gift;
    }
    
    
    return answer;
    
    
}