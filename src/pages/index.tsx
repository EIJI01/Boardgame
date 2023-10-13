import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-black h-full text-xl grid grid-flow-row auto-rows-max">
      <div className="h-40 bg-black/20 flex justify-center items-center rounded-lg"></div>
      <Button actionLabel="กดเพื่อดูรางวัล >>>" outline />
      <div>row3</div>
    </main>
  );
}
