import Container from "../Container"
import Heading from "../Heading"
import ReviewFilter from "./ReviewFilter"
import MessageCard from "./MessageCard"
import { Pagination } from "@mui/material"
import ReviewModal from "./components/ReviewModal"
import { useEffect, useState } from "react"
import { shopAPIs } from "../../service"
import { useParams } from "react-router-dom"


const filterValue = [
  {
    name: "Tất cả",
    key: "all",
    value: 0,
    isSelect: true, // true: all, false: isSelect   
  },
  {
    name: "5 sao",
    key: "5star",
    value: 20000,
    isSelect: false,
  },
  {
    name: "4 sao",
    key: "4star",
    value: 20000,
    isSelect: false,
  },
  {
    name: "3 sao",
    key: "3star",
    value: 20000,
    isSelect: false,
  },
  {
    name: "2 sao",
    key: "2star",
    value: 20000,
    isSelect: false,
  },
  {
    name: "1 sao",
    key: "1star",
    value: 20000,
    isSelect: false,
  },
  {
    name: "Có hình ảnh",
    key: "file",
    value: 0,
    isSelect: false,
  },
  {
    name: "Có bình luận",
    key: "comment",
    value: 10,
    isSelect: false,
  }
]

const ReviewsShop = () => {
  const { shopId } = useParams()

  const [filter, setFilter] = useState(filterValue)
  const [reviews, setReviews] = useState([])
  const [shop, setShop] = useState({})

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const handleFilter = (key) => {
    // clone filterValue
    const dataFilter = filterValue.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          isSelect: true
        }
      }
      return {
        ...item,
        isSelect: false
      }
    })
    setFilter(dataFilter)
  }

  const handleOnChangePage = (event, value) => {
    setPage(value)
  }

  const fetchReviews = async () => {
    try {
      const param = {
        storeId: shopId,
      }
      const res = await shopAPIs.getStoreDetail(param);
      if (res.data.EC === 200) {
        const shopDetail = res.data.data
        setShop({
          name: shopDetail.name,
          address: shopDetail.address,
          images: shopDetail.images,
        })
        // console.log(shopDetail)
        const listReviews = res.data.data.reviews
        // const countPage = Math.ceil(listReviews.length / 8)
        // setTotalPage(countPage)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <div className="mb-4">
      <Container>
        <div className="bg-white flex flex-col">
          <div className="my-5 flex item-center justify-between">
            <Heading title="Đánh giá cửa hàng" />
            <div>
              <ReviewModal />
            </div>
          </div>
          <ReviewFilter
            filter={filter}
            handleFilter={handleFilter}
          />
          <div className=" mx-4 mt-8 flex flex-col gap-4">
            <MessageCard />
            <hr className="w-full my-2" />
            <MessageCard />
          </div>
          <div className="my-8 flex justify-center items-center">
            <Pagination
              page={page}
              count={totalPage}
              onChange={(event, value) => handleOnChangePage(event, value)}
              color="secondary"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ReviewsShop