function solution(d, budget) {
    let answer = 0;
    let depart = d.sort((a,b) => a-b) // 내림차순으로 먼저 바꿔줌
    
    for(let i = 0; i < depart.length; i++) { // 
        if(budget >= depart[i] ) { // 예산이 신청금액 보다 크거나 같으면
            budget -= depart[i] // 마이너스 해준다
            answer ++ // true면 지원 횟수 추가
        } else {
            break
        }
    }

    return answer;
}