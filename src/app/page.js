import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#fff]">
      <div className="w-[1600px]">
        <h4 className="font-semibold text-md text-[#222222] uppercase py-6">the best fitness club in town</h4>
        <div className="w-full h-[12] flex gap-6">
          <div className="basis-7/12 ">
            <h1 className="text-[110px] uppercase font-bold text-[#222222]">Transforming lives through fitness</h1>
            <div className="py-6 gap-6 flex">
              <button className="bg-[#e84a5f] text-white px-6 py-3 rounded-full">Be a Member</button>
              <button className="border border-[#e84a5f] px-6 py-3 rounded-full">Learn More</button>
            </div>
          </div>
          <div className="basis-5/12 flex flex-col gap-4 items-end justify-center">
            <div className="relative w-full h-full">
              <Image
                src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="home image"
                fill
                sizes="100%"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="home image"
                fill
                sizes="100%"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
