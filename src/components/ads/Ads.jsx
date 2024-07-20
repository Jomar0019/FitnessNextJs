import Image from "next/image"

const Ads = () => {
  return (
    <div className="bg-[#e84a5f] w-full grid grid-cols-2 lg:flex place-content-center place-items-center justify-center items-center my-12 lg:my-24 gap-12 lg:gap-[200px] py-6">
      <div className="relative w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-500x281.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[100px] lg:w-[150px] h-[50px] lg:h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo-500x281.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[100px] lg:w-[150px] h-[50px] lg:h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2021/04/Puma-logo-500x249.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[100px] lg:w-[150px] h-[50px] lg:h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo-500x281.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="col-span-2 relative w-[100px] lg:w-[150px] h-[50px] lg:h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2021/04/Under-Armour-logo-500x315.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      
    </div>
  )
}

export default Ads
