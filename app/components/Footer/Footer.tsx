import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { LanguageProps } from "@/app/utils/type";
import { Instagram, Tiktok } from "@/app/utils/link";
import Link from "@/node_modules/next/link";


const Footer = ({language }:LanguageProps) => {
 
  return (
    <div className="w-full flex justify-center items-center text-[25px] mt-auto h-20 bg-gradient-to-r from-rose-300 to-pink-500">
      <h2 className="flex text-center"> {language ? <>SOCIĀLIE TĪKLI </>: <>СОЦИАЛЬНЫЕ СЕТИ</>}</h2>
      <div className="flex gap-1 ml-3 cursor-pointer">
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <Link
            target="_blank"
            href={Instagram}
          >
            <FaInstagram />
          </Link>
        </div>
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <Link target="_blank" href="https://t.me/lainevolcite">
            <FaTelegramPlane />
          </Link>
        </div>
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <Link
            target="_blank"
            href={Tiktok}
          >
            <RiTiktokLine />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
