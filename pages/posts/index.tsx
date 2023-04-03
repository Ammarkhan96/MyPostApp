import Head from "next/head";
import styles from '../../styles/Posts.module.css'
import Link from "next/link";


type Obj = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getStaticProps = async() => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data:Obj[] = await res.json()

    return {
        props: {
            posts: data
        }
    }
}

const Posts = ({posts} : {posts:Obj[]} ) => {
    return (
        <>
        <Head>
            <title>Posts</title>
            <meta name="keywords" content="listing"/>
        </Head>
        <h1>Posts</h1>
        {posts.map(post=> {
            return(
                <Link href={"/posts/"+post.id}>
                    <div key={post.id} className={styles.posts}>
                        <h3>{post.title}</h3>
                    </div>
                </Link>
            )
        })}
        </>
    )
    
}

export default Posts;