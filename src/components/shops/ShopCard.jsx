/* eslint-disable react/prop-types */
import { Rating } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";
import { truncateText } from "../../utils/truncateText";

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
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-slate-600 font-bold overflow-hidden text-ellipsis whitespace-nowrap">
              {shop?.name}
            </span>
            <div className="flex items-center gap-1 text-slate-400">
              <span className="text-xl font-bold">{shop?.rating}</span>
              {shop?.reviews.length > 0 ?
                <Rating value={shop?.rating} readOnly />
                :
                <Rating value={0} readOnly />
              }
              <span>({shop?.reviews.length})</span>
            </div>
            <div className="flex items-center">
              <LocationOnIcon color="blue" />
              <span className="text-slate-500 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{truncateText(shop?.address, 30)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCard