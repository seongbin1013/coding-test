function solution(myString, pat) {
    let NewMystring = myString.toLowerCase()
    let NewPat = pat.toLowerCase()
    answer = NewMystring.includes(NewPat)
    return answer ? 1 : 0;
}