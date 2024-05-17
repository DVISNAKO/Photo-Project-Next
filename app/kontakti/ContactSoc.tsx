'use client'

import { LanguageState } from '@/app/utils/context';
import React, { useContext } from 'react';

interface ContactTitleProps {
    socTitleLV: string;
    socTitleRus: string;
}

const ContactSoc = ({ socTitleLV, socTitleRus }: ContactTitleProps) => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <h2 className="m-2 text-[25px]">
          {language ? <>{socTitleLV}</> : <>{socTitleRus}</>}
      </h2>
    );
};

export default ContactSoc;