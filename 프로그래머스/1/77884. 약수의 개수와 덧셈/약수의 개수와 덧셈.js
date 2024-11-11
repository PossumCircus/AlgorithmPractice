function solution(left, right) {
    const arr = []
    while(left<=right){
        arr.push(left)
        left++
    }
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        const sqrt = Math.sqrt(arr[i])
        const integer = Number.isInteger(sqrt)
        integer ?  sum -= arr[i] : sum += arr[i]
    }
    return sum
}