"use client";

import Link from "@/node_modules/next/link";
import React, { FC, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { MenuType } from "./Header";

interface MenuProps {
  menu: MenuType[];
}

const BurgerMenu: FC<MenuProps> = ({ menu }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (title: string) => {
    setActiveMenu(title);
    setToggle(false);
  };

  return (
    <div className="sm:hidden flex flex-1 justify-end items-end mr-5 flex-col">
      <div onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <CiMenuFries className="text-[30px]" />
        ) : (
          <CiMenuBurger className="text-[30px] z-10" />
        )}
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex transition ease-in-out delay-1000"
        } `}
      >
        <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-r from-rose-300 to-pink-500 w-screen">
    <div className="flex mt-5 ml-20 gap-6 items-start flex-col">
          <CiMenuFries
            className="text-[30px]"
            onClick={() => setToggle(!toggle)}
          />

          <>
            {menu.map((item) => (
              <Link
                onClick={() => handleMenuClick(item.title)}
                href={item.url}
                className={`mr-2 hover:underline underline-offset-1 ${
                  activeMenu === item.title ? "text-pink-200" : ""
                }`}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
            <button>RUS</button>
          </>
        </div>
        </div>

    
      </div>
    </div>
  );
};

export default BurgerMenu;