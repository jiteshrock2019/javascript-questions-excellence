// 4. QUESTION NUMBER FOUR, Write a sample code to call this rest api and display the result

async function getPosts(url){
    try {
        let res = await fetch(url);
        return await res.json();
      
    } catch (error) {
        console.log(error);
    }
}

let url = 'https://my-json-server.typicode.com/typicode/demo/posts';
getPosts(url).then(posts => console.log(posts))



// OUTPUT IS LIKE => KEYS OF ID IN SORTED ORDER 
// [[object Object] {
//     id: 1,
//     title: "Post 1"
//   }, [object Object] {
//     id: 2,
//     title: "Post 2"
//   }, [object Object] {
//     id: 3,
//     title: "Post 3"
//   }]