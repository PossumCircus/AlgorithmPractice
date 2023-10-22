function solution(array, n) {
    const minDiff = Math.min(...array.map(val => Math.abs(n - val))); // 최소 차이를 계산
    const closestNumbers = array.filter(val => Math.abs(n - val) === minDiff); // 최소 차이를 가지는 숫자들을 필터링
    // return Math.min(...closestNumbers); // 가장 작은 값을 반환
    return Math.min(...closestNumbers)
    
}
