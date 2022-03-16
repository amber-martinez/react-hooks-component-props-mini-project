import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
    // console.log(blogData.posts)
    const posts = blogData.posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })

    return (
        <main>
            {posts}
        </main>
    )
}

export default ArticleList