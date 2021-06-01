// 3. QUESTION NUMBER THREE, Write a js code to find the repeated number. find the repeated number in the array of consecutive whole no in the array of 101 numbers 
function findRepeated(num){
    for(let i=0; i<num.length-1; i++){
     if(num[i+1] - num[i] == 0){
        return num[i]
        }
     }
  }
  
  
  let arr = []
  for( i = 0; i < 101; i++){
    arr.push(i)
  }
  
  arr.splice(7,1,6)
   console.log(arr)
  
  console.log("The repeated no in the array is => ",findRepeated(arr))
  