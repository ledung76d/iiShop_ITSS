/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom"
import { formatPrice } from "../../utils/formatPrice"

const ProductCard = ({ product }) => {
  const { shopId } = useParams()
  const navigate = useNavigate()
  const { name, price, images, sale } = product

  // const handleClick = () => {
  //   navigate(`/shop/${shopId}/products/${product._id}`)
  // }

  return (
    <div
      className="col-span-1 cursor-pointer border-pointer border-[1.2px]
     border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-sm"
    // onClick={handleClick}
    >
      <div className="flex flex-col w-full gap-1">
        <div className="aspect-square overflow-hidden w-full relative">
          <img
            className="h-full w-full object-contain"
            src={images[0].url} alt={name}
          />
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <div
              className="text-slate-500 font-semibold h-[60px]"
              style={{
                overflow: "hidden",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                textTransform: 'uppercase',
                display: "-webkit-box",
              }}
            >
              <span>{name}</span>
            </div>
            <div className="flex gap-2 text-slate-600 font-semibold">
              Từ:
              <span>
                {formatPrice(price)}
              </span>
              {sale > 0 && (
                <span className="bg-red-100 text-coral-red ">
                  -{sale}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductCard