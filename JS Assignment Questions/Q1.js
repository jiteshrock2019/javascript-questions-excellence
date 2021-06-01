// 1. QUESTION NUMBER ONE , print the even numbers 
function findEven(num)
{
  let evenArr = []
    for(let i = 0; i<num.length; i++){
      if(num[i]%2 == 0)
        {
          evenArr.push(num[i]);
        }
    }
    return evenArr
  }
  
  let numbers = [1,2,3,4,5,6,7,32,,32,43,4]
  
  console.log(findEven(numbers))