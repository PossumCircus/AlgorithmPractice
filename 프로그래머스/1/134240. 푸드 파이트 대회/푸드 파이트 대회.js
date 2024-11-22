function solution(food) {
    let arr = [];
    for(let i = 0; i<food.length; i++){
        if(food[i] === 1) arr.push(0)
        else if(food[i]%2 === 1) arr.push(food[i]-1)
        else if(food[i]%2 === 0) arr.push(food[i])
    }
    let answer = '';
        for (let i = 0; i < arr.length; i++) {
          // arr[i] 길이로 문자열을 늘리고, i를 문자로 변환하여 채웁니다.
         answer += i.toString().repeat(arr[i]/2)
    }
    return answer+0+answer.split('').reverse().join('')

//     0 2 4 6 , 0 6 0 2
}