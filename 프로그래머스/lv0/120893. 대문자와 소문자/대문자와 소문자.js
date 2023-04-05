function solution(my_string) {
    var str1 = '';
    var str2 = '';
    for(let i =0; i<my_string.length; i++){
        if (my_string.charCodeAt(i)<96){
            str1 += my_string[i].toLowerCase()
        } else if (96<my_string.charCodeAt(i)){
            str1 += my_string[i].toUpperCase()
        }
    }
    return str1
}
