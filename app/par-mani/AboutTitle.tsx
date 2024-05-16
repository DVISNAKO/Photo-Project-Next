'use client'

import { useContext } from "react";
import { LanguageState } from "../utils/context";

interface AboutTitleProps{
    titleLV: string;
    titleRus: string
}

const AboutTitle = ({titleLV, titleRus}: AboutTitleProps) => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <h2 className="text-xl font-bold">
        {language ? (
          <>{titleLV}</>
        ) : (
          <>{titleRus}</>
        )}
      </h2>
    );
};

export default AboutTitle;