import Head from "next/head";

export default function Home() {
  return (
    <div className="app-container">
      <Head>
        <title>Sass Grid Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <div className="left">...</div>
        <div className="center">
          <div className="title">
            <h1>...</h1>
            <p className="date">...</p>
          </div>
          <div className="icons">
            <div className="icon-item">...</div>
            <div className="icon-item">...</div>
            <div className="icon-item">...</div>
            <div className="icon-item">...</div>
          </div>
          <div className="balance">...</div>
          <div className="expenses">...</div>
          <div className="overview">...</div>
        </div>

        <div className="right">
          <div className="user">
            <div className="notifications">...</div>
            <div className="account">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
