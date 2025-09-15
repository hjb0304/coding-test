function solution(bridge_length, weight, truck_weights) {
    var count = 1;
    let crossing = [];
    let sum = 0;
    let length = truck_weights.length;
    
    while(truck_weights.length > 0 || sum > 0) {
        // 다리에 트럭이 더 건널 수 있다면
        if(sum + truck_weights[0] <= weight) {
        // 첫번째 트럭 태우기
        let first = truck_weights.shift();
        crossing.push(first);
        sum += first;} else {
            // 더 건널 수 없다면 빈칸 태우기
            crossing.push(0);
        }
        count++;
        
        // 다리 길이만큼 트럭이 차있다면
        if(crossing.length === bridge_length) {
            // 맨 앞 트럭 빼기
            let firstTruck = crossing.shift();
            if(firstTruck !== 0) sum -= firstTruck;
        }
    }
    
    return count;
}