function solution(start, end_num) {
    answer = [];
    for(let i  = 0; answer.length <= start-end_num  ;i++){
        answer.push(start-i)
    }
    return answer;
}