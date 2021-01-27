import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
function Page({ stars }) {
  return (
    <>
      <Head>
        <title>next.js with tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className={styles.title}>next.js with tailwindcss</h1>
        <div className="py-10 text-gray-600">next.js star {stars}</div>
        <div className="flex">
          <Link href="/about">
            <a className="btn">about</a>
          </Link>
        </div>
      </main>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
