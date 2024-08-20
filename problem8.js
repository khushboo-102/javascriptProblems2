function descendingOrder(num) {
    let newStr = String(num)          //convert number to string
    // console.log(newStr)
    let arry = newStr.split("")  //convert string to array 
    // console.log(arry)
    let decArr = arry.sort(function (x, y) { return y - x }) // using sort method for descending order
    // console.log(decArr)
    let joinArr = decArr.join("") //using join method for join the decArr(join method is use for convert arry as string)
    //console.log(newArry)
    return joinArr
}
console.log(descendingOrder(86554438))





