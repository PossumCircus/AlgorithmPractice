function solution(participant, completion) {
    const hash = {};

    // 참가자의 이름을 해시 테이블에 저장하고 등장 횟수를 카운트
    participant.forEach(name => {
        hash[name] = (hash[name] || 0) + 1;
    });

    // 완주자의 이름에 대해 등장 횟수를 감소
    completion.forEach(name => {
        hash[name] -= 1;
    });

    // 해시 테이블에서 값이 1인 이름을 찾기
    for (let key in hash) {
        if (hash[key] === 1) {
            return key; // 완주하지 못한 선수의 이름 반환
        }
    }
}
