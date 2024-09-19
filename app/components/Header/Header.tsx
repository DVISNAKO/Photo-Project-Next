"use client";

import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import LOGO from "./logo.png";
import styles from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";
import ToogleLanguage from "../ToogleLanguage/ToogleLanguage";
import { LanguageProps } from "@/app/utils/type";
import { useState } from "react";

export type MenuType = {
  id: number;
  title: string;
  url: string;
  titleRus: string;
};

const menu: MenuType[] = [
  { id: 0, title: " SAKUMS", url: "/", titleRus: " НАЧАЛО" },
  { id: 1, title: " GALEREJA", url: "galereja", titleRus: " ГАЛЕРЕЯ" },
  { id: 2, title: " PAR MANI", url: "par-mani", titleRus: " ОБО МНЕ" },
  { id: 3, title: " KONTAKTI", url: "kontakti", titleRus: " КОНТАКТЫ" },
  { id: 4, title: " SASNIEGUMI", url: "sasniegumi", titleRus: " ДОСТЯЖЕНИЯ" },
];

const Header = ({ language, setLanguage }: LanguageProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(menu[0].title);
  const [toggle, setToggle] = useState(false);

  const handleMenuClick = (title: string) => {
    setActiveMenu(title);
    setToggle(false);
  };
  return (
    <div className="w-full flex items-center py-5  bg-gradient-to-r from-slate-200 to-slate-400">
      <nav className="w-full flex items-center max-w-7x1 max-auto mx-6 justify-center">
        <div className="hidden sm:flex flex-row gap-2">
          {language ? (
            <div>
              {menu.map((item) => (
                <Link
                  className={`mr-2 hover:underline underline-offset-1 ${
                    activeMenu === item.title ? "text-slate-100" : ""
                  } `}
                  onClick={() => handleMenuClick(item.title)}
                  href={item.url}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ) : (
            <div>
              {menu.map((item) => (
                <Link
                  className={`mr-2 hover:underline underline-offset-1 ${
                    activeMenu === item.title ? "text-pink-200" : ""
                  } `}
                  onClick={() => handleMenuClick(item.title)}
                  href={item.url}
                  key={item.id}
                >
                  {item.titleRus}
                </Link>
              ))}
            </div>
          )}

          <ToogleLanguage language={language} setLanguage={setLanguage} />
        </div>

        <>
          <BurgerMenu
            menu={menu}
            language={language}
            setLanguage={setLanguage}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            toggle={toggle}
            setToggle={setToggle}
            handleMenuClick={handleMenuClick}
          />
        </>
      </nav>
    </div>
  );
};

export default Header;
