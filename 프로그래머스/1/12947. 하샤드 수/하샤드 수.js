function solution(x) {
    const converted = x.toString().split('');
    let number = 0;
    for(let i = 0; i<converted.length; i++){
        number += Number(converted[i])
    }
    
    return x%number === 0 ? true : false
}