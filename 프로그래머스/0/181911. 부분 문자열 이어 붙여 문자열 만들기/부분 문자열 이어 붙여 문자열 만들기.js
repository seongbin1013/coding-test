function solution(my_strings, parts) {
    return my_strings.map((e,i) => e.substring(parts[i][0], parts[i][1] +1)).join("")
}