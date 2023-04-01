function solution(my_string, letter) {
    var arr = '';
    for(let i =0; i<my_string.length; i++){
       arr += my_string[i].replace(letter, '')
    }
    return arr
}