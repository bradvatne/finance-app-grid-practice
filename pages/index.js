import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finance Grid Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <div className="left">Finarium</div>
        <div className="center">
          <h1>Dashboard</h1>
          <p className="date">
            <span className="grey">Showing for: </span>
            <strong>20 Feb 2018 - 27 Feb 2018</strong>
          </p>
          <div className="icons">
            d
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
}
