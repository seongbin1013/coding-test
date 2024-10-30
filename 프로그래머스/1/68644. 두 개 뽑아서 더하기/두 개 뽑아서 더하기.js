function solution(numbers) {
    let answer = [];
    // 서로 다른 인덱스끼리 더해 answer 배열에 추가
    for(let i = 0; i < numbers.length; i++) { 
        for(let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    // 오름차순, 중복된 숫자 제거
    return answer.sort((a,b) => a-b).filter((value,index) => answer.indexOf(value) === index) 
}