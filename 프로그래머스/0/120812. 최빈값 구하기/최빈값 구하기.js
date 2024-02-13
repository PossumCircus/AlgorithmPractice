// function solution(array) {
//     const sorted = [...array].sort((a,b)=>a-b)
//     const setted = Array.from(new Set([...sorted]))
//     const mapped = setted.map(v => [v, 0])
//     sorted.forEach( v => {
//         if(setted.includes(v)){
//             console.log(mapped[setted.indexOf(v)][1]+1)
//             mapped[setted.indexOf(v)][1]++
//         }
//     })
//     const count = mapped.map(x => x[1])
//     const maxArr = count.filter( v => v === Math.max(...count))
    
//     if(maxArr.length >1) return -1
//     if(maxArr.length === 1) return Math.max(...count)
// }
function solution(array) {
    const countMap = {};
    
    // 배열을 순회하면서 각 숫자의 빈도를 countMap에 기록합니다.
    array.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    let maxCount = -1;
    let mode = -1;

    // countMap을 순회하면서 최빈값을 찾습니다.
    for (const num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mode = num;
        } else if (countMap[num] === maxCount) {
            // 최빈값이 여러 개인 경우
            mode = -1;
        }
    }

    return parseInt(mode);
}