function solution(a, b) {
    // 1. 기준 날짜와 입력 날짜 생성
    const startDate = new Date(2016, 0, 1); // 2016년 1월 1일 (월은 0부터 시작)
    const targetDate = new Date(2016, a - 1, b); // 입력 날짜 생성 (a월은 0 기반)

    // 2. 두 날짜 사이의 차이를 계산 (밀리초 단위)
    const diffInMs = targetDate.getTime() - startDate.getTime(); // 밀리초 차이
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // 일 단위로 변환

    // 3. 요일 계산 (2016년 1월 1일은 금요일 -> 인덱스 5부터 시작)
    const dayOfWeek = (5 + diffInDays) % 7; // 0: SUN, ..., 6: SAT

    // 4. 요일 이름 매핑
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[dayOfWeek];
}

// 예제 실행
console.log(solution(5, 24)); // "TUE"
