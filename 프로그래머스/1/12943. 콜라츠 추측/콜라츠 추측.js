function solution(num) {
    let count = 0;
    let processedNumber = num;
    while(processedNumber !== 1){
        processedNumber%2===0 ? processedNumber = processedNumber/2 : processedNumber = processedNumber = processedNumber*3+1
        count++
    }
    return count < 500 ? count : -1
}