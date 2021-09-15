import "../styles/globals.css";
import type { AppProps } from "next/app";
import CurrentColorProvider from "../hooks/useCurrentColor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentColorProvider>
      <Component {...pageProps} />
    </CurrentColorProvider>
  );
}
export default MyApp;
