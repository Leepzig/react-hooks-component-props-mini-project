
import React from "react"
import Article from "./Article"


const ArticleList = ({posts}) => {
  console.log(posts[0])
  const articleArray = posts.map(post => <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>)
  return (
    <main>
      {articleArray}
    </main>
  )
}

export default ArticleList