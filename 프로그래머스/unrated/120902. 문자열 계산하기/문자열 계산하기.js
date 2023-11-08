function solution(my_string) {
    //하나 이상의 공백으로 분할
    const arr = my_string.split(/[\s]+/)
    const a = [];
    let answer = Number(arr[0])
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '+'){
           answer = answer+Number(arr[i+1])
        } else if(arr[i] === '-'){
            answer = answer-Number(arr[i+1])
        }
    }
    return answer
}