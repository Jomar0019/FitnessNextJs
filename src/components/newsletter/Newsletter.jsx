
const Newsletter = () => {
  return (
    <div className="w-full h-[30vh] flex  justify-center items-center">
        <div className="w-full lg:w-[1200px] mx-auto flex flex-col lg:flex-row  lg:justify-between items-start lg:items-center bg-[#222222] my-12 p-6 lg:p-12 rounded-xl">
            <div>
                <h1 className="font-bold text-3xl lg:text-5xl text-white"><span className="text-[#e84a5f]">Join</span> With Us</h1>
                <p className="text-white mt-3 mb-3 lg:mb-0">Get Practical small business tips and idea straight to your inbox.</p>
            </div>
            <div className="">
                <div className="border rounded-full overflow-hidden ">
                    <input 
                        type="text" 
                        name="a" 
                        id="a" 
                        placeholder="Enter Email"
                        className="bg-transparent w-[280px] pl-6 text-white outline-none"
                    />
                    <button className="bg-[#e84a5f] px-6 lg:px-6 py-4 rounded-full text-white">Join Now</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
