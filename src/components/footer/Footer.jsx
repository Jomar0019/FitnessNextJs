import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-black/95 h-[400px] w-full p-24">
            <div className="flex gap-6 border-b-2 border-b-gray-400 pb-12">
                <div className="basis-3/12">
                    <Link href={'/'}>
                        <h1 className="text-[34px] text-[#e84a5f] font-bold mb-12">Flex</h1>
                    </Link>
                    <p className="text-[#fff]">Gym session or brisk walk can help physical activity stimulates many chemical that may leave you.</p>
                </div>
                <div className="basis-2/12">
                    <h4 className="text-lg text-white font-bold mb-6 mt-3">Company</h4>
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
                    <h4 className="text-lg text-white font-bold mb-6 mt-3">Categories</h4>
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
                    <h4 className="text-lg text-white font-bold mb-6 mt-3">Contact us</h4>
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
                    <h4 className="text-lg text-white font-bold mb-6 mt-3">Get the app</h4>
                    <div className="relative w-[180px] h-[50px] mb-3">
                        <Image 
                            src={'https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'}
                            fill
                            sizes="100%"
                            className="object-cover"
                            alt="google download"
                        />
                    </div>
                    <div className="relative w-[180px] h-[50px]">
                        <Image 
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png'}
                            fill
                            sizes="100%"
                            className="object-contain"
                            alt="ios download"
                        />
                    </div>
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
