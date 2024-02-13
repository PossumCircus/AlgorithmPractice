function solution(numlist, n) {
    return numlist
        .map((ele, index) => ({ value: Math.abs(ele - n), ele }))
        .sort((a, b) => (a.value - b.value || b.ele - a.ele))
        .map((item) =>item.ele);
}


// function solution(numlist, n) {
//     // 각 숫자와 n 사이의 거리를 계산하여 새로운 배열에 저장
//     const distanceArray = numlist.map(num => ({ num, distance: Math.abs(num - n) }));
    
//     // 거리가 같으면 더 큰 수를 기준으로 정렬
//     distanceArray.sort((a, b) => a.distance - b.distance || b.num - a.num);
    
//     // 정렬된 숫자들만 추출하여 반환
//     const result = distanceArray.map(item => item.num);
    
//     return result;
// }