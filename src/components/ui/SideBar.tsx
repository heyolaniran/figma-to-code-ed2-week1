"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { links } from "@/constants";
import Link from "next/link";
export const SideBar = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Close the side drawer or dialog box
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden">
        <div className="flex justify-between items-center">
          <Image
            src={"/open.svg"}
            alt="menu"
            width={30}
            height={30}
            className="inline-block cursor-pointer lg:hidden"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 left-0 -translate-x-full transition-all",
          isOpen && "translate-x-0",
        )}
      >
        <section
          className="text-black bg-slate-50 flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-[300px] flex"
          ref={ref}
        >
          <Image
            className="mt-0 mb-8 cursor-pointer flex justify-end"
            src={"/close2.svg"}
            width={30}
            height={30}
            alt="cls"
            onClick={() => setIsOpen(false)}
          />

          {links.map((item) => (
            <Link href={item.link} className="font-bold" key={item.id}>
              {item.name}
            </Link>
          ))}

          <div className=" mt-4 inline-block items-center">
            <Link
              href={"/"}
              className=" border-r-2 px-4  items-center border-black font-normal text-base"
            >
              Sign Up
            </Link>{" "}
            <button className=" bg-black rounded-[42px] px-2 py-1 ml-1 text-center text-white">
              {" "}
              Connect Wallet{" "}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
