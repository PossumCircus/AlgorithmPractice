function solution(a, b) {
    
    const length = Math.abs(a-b)+1;
    const feSum = a+b;
    
   //길이가 짝수라면 (첫+끝)x(Math.floor(길이/2))
    //길이가 홀수라면 (첫+끝)x(Math.floor(길이/2))+(첫+끝)/2
    
   if(length%2 === 0)return feSum*Math.floor(length/2)
   if(length%2 === 1)return feSum*Math.floor(length/2)+feSum/2
}