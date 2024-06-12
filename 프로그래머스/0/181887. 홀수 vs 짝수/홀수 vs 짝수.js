function solution(num_list) {
    let 홀수 = 0
    let 짝수 = 0
    num_list.map((v,idx) => {
        (idx % 2 === 0) ? 짝수 += v : 홀수 += v
    })
     return 홀수 > 짝수 ? 홀수 : 짝수
}