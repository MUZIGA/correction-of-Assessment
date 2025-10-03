// QN1
//By use of function

const { useId } = require("react");


async function fetchAuthorswithArticles() {

   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user');
const posts = await res.json();

const  author ={}

posts.forEach(post => {
  const userId = post.user.id;
  
  if (!author[userId]) {
    author[userId] = {
      id: post.user.id,
      name: post.user.name,
      articles: []
    };
    author[userId].articles.push(
        {
            id:post.id,
            title:post.title,
        comments:post.comments.map(c=> ({
            id:c.id,
            content.c.body,
        }
            ))

        }
    )
    const authorsArray=Object.values(author);
return authorsArray;
  }
  fetchAuthorsSithArticles().then(authors=>{
    console.log(JSON.stringify(authors,null,2));
});
}
