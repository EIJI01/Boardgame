import { UserProvider } from "@/context/userContext";
import CircleLayout from "@/components/layouts/CircleLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CircleLayout>
        <Component {...pageProps} />
      </CircleLayout>
    </UserProvider>
  );
}
