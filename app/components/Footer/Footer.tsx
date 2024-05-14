import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { LanguageProps } from "@/app/utils/type";


const Footer = ({language }:LanguageProps) => {
 
  return (
    <div className="w-full flex justify-center items-center text-[25px] mt-auto h-20 bg-gradient-to-r from-rose-300 to-pink-500">
      <h2> {language ? <>SOCIĀLIE TĪKLI </>: <>СОЦИАЛЬНЫЕ СЕТИ</>}</h2>
      <div className="flex gap-1 ml-3 cursor-pointer">
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <a
            target="_blank"
            href="https://www.instagram.com/volcites_photos?igsh=cnJuam13anZtaGJ0&utm_source=qr"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <a target="_blank" href="https://t.me/lainevolcite">
            <FaTelegramPlane />
          </a>
        </div>
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <a
            target="_blank"
            href="https://tiktok.com/@volcites_photos?_t=8kGdMatiX4L&_r=1"
          >
            <RiTiktokLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
