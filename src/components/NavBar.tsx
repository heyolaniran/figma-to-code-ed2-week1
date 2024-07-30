
import Image from "next/image"
import Link from "next/link"
export default function NavBar(){

    return (
        <nav className="flex items-center justify-between border border-spacing-2 px-2 border-gray-200">
            <Image src={'/logo.svg'} alt="logo" width={32} height={32} className="w-8 h-8 " />

            <div className="inline-flex p-4">
                {['home', 'features', 'socials'].map((link) => (
                <div key={link} className="px-4">
                    {link}
                </div>
            ))}
            </div>

            <div className="">
                <Link href={'/'} className=" border-r-2 px-[20px] mr-4 py-1.5 items-center border-black border-spacing-4 font-normal text-base">
                    Sign Up
                </Link> {" "}


                <button className=" bg-black rounded-[42px] px-6 py-2 text-center text-white"> Connect Wallet  </button>
            </div>
            
        </nav>
    )
}