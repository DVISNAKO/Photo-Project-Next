import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import LOGO from "./logo.png";


type MenuType = {
    id: number,
    title: string
    url: string
}

const menu: MenuType[] = [
  { id: 1, title: "GALERIJA", url: '/' },
  { id: 2, title: "PAR MANI", url: 'par-mani'},
  { id: 3, title: "KONTAKTI", url:'kontakti' },
  { id: 4, title: "SASNIEGUMI", url: 'sasniegumi' },
  { id: 5, title: "RUS", url: '/'},
];

const Header = () => {
  return (
    <nav className="w-full flex items-center py-5 justify-around bg-gradient-to-r from-rose-300 to-pink-500">
      <div className="w-full flex justify-around items-center max-w-7x1 max-auto mx-6">
        <Link href="/" className="flex items-center">
          <Image className="h-10 w-32" alt="logo " src={LOGO} />
        </Link>
        <div className="hidden sm:flex flex-row gap-2">
            {menu.map((item) => (
                <Link href={item.url} key={item.id}>{item.title}</Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
