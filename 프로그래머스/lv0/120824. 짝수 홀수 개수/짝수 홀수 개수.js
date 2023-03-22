function solution(num_list) {
    var answer = [];
    var odd = 0;
    var even = 0;
    num_list.forEach( (el) => {
        if(el%2 == 0 ){
            return even++
        } else return odd++
    })
    return [even, odd];
}