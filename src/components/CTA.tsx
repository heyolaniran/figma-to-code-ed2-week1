import Image from "next/image";
export default function CTA() {
  return (
    <section id="" className="container w-full  p-10">
      <div className="p-4 rounded-xl text-white get-app">
        <div className="">
          <h1 className="lg:text-6xl text-2xl flex justify-center fotn-semibold items-center">
            Build your NFT profile
          </h1>

          <p className="items-center text-lg font-semibold  justify-center mt-6 flex">
            Join almost 10K NFT profile on Digit
          </p>

          <div className="items-center justify-center mt-6 flex">
            <button className=" bg-white text-black font-semibold px-4 py-1 rounded-2xl">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
