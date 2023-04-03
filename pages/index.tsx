import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Books | About</title>
        <meta name="keywords" content='books' />
      </Head>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sapiente, nostrum, atque ipsa doloremque obcaecati illum et commodi neque nemo minima modi quod inventore excepturi. Repellendus asperiores nobis tempora sed!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestiae dolore, illum modi illo culpa nostrum asperiores porro delectus perspiciatis inventore, dignissimos unde totam blanditiis explicabo quasi sint ab quo?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, voluptate cum labore quod eum totam tempora quo magnam ut voluptas repudiandae temporibus, et reprehenderit inventore dicta ipsam earum reiciendis vero?
      </p>
      <Link href="/posts">
        <p className={styles.btn}>See Posts</p>
      </Link>
    </>
  )
}
