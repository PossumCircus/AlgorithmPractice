function solution(my_string) {
    var try1 = my_string.replaceAll(/[abcdefghijklmnopqrstuvwxyz]/ig, '')
    var count = 0;
    for(let i=0; i<try1.length; i++){
        count += parseInt(try1[i])
    }
    return count
}