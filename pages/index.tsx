import Head from "next/head";
import Image from "next/image";
import MetaballsScene from "@/3D/scenes/Metaballs";
import NewsLetter from "@/components/NewsLetter";
import s from "@/styles/Home.module.scss";

import { IBM_Plex_Mono } from "@next/font/google";
import classNames from "classnames";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  style: ["italic", "normal"],
});

const HomePage = () => {
  return (
    <>
      <Head>
        <title>FINE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="On-chain multi-player creative experiences"
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classNames(s.wrapper, ibm.className)}>
        <div className={s.canvas}>
          <MetaballsScene />
        </div>

        <div className={s.socials}>
          <a
            className={s.image}
            href="http://a16zcrypto.com/css23"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/a16z.png" width={65} height={51} alt="a16zlogo" />
          </a>
          <div className={s.separator} />
          <a className={s.link} href="https://twitter.com/fine_3d">
            TWITTER
          </a>
          <div className={s.separator} />
          <a className={s.link} href="https://discord.gg/itsfine">
            DISCORD
          </a>
          <div className={s.separator} />
          <a className={s.link} href="mailto:far@fine.digital">
            EMAIL
          </a>
        </div>
        <div className={s.newsletter}>
          {/* <NewsLetter /> */}
          <div className={s.link}> COMING SOON...</div>
        </div>
        {/* <div className={s.projects}>
          <div className={s.card}>
            <a className={s.link} href="https://solids.live">
              <Image
                src="/solids-card.png"
                width={100}
                height={100}
                alt="solids project"
              />

            </a>
          </div>
          <div className={s.card}>
            <a className={s.link} href="https://wargames.app">
              <Image
                src="/wargames-card.png"
                width={100}
                height={100}
                alt="solids project"
              />

            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
