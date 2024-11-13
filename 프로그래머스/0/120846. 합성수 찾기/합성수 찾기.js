function solution(n) {
    // 소수 판별을 위한 배열을 생성하고 모든 값을 false로 초기화
    const isPrime = Array(n + 1).fill(false);
    let compositeCount = 0;

    for (let i = 2; i <= n; i++) {
        if (!isPrime[i]) {  // 소수라면
            for (let j = i * 2; j <= n; j += i) {
                isPrime[j] = true;  // i의 배수들은 합성수로 표시
            }
        }
    }

    // 합성수의 개수를 세기
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            compositeCount++;
        }
    }

    return compositeCount;
}
