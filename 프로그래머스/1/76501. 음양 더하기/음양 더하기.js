function solution(absolutes, signs) {
    
    const mapped = absolutes.map( (v, i) => {
        return signs[i] === false ? v[i] = v-v*2 : v[i] = v
    }).reduce( (acc, cur) => acc+cur, 0)
    
    return mapped

}