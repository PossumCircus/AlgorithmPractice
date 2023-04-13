function solution(num, k) {
    var finder = (''+num).split('').find( (el) => el == k);
    if(finder){
        return (''+num).indexOf(finder)+1
    } else return -1
    

}