// function solution(absolutes, signs) {
//     const mapped = absolutes.map( (v, i) => {
//         return !signs[i] ? v[i] = v-v*2 : v[i] = v
//     }).reduce( (acc, cur) => acc+cur, 0)
//     return mapped
// }

function solution(absolutes, signs) {
    const answer = absolutes.reduce( ( acc, cur, i) => {
        return !signs[i] ? acc + (cur*-1) : acc + cur
    },0)
        return answer
    }