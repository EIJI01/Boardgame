import { UserProvider } from "@/@core/context/userContext";
import LayoutPage from "@/@core/components/LayoutPage";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </UserProvider>
  );
}
