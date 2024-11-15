function solution(arr, budget) {
    const sorted = [...arr].sort((a, b) => a - b);
    return sorted.reduce((acc, cur, i) => {
        if(acc.sum +cur <= budget){
            acc.sum += cur
            acc.count++
        }
        return acc
    }, { sum : 0, count : 0}).count

}
