function solution(strArr) {
    return strArr.map((data,idx) => idx % 2===0 ? 
         data.toLowerCase() :data.toUpperCase() )
}
