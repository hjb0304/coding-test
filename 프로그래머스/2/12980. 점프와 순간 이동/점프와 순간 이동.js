function solution(n) {
    // 처음에 한칸 이동
    let move = 1;
    
    // n이 1이 될 때까지 2로 나눔(순간이동). n이 홀수라면 1을 빼고(한칸 이동) 다시 나눔
    while(n > 1) {
        if(n % 2) {
            n = (n - 1) / 2;
            move++;
        }
        else {
            n = n / 2;
        }
    }
    
    return move;
}