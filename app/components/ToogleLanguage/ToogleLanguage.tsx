'use client';

import { LanguageProps } from '@/app/utils/type';
import React, { useState } from 'react';

const ToogleLanguage = ({language, setLanguage }:LanguageProps) => {
    const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem("languageStatus") : null;
    const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : true;
    
    const toggleLanguage = () => {
        setLanguage(!language);
        localStorage.setItem("languageStatus", JSON.stringify(language));
        console.log('togle')
      };

    return (
        <div onClick={toggleLanguage}>
           {language ? <>RUS</> : <>LAT</>}
        </div>
    );
};

export default ToogleLanguage;