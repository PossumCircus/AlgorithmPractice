function solution(numbers, direction) {
    var arr = [];
    if(direction == "right"){
        arr.push(numbers[numbers.length-1])
        for(let i =0; i<numbers.length-1; i++){          
            arr.push(numbers[i])
        }
    } else if(direction == "left"){
        for(let i =1; i<=numbers.length-1; i++){
            arr.push(numbers[i])
        }
        arr.push(numbers[0])
    }
    return arr
}