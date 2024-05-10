import Link from "next/link";
import React from "react";

const ButtonBack = () => {
    return (
        <Link href="/">
            <button className="m-2 border-2 p-3 rounded-xl">
                <h2>Atpakaļ uz galeriju</h2>
            </button>
        </Link>
    );
};

export default ButtonBack;
