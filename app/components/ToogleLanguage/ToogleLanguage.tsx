'use client';

import React, { useState } from 'react';

interface LanguageProps {
    language: boolean;
    setLanguage: (value: boolean) => void;
}

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
            RUS
        </div>
    );
};

export default ToogleLanguage;