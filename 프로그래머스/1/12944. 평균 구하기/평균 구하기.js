function solution(arr) {
    let len = arr.length
    let answer = 0
    
    for (i=0; i<len; i++) {
       answer +=arr[i]
    }
    answer = answer/ len
    return answer;
}