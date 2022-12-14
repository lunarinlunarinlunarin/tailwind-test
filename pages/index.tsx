import Head from "next/head";
import Image from "next/image";
import SocketBridge from "./SocketBridge";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col lg:flex-row w-full items-center justify-center space-x-2">
          <span>Left</span>
          <span>Right</span>
          <SocketBridge />
        </div>
      </main>
    </div>
  );
}
