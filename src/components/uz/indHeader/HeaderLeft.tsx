"use client";
// images
import MainLogo from "@/assets/main.png";
// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLeft = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-between">
      <div>
        <Link href="/en">
          <Image src={MainLogo} alt="logo" width={170} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              className={`${pathName === "/uz" ? "border-b-[5px] border-indigo-700 bg-gradient-to-t from-indigo-200 from-[1%] to-white to-[100%]" : "hover:border-indigo-100"} mx-2 px-3 py-10 text-2xl font-[500] hover:border-b-[5px] `}
              href="/uz"
            >
              Jismoniy shaxslarga
            </Link>
            <Link
              className={`${pathName === "/uz/business" ? "border-b-[5px] border-indigo-700 bg-gradient-to-t from-indigo-200 from-[1%] to-white to-[100%]" : "hover:border-indigo-100"} mx-2 px-3 py-10 text-2xl font-[500] hover:border-b-[5px] `}
              href="/uz/business"
            >
              Biznesga
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLeft;
