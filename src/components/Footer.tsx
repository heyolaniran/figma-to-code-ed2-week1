import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 mt-8 container">
      <div>
        <Image src={"/logo.svg"} width={50} height={50} alt="" className="" />
      </div>

      <hr className="border border-spacing-1 my-4 border-gray-100" />

      <div className="lg:flex justify-between items-center">
        <h1 className="font-semibold text-xl py-4 leading-5 lg:text-2xl">
          Create, Explore & Collect Digital NFTs
        </h1>

        <div className="flex lg:justify-center  ">
          {footerLinks.map((link) => (
            <Link href={""} className="px-4 leading-5 font-semibold text-sm ">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
