function solution(A, B) {
    const arr = A.split('')
    
    function pushing(A){
     const pop = arr.pop()
     arr.unshift(pop)
    }
    
    let i = 0;
    
    while(i<A.length){
        if(arr.join('') === B){
            break;
        }
        pushing(A)
        i++
    }
    return (i === A.length && arr.join('') !== B ) ? -1 : i
}