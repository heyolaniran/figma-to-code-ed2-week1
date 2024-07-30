import { categories, collections } from "@/constants";
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

            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-2 px-2">
                {collections.map((collection) => (
                    <div className="border border-spacing-1 py-2 my-2 px-2 rounded-lg">
                        <div className="flex justify-center mb-2">
                             <Image src={collection.image} className=" items-center rounded-lg" width={253} height={253} alt={collection.name} />
                        </div>
                       
                        {collection.name}
                    </div>
                ))}
            </div>
        </div>
    )
}