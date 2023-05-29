import { AppProps } from "next/app";
import "../src/styles/globals.css";
import Navigation from "../src/comp/nav/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
