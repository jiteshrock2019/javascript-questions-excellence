// 1. QUESTION NUMBER ONE , print the even numbers 
function findEven(num){
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

console.log(findRepeated(arr))






// 4. QUESTION NUMBER FOUR, Write a sample code to call this rest api and display the result

async function getPosts(url){
    try {
        let res = await fetch(url);
        return await res.json();
      
    } catch (error) {
//         console.log(error);
    }
}

let url = 'https://my-json-server.typicode.com/typicode/demo/posts';
getPosts(url).then( posts => console.log(posts))
