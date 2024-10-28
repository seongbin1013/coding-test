function solution(sizes) {
    let max = 0 // 가장 긴 쪽 길이
    let min =  0 // 가장 작은 쪽
    
    for(let size of sizes) { // for(let 변수 of 배열)
        const [a,b] = size 
        
        const long = Math.max(a,b) // 긴 쪽
        const short = Math.min(a,b) // 짧은 쪽 
        
        max = Math.max(max, long) // 가장 긴 쪽 가로 길이
        min = Math.max(min, short) // 가장 짧은 쪽 세로 길이
    }
    return max * min 
}