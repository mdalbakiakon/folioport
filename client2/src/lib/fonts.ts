import localFont from "next/font/local";

export const fontHead = localFont({
  src: "../fonts/micro.woff2",
  variable: "--font-head-loaded",
  display: "swap",
});

export const fontBody = localFont({
  src: "../fonts/iMedium.woff2",
  variable: "--font-body-loaded",
  display: "swap",
});
