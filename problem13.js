function mul10(array){
    let newarr = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 10 === 0)
          newarr.push(array[i])
        }
         return newarr
        }
console.log(mul10([10,20,5,6]))