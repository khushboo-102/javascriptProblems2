function likes (arry){
      if (arry.length=== 0){
        return "`no one likes this`"
      }else if(arry.length === 1){
        return "Swami like this"
      } else if (arry.length=== 2){
        return "Swami, Sudha like this"
      } else if (arry.length=== 3){
        return "Swami, Sudha, Shiva like this"
      } else if (arry.length=== 4){
        return"Swami, Sudha and 2 others like this"
      }
     }  
     
     console.log(likes([]))
     console.log(likes(['Swami']))
     console.log(likes(['Swami', 'Sudha']))
     console.log(likes(['Swami', 'Sudha', 'Shiva']))
     console.log(likes(['Swami', 'Sudha', 'Shiva', 'Shruti']))