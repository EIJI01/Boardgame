import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClickReward = useCallback(() => {}, []);
  return (
    <main className="text-black h-full text-xl grid grid-flow-row auto-rows-max">
      <div className="h-40 bg-black/20 flex justify-center items-center rounded-lg"></div>
      <Button
        actionLabel="กดเพื่อดูรางวัล >>>"
        onclick={handleClickReward}
        customStyle="w-fit mx-auto mt-2 px-3 hover:bg-opacity-50 duration-500 hover:scale-x-110"
      />
      <div>row3</div>
    </main>
  );
}
