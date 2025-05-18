import Image from 'next/image'

type CoffeeBorderProps = {
  widthBorder?: string
}

export const CoffeeBorder = ({ widthBorder = 'w-[25vw]' }: CoffeeBorderProps) => {
  return (
    <div className="text-[#A56D44] flex justify-center gap-2">
      <div className={`${widthBorder} bg-[#a56d44] h-0.5 mt-4`}></div>
      <Image src="/images/coffee-icon.svg" alt="Coffee Icons" width={28} height={33} />
      <div className={`${widthBorder} bg-[#a56d44] h-0.5 mt-4`}></div>
    </div>
  )
}
