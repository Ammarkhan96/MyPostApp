type Obj = {
    userId: number
    id: number
    title: string
    body: string
}

export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data:Obj[] = await res.json()

    const paths = data.map((post) => {
        return {
            params: {id: post.id.toString()}
        }
    })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async(context:any) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"+id)
    const data:Obj = await res.json()

    return {
        props: {
            post:data 
        }
    }
}

const Details = ({post} : {post:Obj}) => {
    return (
      <div>
        <h2>Post Details</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
}

export default Details