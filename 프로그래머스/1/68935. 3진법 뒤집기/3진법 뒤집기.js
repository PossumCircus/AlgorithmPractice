function solution(n) {
    const arr = []
   while (n > 0) {
        arr.unshift(n % 3);  // 나머지를 배열에 추가
        n = Math.floor(n / 3);  // 몫을 다시 n에 저장
    }
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+= arr[i]*(3**i)
    }
    return sum
}