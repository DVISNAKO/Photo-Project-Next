'use client'

import { LanguageState } from '@/app/utils/context';
import React, { useContext } from 'react';

interface ContactTitleProps {
    titleLV: string;
    titelRUS: string;
}

const ContactTitle = ({ titleLV, titelRUS }: ContactTitleProps) => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <h2 className="m-2 text-[25px]">
          {language ? <>{titleLV}</> : <>{titelRUS}</>}
      </h2>
    );
};

export default ContactTitle;