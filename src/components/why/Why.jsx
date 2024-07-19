import Image from "next/image"

const Why = () => {
  return (
    <div className="w-full lg:w-[1600px] h-auto lg:h-[100vh] lg:py-24 mx-auto p-6">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-center text-5xl lg:text-7xl font-bold">Why Choose Us</h1>
            <p className="my-12 text-white text-md lg:text-lg w-full lg:w-[700px] text-center">Why picking a gym consider its amenities like guest access, hours, location, and extra benefits to enhance your experience.</p>
        </div>
      <div className="w-full bg-[#222222] text-white rounded-lg lg:rounded-[25px] flex overflow-hidden">
        <div className="lg:basis-9/12 px-6 py-12 lg:p-24 grid lg:grid-rows-2 lg:grid-cols-2 gap-12">
            <div className="">
                <div className="flex gap-4 items-center mb-4">
                    <span className="bg-red-400 rounded-full p-2">Logo</span>
                    <h2 className="text-3xl font-bold">Facility Amenities</h2>
                </div>
                <p className="leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nesciunt explicabo obcaecati modi, perspiciatis natus enim cum sunt eius</p>
            </div>

            <div>
                <div className="flex gap-4 items-center mb-4">
                    <span className="bg-red-400 rounded-full p-2">Logo</span>
                    <h2 className="text-3xl font-bold">Membership Cost</h2>
                </div>
                <p className="leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nesciunt explicabo obcaecati modi, perspiciatis natus enim cum sunt eius</p>
            </div>

            <div>
                <div className="flex gap-4 items-center mb-4">
                    <span className="bg-red-400 rounded-full p-2">Logo</span>
                    <h2 className="text-3xl font-bold">Trainer Qualification</h2>
                </div>
                <p className="leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nesciunt explicabo obcaecati modi, perspiciatis natus enim cum sunt eius</p>
            </div>

            <div>
                <div className="flex gap-4 items-center mb-4">
                    <span className="bg-red-400 rounded-full p-2">Logo</span>
                    <h2 className="text-3xl font-bold">Operating Hours</h2>
                </div>
                <p className="leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nesciunt explicabo obcaecati modi, perspiciatis natus enim cum sunt eius</p>
            </div>

        </div>
        <div className="hidden lg:flex basis-3/12 relative w-full h-auto">
            <Image 
                src={'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                fill
                sizes="100%"
                className="object-cover"
                alt="wcu-image"
            />
        </div>
      </div>
    </div>
  )
}

export default Why
