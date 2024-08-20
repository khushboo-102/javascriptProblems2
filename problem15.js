function filname (str){
    let newStr = ""
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0)
            newStr = newStr + str[i]
    }
    return newStr
}
console.log(filname("Khushboo"))