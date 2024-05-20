'use client'

import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useContext } from "react";
import { galeryData } from "./utils/constants";
import { LanguageState } from "./utils/context";

export default function GAlerijaPage() {
  const {language, setLanguage} = useContext(LanguageState);

  return (
    <div className="flex justify-center items-center h-full my-10 flex-wrap gap-5 mx-10 border-black">
      {galeryData.map((item) => (
        <div
          key={item.title}
          className="cursor-pointer hover:translate-y-2 hover:text-pink-400 basis-1/4"
        >
          <Link href={item.route}>
              <Image
                className="flex justify-center items-center object-cover h-[500px] min-w-[350px]"
                src={item.img}
                alt={item.title}
              />
          </Link>
          <h2 className="text-xl text-center mt-2">
        {language ? (
          <>{item.title}</>
        ) : (
          <>{item.titleRus}</>
        )}
      </h2>
        </div>
      ))}
    </div>
  );
}
