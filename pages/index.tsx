import Head from "next/head";
import Image from "next/image";

import s from "@/styles/Home.module.scss";
import MovingSquares from "@/3D/scenes/MovingSquares";
import classNames from "classnames";
import { useState } from "react";
import { Syne, IBM_Plex_Mono } from "@next/font/google";
import toast from "react-hot-toast";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  style: ["italic", "normal"],
});

export default function Home() {
  // Subscription
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      toast.error(error);
      setIsSubmitting(false);
      return;
    }
    toast.success("Success! 🎉 You are now subscribed to our newsletter.");

    setEmail("");
    setIsSubmitting(false);
  };
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

        <div className={classNames(ibm.className, s.container, s.footer)}>
          <div className={s.bottom}>
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
              <a
                className={classNames(ibm.className, s.link)}
                href="https://twitter.com/fine_3d"
              >
                TWITTER
              </a>
              <div className={s.separator} />
              <a
                className={classNames(ibm.className, s.link)}
                href="https://discord.gg/itsfine"
              >
                DISCORD
              </a>
              <div className={s.separator} />
              <a
                className={classNames(ibm.className, s.link)}
                href="mailto:hello@fine.digital"
              >
                EMAIL
              </a>
            </div>
            <form className={s.newsletter} onSubmit={handleSubscribe}>
              <div className={s.inputWrapper}>
                <p className={s.label}>Subscribe to our newsletter</p>
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  className={s.input}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className={s.button}
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
