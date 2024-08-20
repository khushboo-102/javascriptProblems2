function mulnot10(array){
    let newarr = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 10 !== 0)
          newarr.push(array[i])
        }
         return newarr
        }
console.log(mulnot10([10,20,5,6,1,100,80]))