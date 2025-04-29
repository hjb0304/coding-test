function solution(n,a,b)
{  
    for(let i = 1; i <= n / 2; i++){
        // 다음 라운드 번호: 2로 나눠서 올림
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        // 서로 붙게 되는 경우: 다음 라운드 번호가 같을 때
        if(a === b) {
            return i;
        }
    }
}