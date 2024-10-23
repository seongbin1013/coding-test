function solution(t, p) {
    let answer = 0
    
    // t.length - p.length 한 이유는 문자열 t에서 p와 같은 길이만큼 잘라낼 수 있는 마지막 위치를 알기 위해
    for(let i = 0; i <= t.length - p.length; i++) {
        let divide = t.slice(i, i + p.length) // split() 매서드는 사용이 안됨. 그 이유는 문자, 문자열로 나누는 기능이기 때문
        
        if(parseInt(divide) <= parseInt(p)) {
            answer++
        }   
    }
    return answer;
}