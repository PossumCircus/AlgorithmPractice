function solution(number, limit, power) {
    // 모든 숫자의 약수 개수 계산
    const divisors = calculateDivisors(number);

    // 철의 무게 계산
    return divisors.reduce((totalWeight, count) => {
        return totalWeight + (count > limit ? power : count);
    }, 0);
}

function calculateDivisors(number) {
    const divisors = Array(number + 1).fill(0);
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisors[j]++;
        }
    }
    return divisors;
}
