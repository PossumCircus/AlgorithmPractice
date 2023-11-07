function solution(my_str, n) {
    const arr = [];
    const target = [...my_str]
    while(arr.length <= my_str.length){
        arr.push(target.splice(0, n).join(''))
    arr.push(target.splice(0, n).join(''))
    }
        
    
    return arr.filter(item => item)
}