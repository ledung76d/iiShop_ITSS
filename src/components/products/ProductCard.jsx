/* eslint-disable react/prop-types */
import { formatPrice } from "../../utils/formatPrice"
import { truncateText } from "../../utils/truncateText"

const ProductCard = ({ product }) => {
  const { name, price, image, color, discount } = product

  return (
    <div
      className="col-span-1 cursor-pointer border-pointer border-[1.2px]
     border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-sm"
    >
      <div className="flex flex-col w-full gap-1">
        <div className="aspect-square overflow-hidden w-full relative">
          <img
            className="h-full w-full object-contain "
            src={image} alt={name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            {truncateText(name)}
          </div>
          <div className="flex gap-2">
            Từ:
            <span>
              {formatPrice(price)}
            </span>
            {discount > 0 && (
              <span className="bg-red-100 text-coral-red ">
                -{discount}%
              </span>
            )}
          </div>
          <div className="flex gap-2 items-center">
            Màu:
            {
              color.map((item) => {
                return (
                  <div key={item.value} style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: item.value,
                    border: "1px solid #ccc"
                  }}></div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard