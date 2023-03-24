import "@/styles/globals.css";
import "lazysizes";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
