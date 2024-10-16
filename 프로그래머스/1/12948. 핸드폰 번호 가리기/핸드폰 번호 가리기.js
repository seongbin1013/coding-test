function solution(phone_number) {
    let number = phone_number.slice(0,-4); // slice 매서드: 첫글자 부터 마지막 4글자를 뺀 모든 글자
    return phone_number.replace(number,"*".repeat(number.length)) // replace 매서드: number 대신 "*"로 변경. repeat 매서드: 문자열을 주어진 횟수만큼 반복하여 새로운 문자열을 생성함.
}