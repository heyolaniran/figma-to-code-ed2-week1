import { services } from "@/constants";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="mt-4 mb-8 container p-4">
      <h1 className="text-lg font-bold">Create and Sell Now</h1>

      <div className="mt-4 px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {services.map((service) => (
          <div className="bg-gray-200 p-4 rounded-xl" key={service.id}>
            <div className="flex my-4 justify-start">
              <Image src={service.icon} width={50} height={50} alt="" />
            </div>

            <h1 className="mt-2 text-lg font-bold">{service.title}</h1>

            <p className="text-sm mt-2 ">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
