import Image from "next/image"

const Trainers = () => {
  return (
    <div className="w-full lg:w-[1600px] h-auto lg:h-[100vh] lg:mx-auto">
        <div className="py-12 lg:py-24">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white text-center text-5xl lg:text-7xl font-bold">Meet our Trainer</h1>
                <p className="my-12 text-white text-md lg:text-lg lg:w-[700px] text-center">Whether youre looking to build strength, improve flexibility, or embark on a transformative fitness journey.</p>
            </div>
            <div className="flex flex-nowrap lg:justify-center lg:items-center overflow-x-scroll lg:overflow-hidden pb-6 gap-6 px-6">
                <div>
                    <div className="relative w-[150px] lg:w-[400px] h-[250px] lg:h-[450px]">
                        <Image 
                            src={'https://images.pexels.com/photos/6739127/pexels-photo-6739127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt=""
                            fill
                            sizes="100%"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-center mt-1 lg:mt-2 text-md lg:text-xl text-white font-bold">Mirele David</h2>
                </div>

                <div>
                    <div className="relative w-[150px] lg:w-[400px] h-[250px] lg:h-[450px]">
                        <Image 
                            src={'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt=""
                            fill
                            sizes="100%"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-center  mt-1 lg:mt-2 text-md lg:text-xl text-white font-bold">Trajan Aigeus</h2>
                </div>

                <div>
                    <div className="relative w-[150px] lg:w-[400px] h-[250px] lg:h-[450px]">
                        <Image 
                            src={'https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt=""
                            fill
                            sizes="100%"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-center  mt-1 lg:mt-2 text-md lg:text-xl text-white font-bold">Gunnar Norbert</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trainers
