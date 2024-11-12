// function solution(s) {
//     const lower = s.match(/[a-z]/g);
//     const upper = s.match(/[A-Z]/g);
//     const lowersort = lower.sort((a,b) => b.localeCompare(a)).join('')
//     const uppersort = upper.sort((a,b) => b.localeCompare(a)).join('')
//     return lowersort+uppersort
// }

function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}