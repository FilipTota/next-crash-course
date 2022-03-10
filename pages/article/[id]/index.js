/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from 'next/router'

export const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go back</Link>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {article}
    }
}





// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {article}
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const article = await res.json()

//     const ids = article.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     console.log(`typeof paths`, typeof paths)

//     return {
//         paths:,  ------------------> baca error za paths (extra keys)
//         fallBack: false,
//     }
// }

export default article