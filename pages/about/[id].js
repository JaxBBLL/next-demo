import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>next.js with tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <p className="py-10">query: {id}</p>
        <Link href="/">
          <a className="btn">home</a>
        </Link>
        <Link href="/about">
          <a className="btn ml-10">about</a>
        </Link>
      </main>
    </>
  );
}
