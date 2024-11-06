function solution(arr) {
    
    const reduced = [...arr].reduce( (acc, cur) => acc+cur, 0)
    return reduced/arr.length
    
}