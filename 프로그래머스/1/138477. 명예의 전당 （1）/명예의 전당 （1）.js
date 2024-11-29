function solution(k, score) {
    const answer = [];
    for(let i=0; i<score.length; i++){
        const sliced = score.slice(0, i+1).sort((a,b) => b-a)
        if(i<k) answer.push(Math.min(...sliced))
        else if(i>= k) answer.push(sliced[k-1])
        }
    
    return answer
}