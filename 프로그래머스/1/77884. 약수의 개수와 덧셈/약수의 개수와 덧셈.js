function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) { // left 부터 right 까지 반복
        if (Math.sqrt(i) % 1 === 0) { // 약수가 홀수인 매개변수를 찾을려면 제곱수를 구하면 됨.
            answer -= i; // 약수가 홀수일때 -
        } else {
            answer += i; // 짝수일떄 +
        } 
    }
    return answer;
}