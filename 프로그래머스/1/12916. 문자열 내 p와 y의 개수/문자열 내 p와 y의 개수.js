function solution(s){
    
  let answer = true;
    
  s = s.toUpperCase();
    
  let num = 0;
  for(var i = 0; i < s.length; i++){
    if(s[i] === 'P') num++; // p이면 갯수 더하기
    if(s[i] === 'Y') num--; // y이면 갯수 빼기
  } 
  answer = (num === 0); // p, y 갯수가 같으면 0 (p가 많으면 양수, 반대 음수)

  return answer;
}