function solution(s) {
   return [...s.split('')].sort().filter((element, index, calledArray)=> calledArray.indexOf(element) === index && calledArray.lastIndexOf(element) === index).join('')
   
}