
const Newsletter = () => {
  return (
    <div className="w-full h-[30vh] flex justify-center items-center">
        <div className="w-[1200px] mx-auto flex justify-between items-center bg-[#222222] my-12 p-12 rounded-xl">
            <div>
                <h1 className="font-bold text-5xl text-white"><span className="text-[#e84a5f]">Join</span> With Us</h1>
                <p className="text-white mt-3">Get Practical small business tips and idea straight to your inbox.</p>
            </div>
            <div>
                <div className="border rounded-full overflow-hidden">
                <input 
                    type="text" 
                    name="a" 
                    id="a" 
                    placeholder="Enter Email"
                    className="bg-transparent w-[280px] pl-6 text-white outline-none"
                />
                <button className="bg-[#e84a5f] px-6 py-4 rounded-full text-white">Join Now</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
