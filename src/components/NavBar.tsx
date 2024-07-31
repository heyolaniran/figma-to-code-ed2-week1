import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SideBar } from "./ui/SideBar";
export default function NavBar() {
  return (
    <>
      <nav className="flex py-2 font-semibold items-center relative z-30 justify-between px-2 ">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={32}
          height={32}
          className="w-8 h-8 "
        />

        <div className=" p-4 hidden lg:flex">
          {links.map((link) => (
            <Link href={link.link} key={link.id} className="px-4">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link
            href={"/"}
            className=" border-r-2 px-[20px] mr-4 py-1.5 items-center border-black border-spacing-4 font-normal text-base"
          >
            Sign Up
          </Link>{" "}
          <button className=" bg-black rounded-[42px] px-6 py-2 text-center text-white">
            {" "}
            Connect Wallet{" "}
          </button>
        </div>

        <SideBar />
      </nav>
    </>
  );
}
