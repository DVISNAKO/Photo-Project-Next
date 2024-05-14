import { LanguageProps } from "@/app/utils/type";
import Link from "next/link";
import React from "react";


const ButtonBack = ({language }:LanguageProps) => {
    return (
        <Link href="/">
            <button className="m-2 border-2 p-3 rounded-xl">
                <h2>{language ? <>Atpakaļ uz galeriju</> : <>Обратно в галерею</>}</h2>
            </button>
        </Link>
    );
};

export default ButtonBack;
