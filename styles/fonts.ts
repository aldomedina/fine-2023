import { Syne, IBM_Plex_Mono } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
});

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  style: ["italic", "normal"],
});
