import Container from "../Container"
import Heading from "../Heading"
import Button from "../Button"
import ReviewFilter from "./ReviewFilter"
import ReviewCard from "./ReviewCard"
import { Pagination } from "@mui/material"

const ReviewsShop = () => {
  return (
    <div className="mb-4">
      <Container>
        <div className="bg-white flex flex-col">
          <div className="my-5 flex item-center justify-between">
            <Heading title="Đánh giá cửa hàng" />
            <div>
              <Button label="Viết đánh giá" color="orange" custom={"w-[200px]"} />
            </div>
          </div>
          <ReviewFilter />
          <div className="w-full mx-5 mt-8 flex flex-col justify-center items-center gap-4">
            <ReviewCard />
            <ReviewCard />
          </div>
          <div className="my-8 flex justify-center items-center">
            <Pagination count={10} color="secondary" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ReviewsShop