function solution(phone_number) {
    const arr = [];
    for(let i = 0; i<phone_number.length; i++){
        i >= phone_number.length-4 ? arr.push(phone_number[i]) : arr.push('*')
    }
    return arr.join('')
}