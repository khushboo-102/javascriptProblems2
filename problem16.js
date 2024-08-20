function fib(num) {
    let arry = [1, 1]
    for (let i = 2; i < num; i++) {
        arry[i] = arry[i - 1] + arry[i - 2]
    }
    return arry[arry.length - 1]

}
// console.log(fib(1))




function newFib(num){
    if (num===1 || num === 2){
        return 1
    }else 
    return newFib(num- 1) + newFib(num -2)
}
console.log(newFib(8))