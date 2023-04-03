import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
      <div className="logo">
        <Image src='/my_book.jpeg' width={100} height={50} alt={""} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href='/posts'>Posts Detail</Link>
      </nav>
    )
}

export default Navbar