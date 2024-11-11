function solution(s) {
    const floor = Math.floor(s.length/2)
    const odd = s.slice(floor, floor+1)
    const even = s.slice(s.length/2-1, s.length/2+1)
    
    return s.length%2===0 ? even : odd
}