// 2. QUESTION NUMBER TWO, find the maximum consecutive 1's in an array of 0's and 1's.
function maxOneInArray(a){
    let count = 0
    let max = 0
    
    for(let i = 0; i < a.length; i++){
      a[i] ==1 ? count++ : count = 0
  
        count>max ? max = count : 1    //"1" used to continue if condition is fail of ternary operator 
    }
    
    return max
  }
  
  let numbers = [0,1,1,11,1,1,1,0,1,1,1,1,1,0,0,0]
  
  console.log(maxOneInArray(numbers))