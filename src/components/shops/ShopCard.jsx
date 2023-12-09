/* eslint-disable react/prop-types */
import { Rating } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

const ShopCard = ({ shop }) => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col my-2 cursor-pointer border-pointer border-[1.2px]
     border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-sm"
      onClick={() => {
        const idShop = '6574301e6b41c93addf72dcc'
        navigate(`/shop/${idShop}/overview`)
      }}
    >
      <div className="flex flex-col w-full gap-1">
        <div className="aspect-square overflow-hidden w-full relative">
          <img
            src={shop?.images[0]?.url}
            alt="test"
            className="h-full w-full object-contain "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span>{shop?.name}</span>
            <div className="flex items-center gap-1 text-slate-400">
              {shop?.rating}
              <Rating value={shop?.rating} readOnly />
              ({shop?.vote})
            </div>
            <div className="flex">
              <LocationOnIcon color="blue" />
              <span>{shop?.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCard