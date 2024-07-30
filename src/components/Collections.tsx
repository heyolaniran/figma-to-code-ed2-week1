import { categories } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Collections() {

    return (
        <div className="mt-4 container p-4 ">

            <h1 className="text-lg font-bold">
                Our Collections 
            </h1>

            <div className="mt-2 px-2 lg:flex items-center">
                <div className=" px-2 flex overflow-x-auto hide-scrollbar">
                    {categories.map((category) => (
                        <button key={category.id} className={` ${category.active ? 'bg-black text-gray-100' :'bg-gray-400 text-black' } text-xs px-4 py-1 mx-2 rounded-md `}>
                            {category.name}
                        </button>
                    ))}
                </div>

                <Link href={''} className=" underline-offset-1 underline text-xs font-semibold"> view more </Link>
            </div>
        </div>
    )
}