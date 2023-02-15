import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import s from "@/styles/Home.module.scss";
import MovingSquares from "@/3D/scenes/MovingSquares";
import { ibm, syne } from "@/styles/fonts";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>FINE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="FINE allows creators to spontaneously generate, on-chain, 3D artifacts optimized for interoperable use across the Metaverse landscape, today and tomorrow."
        />
        <meta property="og:image" content="/socials-img.webp" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <MovingSquares />
        <div className={s.container}>
          <h2 className={classNames(ibm.className, s.h2)}>
            FINE is a web3 studio for generative and interoperable assets
          </h2>
          <h1 className={classNames(syne.className, s.h1)}>FINE</h1>
          <div className={s.bottom}>
            <a
              className={classNames(ibm.className, s.link)}
              href="https://twitter.com/fine_3d"
            >
              TWITTER
            </a>
            <div className={s.separator} />
            <a
              href="http://a16zcrypto.com/css23"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/a16z.png" width={100} height={83} alt="a16zlogo" />
            </a>
            <div className={s.separator} />
            <a
              className={classNames(ibm.className, s.link)}
              href="https://discord.gg/0xfar"
            >
              DISCORD
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
