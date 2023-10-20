function solution(i, j, k) {
    let arr = [];
    for(let a = i; i<=j; i++){
        arr.push(i.toString())
    }
    return arr.join("").split("").map( (val)=>{
        return val.includes(k.toString())
    }).filter( (val) => val === true).length
}