function solution(key, lock) {
    const m = key.length;
    const n = lock.length;
    
    // 90도 회전
    function rotate(key) {
        const arr = Array.from({length: m}, () => Array(m));
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < m; j++) {
                arr[i][j] = key[j][m - 1 - i];
            }
        }
        return arr;
    }
    
    // 자물쇠 숫자가 모두 1인지(열쇠로 자물쇠를 열 수 있는지) 확인
    function match(arr) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(arr[i + m - 1][j + m - 1] !== 1) return false;
            }
        }
        return true;
    }
    
    // 회전 후 검증
    for(let i = 0; i <= 3; i++) {
        // 자물쇠 길이 2m만큼 확장
        const mapLength = n + 2 * (m - 1);
        const map = Array.from({length: mapLength}, () => Array(mapLength).fill(0));
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                map[j + m - 1][k + m - 1] = lock[j][k];
            }
        }
        
        // 열쇠 맨위부터 옮겨가며 대보기
        for(let j = 0; j <= mapLength - m; j++) {
            for(let k = 0; k <= mapLength - m; k++) {
                // map에 key 더하기
                for(let l = 0; l < m; l++) {
                    for(let o = 0; o < m; o++) {
                        map[j + l][k + o] += key[l][o];
                    }
                }
                
                // 다 1이면 true
                if(match(map)) return true;
            
                // map 원상복귀
                for(let l = 0; l < m; l++) {
                    for(let o = 0; o < m; o++) {
                        map[j + l][k + o] -= key[l][o];
                    }
                }                 
            }           
        }
        
        // 열쇠 90도 회전
        key = rotate(key);
    }
    
    return false;
}