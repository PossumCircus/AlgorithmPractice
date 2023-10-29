function solution(s) {
   return [...s.split(' ')].map((cur, index, array) => {
       if(cur === 'Z') return -array[index-1]
       else return Number(cur)
   }).reduce((acc, cur) => acc+cur)
}