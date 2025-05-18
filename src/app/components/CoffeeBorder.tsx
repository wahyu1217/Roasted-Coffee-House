import Image from 'next/image'

export const CoffeeBorder = () => {
  return (
    <div className="text-[#A56D44] flex justify-center gap-2">
      <div className="w-[25vw] bg-[#a56d44] h-0.5 mt-4"></div>
      <Image src="/images/coffee-icon.svg" alt="Coffee Icons" width={28} height={33} />
      <div className="w-[25vw] bg-[#a56d44] h-0.5 mt-4"></div>
    </div>
  )
}
