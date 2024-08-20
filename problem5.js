function getMiddle(str) {
    //console.log(str.length)
    if (str.length % 2 !== 0) {         //odd
        let length = str.length
        let middleNUm = Math.floor(length / 2)
        console.log(str[middleNUm]) //str[1]

    } else {                             //even
        let length = str.length;
        let middleNUm = length / 2;
        let output = str[middleNUm-1] + str[middleNUm];
        console.log(output)
    }
}
getMiddle("aba")     //b
getMiddle("simran")