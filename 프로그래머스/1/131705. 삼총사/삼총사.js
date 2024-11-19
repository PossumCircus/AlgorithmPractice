function solution(number) {
    let dual = 0;
    let count = 0;
    for(let i = 0; i<number.length-2; i++){
        for(let j = i+1; j<number.length; j++){
                dual = number[i]+number[j]
            for(let k = j+1; k<number.length; k++){
                if(dual + number[k] === 0) count++
            }
        }
    }
    return count
}