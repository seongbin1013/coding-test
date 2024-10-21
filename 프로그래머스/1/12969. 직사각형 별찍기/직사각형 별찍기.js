process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number) // 공백 기준으로 나누고 숫자형으로 변경
    const row = "*".repeat(n) // '*' 문자를 n번 반복한 문자열을 row에 저장 (가로줄을 만든다고 생각하면 됨)
    for(let i = 0; i < m; i++) { // m번 반복하면서 각 줄(row)을 출력하여 세로줄을 생성
        console.log(row) // 한 줄씩 생성 
    }
});