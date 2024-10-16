function solution(s) {
    let mid = Math.floor(s.length / 2); // 가운데 인덱스 계산
    return s.length % 2 === 0 
        ? s.substring(mid - 1, mid + 1) // 짝수일 때: 가운데 두 글자 추출
        : s.substring(mid, mid + 1); // 홀수일 때: 가운데 한 글자 추출
}