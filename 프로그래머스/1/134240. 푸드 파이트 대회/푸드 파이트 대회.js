function solution(food) {
    var left = '';
    
    for(let i = 1; i < food.length; i++) {
        left += i.toString().repeat(Math.floor(food[i] / 2))
    }
    
    let right = left.split("").reverse().join("")
    
    return left + "0" + right
}