// function solution(numbers, k) {
//   return Number(numbers.join('').repeat(999)[2*(k-1)])
// }
function solution(numbers, k) {
    return numbers[(k - 1) * 2 % numbers.length];
}
