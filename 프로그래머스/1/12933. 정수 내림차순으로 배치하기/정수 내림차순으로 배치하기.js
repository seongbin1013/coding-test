function solution (n) {
    let answer = n +""; // 문자열로 변환
    let answer2 = answer.split(''); // 배열들을 쪼갬
    return Number(answer2.sort((a,b)=>b-a).join('')); //내림차순,배열들을 다시 합침
 }