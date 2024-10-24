function solution(s) {
    let answer = '';
    let words = s.split(" ") // 공백으로 단어를 구분함
    
    for(let i = 0; i < words.length; i++) { // 각 단어에 대해 반복
        let word = words[i]; 
        
        for(let j = 0; j < word.length; j++) { // 단어 내 각 문자 길이에 대해 반복
            if(j % 2 === 0) {
                answer += word[j].toUpperCase() // 문자 인덱스가 짝수이면 대문자
             } else {
                answer += word[j].toLowerCase() // 홀수이면 소문자
             }            
        }
        
        if (i !== words.length - 1) { // 마지막 단어가 아니면 공백을 추가함
            answer += ' ';
        }
    }
    return answer;
}