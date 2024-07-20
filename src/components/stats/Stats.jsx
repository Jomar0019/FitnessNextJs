const Stats = () => {
  return (
    <div className="w-full lg:w-[1600px] mx-auto h-auto px-6 py-24 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-12 lg:flex lg:justify-between bg-[#222222] lg:px-[100px] text-white w-full lg:rounded-full rounded-xl px-6 py-12 lg:py-[60px]">
            <div className="">
                <h3 className="text-4xl lg:text-5xl font-bold mb-3 text-[#e84a5f]">500+</h3>
                <p className="font-semibold mb-1">Happy Members</p>
                <p className="text-sm">Our Community is growing fast</p>
            </div>
            <div className="">
                <h3 className="text-4xl lg:text-5xl font-bold mb-3  text-[#e84a5f]">30</h3>
                <p className="font-semibold mb-1">Weekly Classes</p>
                <p className="text-sm">Image from various workouts</p>
            </div>
            <div className="">
                <h3 className="text-4xl lg:text-5xl font-bold mb-3  text-[#e84a5f]">10</h3>
                <p className="font-semibold mb-1">Certified Trainers</p>
                <p className="text-sm">Guidance at every step</p>
            </div>
            <div className="">
                <h3 className="text-4xl lg:text-5xl font-bold mb-3  text-[#e84a5f]">99%</h3>
                <p className="font-semibold mb-1">Customer Satisfaction</p>
                <p className="text-sm">We ensure your progress satisfaction</p>
            </div>
        </div>
    </div>
  )
}

export default Stats
