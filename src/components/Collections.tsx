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
                        <button key={category.id} className={` ${category.active ? 'bg-black text-gray-100' :'bg-gray-200 text-black' } text-xs px-4 py-1 mx-2 rounded-md `}>
                            {category.name}
                        </button>
                    ))}
                </div>

                <Link href={''} className=" underline-offset-1 underline text-xs font-semibold"> view more </Link>
            </div>

            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-2 px-2">
                {collections.map((collection) => (
                    <div className="border border-spacing-1 my-2 p-6 rounded-2xl">
                        <div className="flex justify-center mb-2">
                             <Image src={collection.image} className=" items-center rounded-lg" width={400} height={400} alt={collection.name} />
                        </div>

                        <div className="mt-2 flex justify-between font-semibold items-center">
                            <h1 className="text-md ">
                                {collection.name}
                            </h1>

                            <div className="flex gap-1">
                                <Image src={'/ether.svg'} width={24} height={24} alt="eth" />
                                {collection.amount} 
                            </div>
                        </div>

                        <div className="mt-6 ">
                            <button className="border w-full border-spacing-2 border-black rounded-xl px-4 py-1 text-center text-md font-bold"> Place a Bid </button>
                        </div>
                        
                       
                    </div>
                ))}
            </div>
        </div>
    )
}