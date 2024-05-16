'use client'

import { LanguageState } from '@/app/utils/context';
import React, { useContext } from 'react';

interface TitleProps {
    titleLV: string;
    titleRus: string;
}

const Title = ({ titleLV, titleRus }: TitleProps) => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <h2 className="my-5">{language ? <>{titleLV}</> : <>{titleRus}</>}</h2>
    );
};

export default Title;