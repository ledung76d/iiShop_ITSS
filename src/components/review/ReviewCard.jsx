import { Avatar, Rating } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const review = {
  name: 'Nguyễn Văn A',
  avatar: 'https://picsum.photos/200/300',
  date: '2021-10-10 19:16',
  rating: 5,
  title: 'Sản phẩm tốt',
  content: 'Sản phẩm tốt, giao hàng nhanh',
  like: 100,
  img: [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ]
}

const ReviewCard = () => {
  return (
    <>
      <div className="min-w-[400px] md:min-w-[1000px]">
        <div className="flex flex-row">
          <Avatar
            alt="name"
            src={review.avatar}
            sx={{ width: 56, height: 56 }}
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-slate-700 ml-1">{review.name}</span>
              <Rating value={review.rating} readOnly />
              <span className="text-slate-400 ml-1">{review.date}</span>
            </div>
            <span className="text-slate-700 ml-1">{review.content}</span>
            <div className="flex flex-row gap-3">
              {review.img.map((img, index) => {
                return (
                  <img key={index} src={img} alt="" className="w-[100px] h-[100px] object-cover" />
                )
              })}
            </div>
            <div className="flex gap-2">
              <ThumbUpIcon />
              <span>{review.like}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full my-2" />
    </>

  )
}

export default ReviewCard