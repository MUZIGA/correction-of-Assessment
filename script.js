// QN1
//By use of function


async function fetchAuthorswithArticles() {

   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user');
const posts = await res.json();

const  author ={}

}