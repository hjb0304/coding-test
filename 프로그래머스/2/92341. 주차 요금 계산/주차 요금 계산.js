function solution(fees, records) {
    var answer = [];
    const [basicTime, basicFee, plusTime, plusFee] = fees;
    const obj = {};
    
    // 차량 번호별 입출차시간 담기
    for(let record of records) {
        const [time, number] = record.split(" ");
        if (obj[number]) {
         obj[number].push(time);     
        } else {
            obj[number] = [time];
        }
    }
    
    // 차량별 주차 요금 계산
    for(let number in obj) {
        let arr = obj[number];
        let sum = 0;
        for (let i = 0; i < arr.length; i += 2) {
            let inTime = arr[i].split(":").map(Number);
            let outTime = arr[i + 1]?.split(":").map(Number) ?? [23, 59];
            sum += (outTime[0] * 60 + outTime[1]) - (inTime[0] * 60 + inTime[1]);
        }
         let fee = (sum <= basicTime) ? basicFee : Math.ceil((sum - basicTime) / plusTime) * plusFee + basicFee;
            obj[number] = fee;
    }
    
    // 객체 key값 오름차순으로 정렬 후 주차요금 차례로 배열에 담기
    const numbers = Object.keys(obj);
    numbers.sort((a, b) => +a - +b);
    numbers.forEach(number => {
        answer.push(obj[number]);
    })
    
    return answer;
}