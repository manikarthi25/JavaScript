console.log("Fetch - API Example")
const api = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(api, {method : "GET"})
     .then(response => response.json())
     .then(json => console.log(json))
     .catch(error => console.log(error));