function solution(arr)
{
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        // 첫번째 인덱스는 무조건 추가, 이전 값과 현재 값이 다를 때만 answer에 추가
        if(i === 0 || arr[i] !== arr[i-1]) {
            answer.push(arr[i])
        }
    }

    return answer;
}