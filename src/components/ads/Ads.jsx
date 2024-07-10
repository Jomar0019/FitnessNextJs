import Image from "next/image"

const Ads = () => {
  return (
    <div className="bg-[#e84a5f] w-full flex justify-center items-center my-24 gap-[200px]">
      <div className="relative w-[150px] h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-500x281.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[150px] h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo-500x281.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[150px] h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2021/04/Puma-logo-500x249.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[150px] h-[150px]">
        <Image
            src={'https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo-500x281.png'}
            alt=""
            fill
            sizes="100%"
            className="object-contain invert"
        />
      </div>

      <div className="relative w-[150px] h-[150px]">
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
