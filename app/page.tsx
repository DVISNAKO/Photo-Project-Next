import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { galeryData } from "./utils/constants";



export default function GAlerijaPage() {
  return (
 <div className="flex justify-center items-center h-full my-10 flex-wrap gap-5 mx-10 border-black">
  {galeryData.map((item)=> (
    <div
    key={item.title}
    className="cursor-pointer hover:translate-y-2 hover:text-pink-400 basis-1/4"
    >
      <Link href={item.route}>
        <Image 
         className="flex justify-center items-center object-cover h-[500px] min-w-[350px]"
         src={item.img} 
         alt={item.title}/>
      </Link>
      <h2 className="flex justify-center mt-5">
        {item.title}
      </h2>
    </div>
  ))}
  </div>
  );
}
