type ProductCardProps = {
  isNew?: boolean
  imgSrc?: string
  price?: string
  count?: string
  title?: string
}

export const ProductCard = ({
  isNew = false,
  imgSrc = '-',
  title = '-',
  price = '-',
  count = '-'
}: ProductCardProps) => {
  return (
    <div className="h-[350px] w-[195px] lg:w-[226px] lg:h-[360px] border border-purple-200 rounded-md overflow-hidden shadow-md flex flex-col">
      {/* BAGIAN GAMBAR */}
      <div className="relative h-1/2 bg-yellow-200">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        {isNew && (
          <div className="absolute top-2 right-2 bg-white text-red-600 text-xs font-bold px-2 py-1 rounded">
            New Arrival
          </div>
        )}
      </div>

      {/* BAGIAN ISI */}
      <div className="bg-[#f4e8dc] px-4 py-3 flex flex-col justify-between h-1/2 text-[#3a0b03]">
        <div className="border-b border-purple-200 pb-2 mb-2">
          <h3 className="text-base lg:text-lg font-semibold leading-tight line-clamp-2">{title}</h3>
        </div>

        <div className="flex justify-between text-sm mb-4">
          <span className="font-medium text-xs lg:text-base">{price}</span>
          <span className="text-gray-700 text-xs lg:text-base">{count}</span>
        </div>

        <button className="w-full border-t border-purple-300 pt-2 text-center text-sm tracking-wider font-semibold text-xs lg:text-base">
          SELECT OPTIONS
        </button>
      </div>
    </div>
  )
}
