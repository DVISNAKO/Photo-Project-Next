'use client'

import { LanguageState } from '@/app/utils/context';
import Link from '@/node_modules/next/link';
import React, { useContext } from 'react';

interface ContactBtnProps {
    btnLV: string;
    btnRus: string;
}

const ContactBtn = ({ btnLV, btnRus }: ContactBtnProps) => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <h2 className="m-2 border-2 p-3 rounded-xl hover:bg-slate-400">
        <Link target="_blank" href="https://t.me/lainevolcite">
          {language ? <>{btnLV}</> : <>{btnRus}</>}
        </Link>
      </h2>
    );
};

export default ContactBtn;