import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React, { useContext } from "react";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import IMG from '../image/Kontakti/contact.jpeg'
import ContactBtn from "./ContactBtn";
import ContactSoc from "./ContactSoc";
import ContactTitle from "./ContactTitle";

const Contacts = () => {

  const btnLV = 'Saziņai telegramā';
  const btnRus = 'Написать в телеграм';

  const titleLV = 'MY CONTACTS:';
  const titelRUS = 'МОИ КОНТАКТЫ:';

  const socTitleLV ='MANI SOCIĀLIE TĪKLI'; 
  const socTitleRus ='МОИ СОЦ. СЕТИ:'; 


  return (
    <div className="es:flex-col justify-center md:flex items-center my-10 w-screen gap-10">
      <div className="flex justify-center items-center flex-col text-nowrap  p-4">
        <ContactTitle titleLV={titleLV} titelRUS={titelRUS}/>
        <h2 className="m-2"> lai13@inbox.lv</h2>
        <ContactBtn btnLV={btnLV} btnRus={btnRus}/>
        <hr className="h-1 w-20 m-3" />
        <ContactSoc socTitleLV={socTitleLV} socTitleRus={socTitleRus}/>
        <div className="flex gap-1 ml-3 cursor-pointer">
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <Link
              target="_blank"
              href="https://www.instagram.com/volcites_photos?igsh=cnJuam13anZtaGJ0&utm_source=qr"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <Link
              target="_blank"
              href="https://tiktok.com/@volcites_photos?_t=8kGdMatiX4L&_r=1"
            >
              <RiTiktokLine />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-5">
        <Image
          className="h-[600px] w-[500px] object-cover hover:translate-y-2"
          src={IMG}
          alt='foto'
        />
      </div>
    </div>
  );
};

export default Contacts;
