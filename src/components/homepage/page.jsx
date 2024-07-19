import Image from "next/image"

const Homepage = () => {
  return (
    <div className="w-full h-screen lg:h-[100vh] flex justify-center items-center bg-white lg:rounded-[60px]">
      <div className="w-full lg:w-[1600px] p-3 lg:p-0">
        <h4 className="font-semibold text-sm lg:text-md text-[#222222] uppercase py-12 lg:py-6">the best fitness club in town</h4>
        <div className="w-full h-[12] flexgap-6">
          <div className="basis-7/12 ">
            <h1 className="text-6xl lg:text-[110px] uppercase font-bold text-[#222222]">Transforming lives through fitness</h1>
            <div className="py-12 lg:py-6 gap-6 flex">
              <button className="bg-[#e84a5f] text-white px-6 py-3 rounded-full">Be a Member</button>
              <button className="border border-[#e84a5f] px-6 py-3 rounded-full">Learn More</button>
            </div>
          </div>
          <div className="hidden basis-5/12 lg:flex flex-col gap-4 items-end justify-center">
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
  )
}

export default Homepage
