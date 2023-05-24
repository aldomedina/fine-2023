import Image from "next/image";
import MetaballsScene from "@/3D/scenes/Metaballs";
import NewsLetter from "@/components/NewsLetter";
import s from "./style.module.scss";

import { IBM_Plex_Mono } from "@next/font/google";
export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  style: ["italic", "normal"],
});

const TestPage = () => {
  return (
    <div style={{ height: "100%", width: "100%" }} className={ibm.className}>
      <MetaballsScene />

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
        <a className={s.link} href="mailto:hello@fine.digital">
          EMAIL
        </a>
      </div>
      <div className={s.newsletter}>
        <NewsLetter />
      </div>
    </div>
  );
};

export default TestPage;
