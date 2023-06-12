import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>next.js with tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <h1>about page</h1>
        <Link href="/about/1">detail</Link>
      </main>
    </>
  );
}
