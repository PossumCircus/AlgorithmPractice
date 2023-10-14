function solution(n) {
    let i = 1;
    let a = []
    let b = 1;
    while(true){
        a.push(1)
        i++
        b = b*i
        if(n<b){
            break;
        }
    }
    return a.length
}