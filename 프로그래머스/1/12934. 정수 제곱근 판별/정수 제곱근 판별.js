function solution(n) {
 const root = Math.sqrt(n);
  return parseInt(root) - root === 0 ? (root + 1 ) * (root + 1) : -1;
}