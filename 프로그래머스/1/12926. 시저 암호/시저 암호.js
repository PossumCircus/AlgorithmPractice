function solution(s, n) {
    const arr = []
    const isBlank = (s) => s === ' '
    // 65~90, 97~122
    const upperRange = (num) => num+n > 90 ? 64+ Math.abs(num+n-90) : num+n
    const lowerRange = (num) => num+n > 122 ? 96+ Math.abs(num+n-122) : num+n
    
    s.split('').forEach( v => {
        if(isBlank(v)) arr.push(v)
        if(!isBlank(v) && v === v.toUpperCase()) arr.push(String.fromCharCode(upperRange(v.charCodeAt(0))))
        if(!isBlank(v) && v === v.toLowerCase()) arr.push(String.fromCharCode(lowerRange(v.charCodeAt(0))))
    })
    return arr.join('')
}