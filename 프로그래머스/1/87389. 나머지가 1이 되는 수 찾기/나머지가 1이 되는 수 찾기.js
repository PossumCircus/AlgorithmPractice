function solution(n) {
    let arr = [];
   for(let i = 2; i<n; i++){
       if(n%i === 1)  arr.push(i)
          
   }
     return Math.min(parseInt(arr))
}