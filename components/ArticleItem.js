import React from 'react'
import Link from "next/link"
import articleStyles from "../styles/Article.module.css"

export const ArticleItem = ({article, key}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card} key={key}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
