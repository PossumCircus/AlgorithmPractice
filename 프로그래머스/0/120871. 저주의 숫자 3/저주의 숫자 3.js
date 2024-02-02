function solution(n) {
    const arr =[];

    let i = 1;
    while(true){
        if(arr.length===n){
            break;
        }
        if(i%3!==0 && !i.toString().includes(3)){
            arr.push(i)
        }
        i++;
        
    }
    return arr[n-1]
}