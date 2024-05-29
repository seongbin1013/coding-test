function solution(myString) {
    return myString.split("x").filter((data) => data !== "").sort()
}