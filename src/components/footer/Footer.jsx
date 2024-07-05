const Footer = () => {
    return (
        <div className="bg-[#222222] h-[400px] w-full p-24">
            <div className="flex gap-12 border-b-2 border-b-gray-400 pb-12">
                <div className="basis-3/12">
                    <h1 className="text-[34px] text-[#e84a5f] font-bold mb-12">Flex</h1>
                    <p className="text-[#fff]">Gym session or brisk walk can help physical activity stimulates many chemical that may leave you.</p>
                </div>
                <div className="basis-2/12">
                    <h4 className="text-lg text-white font-bold mb-6">Company</h4>
                    <ul>
                        <li className="mb-3 text-white">
                            <a href="/">Home</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Class</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Trainers</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="basis-2/12">
                    <h4 className="text-lg text-white font-bold mb-6">Categories</h4>
                    <ul>
                        <li className="mb-3 text-white">
                            <a href="/">Strength</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Body Building</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Weight Loss</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Basic Yoga</a>
                        </li>
                    </ul>
                </div>

                <div className="basis-2/12">
                    <h4 className="text-lg text-white font-bold mb-6">Contact us</h4>
                    <ul>
                        <li className="mb-3 text-white">
                            <a href="/">+63 9876543210</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">fitnessflex@domain.com</a>
                        </li>
                        <li className="mb-3 text-white">
                            <a href="/">Warehouse 4, 18 street, Real Bacoor Cavite</a>
                        </li>
                    </ul>
                </div>

                <div className="basis-3/12">
                    <h4 className="text-lg text-white font-bold mb-6">Get the app</h4>
                    <p className="mb-3 text-white">PlayStore</p>
                    <p className="mb-3 text-white">App Store</p>
                </div>
            </div>
            <div className="py-3 flex justify-between">
                <p className="text-gray-300">@ 2024 Flex Fitness</p>
                <div className="flex gap-2">
                    <a className="text-gray-300" href="/">Terms of Use</a>
                    <span className="text-white">|</span>
                    <a className="text-gray-300" href="/">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
