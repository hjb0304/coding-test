function solution(arr) {
    // let answer = [];
//     arr.forEach((e, i) => {
//         if(arr[i] !== arr[i - 1]) {
//             answer.push(e)
//         }
//     })
    
    return arr.filter((num, i) => num !== arr[i + 1]);
}