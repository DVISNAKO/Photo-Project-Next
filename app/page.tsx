"use client";

import Image from "@/node_modules/next/image";
import { useContext } from "react";
import { LanguageState } from "./utils/context";
import IMG1 from "./image/Home/IMG_3829_2.jpg";
import Title from "./components/PageTitle/Title";

export default function GAlerijaPage() {
  const { language, setLanguage } = useContext(LanguageState);

  return (
    <div className="flex justify-center items-center h-screen my-10 flex-wrap gap-5 mx-10 border-black">
      <div className="flex flex-col min-w-[250px] items-center justify-center">
        <h1 className="es:text-5xl z-10 md:z-10 text-7xl">Laine Volcīte</h1>
        <Image src={IMG1} alt="foto" className="-rotate-6 w-[450px]" />
        <h1 className="es:text-5xl z-10 md:z-10 text-7xl">PORTFOLIO</h1>
        <Title titleLV="FOTOGRĀFS RĒZEKNĒ" titleRus="ФОТОГРАФ ИЗ РЕЗЕКНЕ" />
      </div>
    </div>
  );
}
