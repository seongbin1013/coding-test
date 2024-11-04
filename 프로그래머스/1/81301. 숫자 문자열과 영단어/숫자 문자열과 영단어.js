function solution(s) {
    let answer = "";
    let number = { 
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, 
        "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
    };  
    let str = "";
    
    for (let i of s) {
        str += i;
        
        if (number.hasOwnProperty(str)) {
            answer += number[str];
            str = "";  // 일치하는 단어를 찾으면 str 초기화
        } else if (!isNaN(i)) {
            // i가 숫자일 경우 그대로 추가
            answer += i;
            str = "";  // 숫자가 입력될 경우에도 str 초기화
        }
    }
    
    return Number(answer);
}