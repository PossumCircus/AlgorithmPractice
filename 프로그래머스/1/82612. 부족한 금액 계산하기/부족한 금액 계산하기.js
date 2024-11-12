function solution(price, money, count) {
    const arr = []
    for(let i =1; i<= count; i++){
        arr.push(price*i)
    }
    let sum = arr.reduce( (acc,cur,i) => i<count ? acc+cur : acc)
    
    return sum > money ? sum-money : 0
}