function valcount(before){
    const A = [...new Set(Array.from(before))]
    const B = A.map( (val, count ) => {
        return {val, count:0}
    })    
   for(let i = 0; i<A.length; i++){
       Array.from(before).find( (val) => {
       if(val === B[i].val){
           B[i].count++
       } 
   })
   }
    return B
}

function solution(before, after) {
   const BEFORE = valcount(before);
    const AFTER = valcount(after);
    const A = [];
    for(let i =0; i<BEFORE.length; i++){
        for(let j=0; j<AFTER.length; j++){
            if(BEFORE[i].val === AFTER[j].val && BEFORE[i].count === AFTER[j].count){
                A.push(1)
            }
        }
    }
    if(A.length === BEFORE.length){
        return 1
    } else return 0
}
