function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;

    for (const word of goal) {
        // cards1의 현재 카드와 goal 단어가 일치하는 경우
        if (idx1 < cards1.length && cards1[idx1] === word) {
            idx1++;
        } 
        // cards2의 현재 카드와 goal 단어가 일치하는 경우
        else if (idx2 < cards2.length && cards2[idx2] === word) {
            idx2++;
        } 
        // 어느 카드 덱에서도 일치하지 않는 경우
        else {
            return "No";
        }
    }

    // 모든 단어를 순서대로 사용했다면 "Yes"
    return "Yes";
}
