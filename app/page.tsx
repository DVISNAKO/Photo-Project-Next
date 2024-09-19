"use client";

import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useContext } from "react";
import { galeryData } from "./utils/constants";
import { LanguageState } from "./utils/context";
import IMG1 from "./image/Home/IMG_3829_2.jpg";

export default function GAlerijaPage() {
  const { language, setLanguage } = useContext(LanguageState);

  return (
    <div className="flex justify-center items-center h-full my-10 flex-wrap gap-5 mx-10 border-black">
      <div className="flex flex-col h-screen w-[450px] items-center justify-center">
        <h1 className="z-10 text-7xl">Laine Volcīte</h1>
        <Image src={IMG1} alt="foto" className="-rotate-6 " />
        <h1 className="z-10 text-7xl">PORTFOLIO</h1>
        <h3 className="z-10 mt-10">FOTOGRĀFS RĒZEKNĒ</h3>
      </div>
    </div>
  );
}
