
import Image from "next/image"
export default function Hero() {

    return (
       <section id="hero" className=" relative p-4 container z-20">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-8">
                <div className="lg:text-[88px] xs:mb-8 text-[32px]">
                   <p className="inline-flex items-end">See the NFT {" "}</p>
                   <span className="block">new world</span>

                   <div className="my-4 font-[400]">
                        <p className="text-sm">
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di
                        </p>

                        <div className="flex items-center mt-2">
                            <p className="text-sm px-4">
                                Discover now
                            </p>

                            <Image src={'/discover.svg'} className="" width={32} height={32} alt="discover" />
                        </div>
                   </div>
                </div>
                <div className="flex lg:justify-center  lg:items-end">
                    <Image src={'/hero.png'} width={400} height={400} alt="hero" />
                </div>
            </div>
       </section>
    )
}