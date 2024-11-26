function solution(a, b, n) {
    let counts = 0;
    
    while (n >= a) {
        // 교환 가능한 콜라의 수
        let newCola = Math.floor(n / a) * b;
        // 받은 콜라 수 누적
        counts += newCola;
        // 남은 빈 병 수 업데이트
        n = (n % a) + newCola;
    }
    
    return counts;
}
