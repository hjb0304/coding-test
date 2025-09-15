function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    // 캐시 교체
    // 캐시 크기가 0일 경우: cache miss가 연속으로 발생
    if(cacheSize === 0) {
        return cities.length * 5;
    }
    
    for(let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        // 캐시가 존재할 경우: cache hit
        if(cache.includes(city)) {
            // 존재하는 캐시를 삭제하고 새로 추가
            cache = cache.filter(item => item !== city);
            cache.push(city);
            answer += 1;
        }
        // 캐시가 존재하지 않을 경우: cache miss
         else {
           // 배열이 다 찼을 경우 가장 오래된 캐시를 삭제
             if(cache.length === cacheSize) {
                cache.shift();
             }
             // 새로운 캐시 추가
             cache.push(city);
             answer += 5;
            }
    }
    
    return answer;
}