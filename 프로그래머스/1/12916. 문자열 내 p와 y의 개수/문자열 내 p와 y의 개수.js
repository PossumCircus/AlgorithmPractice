function solution(string){
    let pp = string.match(/p/gi)
    let yy = string.match(/y/gi)
    
    pp ? pp = pp.length : null
    yy ? yy = yy.length : null
    
    return pp === yy
}