function solution(n)
{
 let answer = 0;
const splitted = n.toString().split('')
for(let i=0; i<splitted.length; i++) answer += parseInt(splitted[i])
 return answer
}