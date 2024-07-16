import { roboto } from "@/styles/fonts/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${roboto.className} bg-dark-primary text-dark-text`} >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
