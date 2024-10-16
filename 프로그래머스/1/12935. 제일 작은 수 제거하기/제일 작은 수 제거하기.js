function solution(arr) {
    
    const minValue = Math.min(...arr)
    const answer = arr.filter(num => num !== minValue)
    
    if(answer.length === 0) { 
        return [-1] 
    }
    return answer;
}