import Image from "next/image"

const Join = () => {
  return (
    <div className="w-full h-screen lg:h-[70vh]">
      <div className="relative w-full h-screen lg:h-[70vh] mt-12 lg:mt-24">
        <Image
        src={'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt="Join Image"
        fill
        quality={100}
        sizes="100%"
        className="object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-red w-full h-full flex flex-col justify-center items-center mx-auto">
            <h1 className="text-white text-5xl lg:text-8xl font-bold text-center">Join the Gymnastic Family</h1>
            <p className="my-12 text-white text-md lg:text-xl lg:w-[900px] text-center leading-6 lg:leading-9">Gym session or brisk walk can help. Physical activity stimulates many brain chemicals that may leave you.</p>
            <div>
                <button className="bg-[#e84a5f] px-8 py-4 rounded-full text-white uppercase text-xl">Be a Member</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Join
