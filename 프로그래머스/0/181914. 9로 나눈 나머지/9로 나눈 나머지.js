function solution(n) {
    let answer = 0
    const arr = n.split("")
    for (let i = 0; n.length > i; i++) {
          answer += Number(arr[i]);
    }
    return answer % 9
}