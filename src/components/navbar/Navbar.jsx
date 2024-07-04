const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-[#f5f5f5] flex justify-center items-center p-4 shadow-md">
      <div className="w-[1600px] flex justify-between items-center">
        <div>
          <h1 className="text-[34px] text-[#e84a5f] font-bold">Flex</h1>
        </div>
        <div className="flex gap-x-8">
          <a href="/" className="text-[#222222]">Home</a>
          <a href="/" className="text-[#222222]">Program</a>
          <a href="/" className="text-[#222222]">Blog</a>
          <a href="/" className="text-[#222222]">Contact</a>
        </div>
        <div>
          <button className=" bg-[#e84a5f] px-6 py-2 rounded-full text-white">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
