'use client'

import { LanguageState } from "@/app/utils/context";
import Link from "next/link";
import React, { useContext } from "react";

const ButtonBack = () => {
    const {language, setLanguage} = useContext(LanguageState);
    return (
        <Link href="/">
            <button className="m-2 border-2 p-3 rounded-xl">
                <h2>{language ? <>Atpakaļ uz galeriju</> : <>Обратно в галерею</>}</h2>
            </button>
        </Link>
    );
};

export default ButtonBack;
