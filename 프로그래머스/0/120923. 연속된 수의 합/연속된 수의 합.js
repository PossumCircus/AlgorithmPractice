function solution(num, total) {
    const constantN = (num) => {
        let result = 0;
    for(let i =1; i<num; i++){
        result += num-i
    }
        return result
    }
    
    const start = Math.floor((total-constantN(num))/num)
    const answer = [];
    for(let i = 0; i<num; i++){
        answer.push(start+i)
    }
    return answer
}