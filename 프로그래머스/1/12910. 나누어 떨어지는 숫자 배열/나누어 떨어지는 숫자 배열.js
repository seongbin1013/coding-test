function solution(arr, divisor) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) { // 배열의 각 요소가 divisor로 나누어 떨어지면 
            answer.push(arr[i]) // 배열 push 매서드 사용하여 배열에 값을 추가함
        } 
    }
    if(answer.length === 0) { // 만약 나누어 떨어지는 값이 없으면 -1 반환
        return [-1]
    }
    return answer.sort((a,b) => a-b) // 오름차순 
}