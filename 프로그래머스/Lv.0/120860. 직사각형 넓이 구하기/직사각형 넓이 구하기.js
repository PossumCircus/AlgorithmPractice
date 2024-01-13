function solution(dots) {
    let arr = [];
    let arr2 = [];
    dots.forEach(element => arr.push(element[0]))
    dots.forEach(element => arr2.push(element[1]))
    
    let mainAxis = Math.max(...arr)-Math.min(...arr);
    let crossAxis = Math.max(...arr2)-Math.min(...arr2)
    
    return mainAxis*crossAxis
}