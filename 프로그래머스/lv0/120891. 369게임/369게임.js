function solution(order) {
    var arr = [];
    var str = order.toString();
    for(let i=0; i<str.length; i++){
        if(Number(str[i])>0 && Number(str[i])%3 === 0){
            arr.push(str[i])
        }
        
    }
    return arr.length
}