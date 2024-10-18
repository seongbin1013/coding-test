function solution(arr1, arr2) {
    let answer = [] // // 결과를 저장할 빈 배열 생성
    for(let i = 0; i < arr1.length; i++) { // arr1 과 arr2의 길이는 같음. i는 arr1의 인덱스 
        let row = [] // 현재 행의 합을 저장할 빈 배열 생성
        for(let j = 0; j < arr1[i].length; j++) { // j는 i의 배열의 인덱스
            row.push(arr1[i][j] + arr2[i][j]); // 같은 위치의 값을 더함.
        }
        answer.push(row) // 완성된 행을 결과 배열에 추가
    }
    return answer
}