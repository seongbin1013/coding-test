function solution(number) {
    let count = 0 
    
    for(let i = 0; i < number.length -2; i++) {
        for(let j = i + 1; j < number.length - 1; j++) { 
            for(let k = j + 1; k < number.length; k++) { 
                if (number[i] + number[j] + number[k] === 0) { // 합이 0 이면 삼총사 
                    count++ // count 증가
                }
            }
        }
    }
    return count;
}