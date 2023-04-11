function solution(age) {
    const arr = "abcdefghijklmnopqrstuvwxyz"
    const arx = age.toString().split("")
    var str ='';
    for(let i =0; i<age.toString().length; i++){
        str += arr[Number(arx[i])]
    }
        return str
}