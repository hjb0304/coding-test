function solution(s){
    return [...s].filter(i => i.toLowerCase() === 'p').length === [...s].filter(i => i.toLowerCase() === 'y').length ? true : false;
}