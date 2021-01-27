import Head from "next/head";
import Link from "next/link";
import { message } from "../components/message";

import styles from "../styles/Home.module.css";
function Page({ stars }) {
  const onMessage = () => {
    message("message" + ~~(Math.random() * 100));
  };
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
          <button className="btn ml-10" type="button" onClick={onMessage}>
            msg
          </button>
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
