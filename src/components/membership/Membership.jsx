const Membership = () => {
  return (
    <div className="w-full py-24 rounded-[40px]">
        <div className="w-[1600px] mx-auto">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-white">Join our Membership</h1>
            </div>
            <div className="flex justify-center items-center gap-12 mt-12">
                <div className="flex flex-col justify-center p-5 w-[350px] h-[450px] bg-[#222222] rounded-lg">
                    <div className="border-b">
                        <h3 className="text-2xl text-white">Weekly Plan</h3>
                        <h1 className="text-5xl font-bold text-white my-4">$80</h1>
                    </div>
                    <ul className="list-disc list-inside leading-10 my-5 text-white">
                        <li>Free Consulting</li>
                        <li>3 hours personal training</li>
                        <li>Exercise Program</li>
                        <li>Normal Workout</li>
                    </ul>
                    <div className="mt-10">
                        <button className="uppercase bg-white px-6 py-2 rounded-full text-black font-bold">Join Now</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-5 w-[350px] h-[450px] bg-[#e84a5f] rounded-lg">
                    <div className="border-b">
                        <h3 className="text-2xl text-white">Monthly Plan</h3>
                        <h1 className="text-5xl font-bold text-white my-4">$100</h1>
                    </div>
                    <ul className="list-disc list-inside leading-10 my-5 text-white">
                        <li>Free Consulting</li>
                        <li>3 hours personal training</li>
                        <li>Exercise Program</li>
                        <li>Normal Workout</li>
                        <li>Highiest level Workout</li>
                    </ul>
                    <div className="">
                        <button className="uppercase bg-white px-6 py-2 rounded-full text-black font-bold">Join Now</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-5 w-[350px] h-[450px] bg-[#222222] rounded-lg">
                    <div className="border-b">
                        <h3 className="text-2xl text-white">Yearly Plan</h3>
                        <h1 className="text-5xl font-bold text-white my-4">$120</h1>
                    </div>
                    <ul className="list-disc list-inside leading-10 my-5 text-white">
                        <li>Free Consulting</li>
                        <li>3 hours personal training</li>
                        <li>Exercise Program</li>
                        <li>Normal Workout</li>
                        <li>Highiest level Workout</li>
                    </ul>
                    <div className="">
                        <button className="uppercase bg-white px-6 py-2 rounded-full text-black font-bold">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Membership
