function solution(s) {
    const regExp = s.match(/[a-z]/gi)
    return regExp === null && (s.length === 4 || s.length === 6 )? true : false
}