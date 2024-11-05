function solution(arr, divisor) {
    const answer = [];
    const sorted = arr.sort( (a,b) => a-b)
    
    for(let i =0; i<sorted.length; i++){
        if(sorted[i]%divisor === 0) answer.push(sorted[i])
    }
    answer.length < 1 ? answer.push(-1) : answer
    
    return answer
}