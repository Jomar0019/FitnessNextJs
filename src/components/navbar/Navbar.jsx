const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center p-4 shadow-md">
      <div className="w-[1400px] flex justify-between items-center">
        <div>
          <h1 className="text-[34px] text-[#e84a5f] font-bold">Flex</h1>
        </div>
        <div className="flex gap-x-8">
          <a href="/" className="tracking-wider">Home</a>
          <a href="/" className="tracking-wider">Program</a>
          <a href="/" className="tracking-wider">Blog</a>
          <a href="/" className="tracking-wider">Contact</a>
        </div>
        <div>
          <button className=" bg-[#e84a5f] px-6 py-2 rounded-full text-white">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
