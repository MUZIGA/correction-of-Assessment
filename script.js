// QN1
//By use of function
async function fetchAuthorsSithArticles(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user");
    const posts=await response.json();
    const author={};
    posts.forEach(post=>{
        const userId=post.user.id;
        author[userId]={
            id:post.user.id,
            name:post.user.name,
            articles:[]
        }
author[userId].articles.push({
            id:post.id,
            title:post.title,
            body:post.body,
            comments:post.comments.map(c=>({
                id:c.id,
                content:c.body
            })),
});
    }
)
const authorsArray=Object.values(author);
return authorsArray;
}
fetchAuthorsSithArticles().then(authors=>{
    console.log(JSON.stringify(authors,null,2));
});












