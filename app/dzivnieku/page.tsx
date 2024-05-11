import Image from '@/node_modules/next/image';
import React from 'react';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import { DzivniekuData } from '../utils/constants';

const DzivniekuPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-full flex-col mx-5">
        <div className="flex flex-col items-center my-6 text-[30px]">
          <h2 className="my-5">DZĪVNIEKU FOTO</h2>
          <div className="flex flex-wrap justify-center items-center gap-5 mb-5 mx-5 ">
            {DzivniekuData.map((item) => (
              <Image
                key={item.id}
                src={item.img}
                alt={item.title}
                className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
              />
            ))}
          </div>
        </div>
        <div className="mb-5 hover:text-var(--color-pink)">
          <ButtonBack />
        </div>
      </div>
    );
};

export default DzivniekuPage;