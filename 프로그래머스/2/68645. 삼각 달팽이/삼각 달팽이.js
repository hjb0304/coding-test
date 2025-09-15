function solution(n) {
    let arr = Array(n).fill([]).map((_, i) => Array(i + 1).fill(0));
    let num = 1;
    
    function fillTriangle(n, startX, startY) {
    let x = startX;
    let y = startY;
    
    // 왼쪽 채우기
    for(let i = 0; i < n; i++) {
      arr[y++][x] = num++;  
    }
    
        y--; x++;
        
    // 아랫쪽 채우기
    for(let i = 1; i < n - 1; i++) {
        arr[y][x++] = num++;
    }
        
    
    // 오른쪽 채우기
    for(let i = n - 1; i > 0; i--) {
        let line = arr[y--];
        line[x--] = num++;
    }
    
    // 안쪽 삼각형 채우기
    if(n - 3 > 0) {
        fillTriangle(n - 3, startX + 1, startY + 2);
    }
    }
    
    fillTriangle(n, 0, 0);
    
    return arr.flat();
}