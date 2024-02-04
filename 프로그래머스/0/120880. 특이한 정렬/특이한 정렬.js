// function solution(numlist, n) {
//     const mapped = numlist.map( (ele, index) => {
//           return {value : Math.abs(ele-n), index : index};
//     } )
//      mapped.sort((a,b)=>{
//         return a.value > b.value ? 1 : a.value < b.value ? -1 : a.index<b.index ? 1 :-1;
//     })
//      const result = mapped.map(function (el) {
//            return numlist[el.index];
// });
//     return result
// }

// function solution(numlist, n) {
//     const mapped = numlist.map((ele, index) => ({ value: Math.abs(ele - n), index }));

//     mapped.sort((a, b) => (a.value !== b.value ? a.value - b.value : b.index - a.index));

//     const result = mapped.map((el) => numlist[el.index]);

//     return result;
// }

function solution(numlist, n) {
    // 각 숫자와 n 사이의 거리를 계산하여 새로운 배열에 저장
    const distanceArray = numlist.map(num => ({ num, distance: Math.abs(num - n) }));
    
    // 거리가 같으면 더 큰 수를 기준으로 정렬
    distanceArray.sort((a, b) => a.distance - b.distance || b.num - a.num);
    
    // 정렬된 숫자들만 추출하여 반환
    const result = distanceArray.map(item => item.num);
    
    return result;
}