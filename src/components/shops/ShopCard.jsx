import { Rating } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

const ShopCard = ({ shop }) => {
  const { name, rating, vote, address } = shop
  const nagative = useNavigate()

  return (
    <div className="flex flex-col my-2 cursor-pointer"
      onClick={() => nagative('/shop/' + shop._id + '/overview')}
    >
      <img src="https://laptop88.vn/media/news/0607_BVCN88-small.jpg" alt="test" />
      <div className="flex flex-col gap-2">
        <span>{name}</span>
        <div className="flex items-center gap-1 text-slate-400">
          {rating}
          <Rating value={rating} readOnly />
          ({vote})
        </div>
        <div className="flex items-start">
          <LocationOnIcon color="blue" />
          <span>{address}</span>
        </div>
      </div>
    </div>
  )
}

export default ShopCard