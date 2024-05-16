'use client'

import { useContext } from "react";
import { LanguageState } from "../utils/context";

interface AboutTitleProps{
    descLV: string;
    descRus: string
}

const AboutDesc = ({descLV, descRus}: AboutTitleProps) => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <p className="indent-5 text-lg">
        {language ? (
          <>{descLV}</>
        ) : (
          <>{descRus}</>
        )}
      </p>
    );
};

export default AboutDesc;