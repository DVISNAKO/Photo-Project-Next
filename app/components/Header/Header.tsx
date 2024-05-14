import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import LOGO from "./logo.png";

import BurgerMenu from "./BurgerMenu";
import ToogleLanguage from "../ToogleLanguage/ToogleLanguage";
import { LanguageProps } from "@/app/utils/type";


export type MenuType = {
    id: number,
    title: string
    url: string
    titleRus: string
}

const menu: MenuType[] = [
  { id: 1, title: " GALERIJA", url: '/', titleRus: ' ГАЛЕРЕЯ'},
  { id: 2, title: " PAR MANI", url: 'par-mani', titleRus: ' ОБО МНЕ'},
  { id: 3, title: " KONTAKTI", url:'kontakti', titleRus: ' КОНТАКТЫ'},
  { id: 4, title: " SASNIEGUMI", url: 'sasniegumi', titleRus: ' ДОСТЯЖЕНИЯ'},
];


const Header = ({language, setLanguage }:LanguageProps) => {


  return (
    <div className="w-full flex items-center py-5 justify-around bg-gradient-to-r from-rose-300 to-pink-500">
      <nav className="w-full flex justify-around items-center max-w-7x1 max-auto mx-6">
        <Link href="/" className="flex items-center">
          <Image className="h-10 w-32" alt="logo " src={LOGO} />
        </Link>
    
        <div className="hidden sm:flex flex-row gap-2">
            {language ? <div> 
                {menu.map((item) => (
                <Link className="mx-1" href={item.url} key={item.id}>{item.title}</Link>
            ))} 
            </div> : 
            <div>
                 {menu.map((item) => (
                <Link className="mx-1" href={item.url} key={item.id}>{item.titleRus}</Link>
            ))} 
                </div>}
           
            <ToogleLanguage language={language} setLanguage={setLanguage}/>
        </div>
                
        <>
            <BurgerMenu menu={menu} language={language} setLanguage={setLanguage}/>
        </>
      
     </nav>
    </div>
  );
};

export default Header;
