import { AppProps } from "next/app";
import "../src/styles/globals.css";
import Navigation from "../src/comp/nav/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.9)",
      }}
      className="h-screen"
    >
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
