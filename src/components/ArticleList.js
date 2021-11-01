import React from "react";
import Article from "./Article";

function ArticleList({post}){
   return<main>
       {post.map((ele)=>{
         return <Article key={ele.id} title={ele.title} date={ele.date} preview={ele.preview}/>
       })}
   </main>
    
}

export default ArticleList;