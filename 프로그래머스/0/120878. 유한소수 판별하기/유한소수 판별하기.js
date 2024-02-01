function solution(a, b) {

    const gcd = (a,b) => a%b === 0 ? b : gcd(b, a%b);
    const lcm = (a, b) => a * b / gcd(a, b);


  let num =  b/gcd(a,b);
    
  while (num % 2 === 0) num /= 2;
  while (num % 5 === 0) num /= 5;

  return num === 1 ? 1 : 2;
}