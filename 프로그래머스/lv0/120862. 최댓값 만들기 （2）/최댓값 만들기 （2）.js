function solution(numbers) {
    var num = numbers.sort((a,b)=> a-b);
    var pp1 = num[0]*num[1]
    var pp2 = num[num.length-1]*num[num.length-2]
    if(pp1 > pp2){
        return pp1
    } else {
        return pp2
    }
    
}