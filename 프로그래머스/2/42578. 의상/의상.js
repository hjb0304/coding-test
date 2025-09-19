function solution(clothes) {
//     var answer = 1;
//     const obj = {};
    
//     // 의상 종류별로 객체에 넣기
//     for(let cloth of clothes) {
//         const [clothName, clothType] = cloth;
//         if(obj[clothType]) {
//          obj[clothType].push(clothName);   
//         } else {
//             obj[clothType] = [clothName]; 
//         }
//     }
    
//     // 경우의 수를 세기 위해 종류별 의상 수 + 1 (해당 종류를 안 입는 경우 포함) 모두 곱하기
//     for(let clothType in obj) {
//         answer *= obj[clothType].length + 1;
//     }
    
//     // 아무것도 안 입는 경우 제외
//     return answer - 1;
    
    let answer = 1;
    const obj = {};
    
    // 옷 종류별 개수를 객체에 넣기
    for(let cloth of clothes) {
        const [name, type] = cloth;
        obj[type] = (obj[type] || 0) + 1;
    }
    
    // 옷 종류별 개수를 곱해 경우의 수 구하기 (입지 않는 경우 포함)
    for(let type in obj) {
        answer *= (obj[type] + 1);
    }
    
    // 아무것도 입지 않는 경우 빼기
    return answer - 1;
    
    
    
    
    
    
    
    
    
    
    
    
    
}
