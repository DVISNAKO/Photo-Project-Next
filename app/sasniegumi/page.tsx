import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import IMG1 from "../pages/images/sasniegumi/sa1.jpeg";
import IMG2 from "../pages/images/sasniegumi/sa2.jpeg";
import IMG3 from "../pages/images/sasniegumi/sa3.jpeg";
import IMG4 from "../pages/images/sasniegumi/sa4.jpeg";
import IMG5 from "../pages/images/sasniegumi/sa5.jpeg";
import Image from "@/node_modules/next/image";
import { sasniegumiData } from "../utils/constants";


const Sasniegumi = () => {
  return (
    <div className="es:mx-5 flex flex-col gap-5 mt-10">
      <div className="flex flex-col justify-center items-center gap-5 mx-5 mb-5">
        {sasniegumiData.map((item) => (
            <Image
          className="w-1/2 max-h-max-h-[600px] max-w-[600px] object-cover hover:translate-y-2"
          src={item.img}
          alt={item.title}
          key={item.id}
        /> 
        ))}
      </div>
    </div>
  );
};

export default Sasniegumi;
