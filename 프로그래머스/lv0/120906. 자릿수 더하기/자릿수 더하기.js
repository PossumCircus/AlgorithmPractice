function solution(n) {
    var nn = n.toString();
    var num = 0;
    for(let i=0; i<n.toString().length; i++){
        num += parseInt(nn[i])
    }
       return num
}