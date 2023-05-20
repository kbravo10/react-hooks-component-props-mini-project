import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const article = posts.map((prop) => {
        return(
            <Article key={prop.id} title={prop.title} date={prop.date} preview={prop.preview} />
        )
    });
    return(
        <main>
            {article}
        </main>
    )
}


export default ArticleList