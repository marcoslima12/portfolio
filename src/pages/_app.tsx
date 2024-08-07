import { NavProvider } from "@/contexts/navContext";
import { ThemeProvider } from "@/contexts/themeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavProvider>
        <Component {...pageProps} />
      </NavProvider>
    </ThemeProvider>
  );
}
