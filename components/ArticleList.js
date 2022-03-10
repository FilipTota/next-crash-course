import React from 'react'
import ArticleItem from './ArticleItem'
import articleStyles from "../styles/Article.module.css"

export const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article, i) => <ArticleItem article={article} key={i}/>)}
        </div>
    )
}

export default ArticleList
