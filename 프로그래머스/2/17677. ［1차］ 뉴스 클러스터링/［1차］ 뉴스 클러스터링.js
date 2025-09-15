function solution(str1, str2) {
    var answer = 0;
    const str1Group = {};
    const str2Group = {};
    
    // 영문이 아닌 문자 제거
    str1 = str1.toUpperCase().replace(/[^a-zA-Z]/g, " ");
    str2 = str2.toUpperCase().replace(/[^a-zA-Z]/g, " ");
    
    // 글자 쌍 객체에 넣기
    for(let i = 0; i < str1.length - 1; i++) {
        let str = str1[i] + str1[i + 1];
        // 둘다 공백이 아닐 경우에만
        if (str1[i] !== " " && str1[i + 1] !== " ") {
        str1Group[str] = !str1Group[str] ? 1 : str1Group[str] + 1;}
    }
    
    for(let i = 0; i < str2.length - 1; i++) {
        let str = str2[i] + str2[i + 1];
        // 둘다 공백이 아닐 경우에만
        if (str2[i] !== " " && str2[i + 1] !== " ") {
        str2Group[str] = !str2Group[str] ? 1 : str2Group[str] + 1;}
    }
    
    // 모두 공집합인 경우
    if(!Object.keys(str1Group).length && !Object.keys(str2Group).length) {
        return 65536;
    }
    
    let intersection = 0;
    let union = 0;
    
    for(let str in str1Group) {
        if(str1Group[str] && str2Group[str]) {
        // 교집합: 중복되는 원소 개수 중 작은 값
        intersection += Math.min(str1Group[str], str2Group[str]);
        // 합집합: 중복되는 원소 개수 중 큰 값
        union += Math.max(str1Group[str], str2Group[str]);}
        // 그룹1에만 있는 원소 합집합에 넣기 
        if(!str2Group[str] && str1Group[str]) {
        union += str1Group[str];}
    }
    
    // 그룹2에만 있는 원소 합집합에 넣기 
    for(let str in str2Group) {
        if(str2Group[str] && !str1Group[str]) {
        union += str2Group[str];}
    }
    
    return Math.floor(intersection / union * 65536);
}