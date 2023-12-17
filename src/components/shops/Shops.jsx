import { Pagination } from "@mui/material"
import Container from "../Container"
import ShopCard from "./ShopCard"
import TopFilter from "./TopFilter"
import { useAuth } from "../AuthPage/hook/useAuth"
import { useEffect, useState } from "react"
import { shopAPIs } from "../../service"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Heading from "../Heading"

const Shops = () => {
  const { searchVal } = useAuth()
  const [shops, setShops] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const [sort, setSort] = useState({
    ratingAz: false,
    ratingZa: true,
    credibilityAz: false,
    credibilityZa: false,
  })

  const handleSort = (name) => {
    setPage(1)
    const newSort = {
      ratingAz: false,
      ratingZa: false,
      credibilityAz: false,
      credibilityZa: false,
    }
    if (sort[name] === true) return;
    setSort({
      ...newSort,
      [name]: true
    })
  }

  const fetchShops = async () => {
    setIsLoading(true)
    try {
      const param = {
        page: page - 1,
        limit: 8,
        search: searchVal,
        ...sort,
      }
      const res = await shopAPIs.getAll(param);
      if (res.data.EC === 200) {
        setShops(res.data.data)
        const countPage = Math.ceil(res.data.count / 8)
        setTotalPage(countPage)
      }
      else alert(res.data.message)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const handleChangePage = async (e, value) => {
    setPage(value)
  }

  useEffect(() => {
    fetchShops()
  }, [page, sort])

  useEffect(() => {
    fetchShops()
  }, [searchVal])

  return (
    <div className="">
      <Container>
        <div className="m-4">
          <Heading title={"Danh sách cửa hàng"} />
          <TopFilter
            listSort={sort}
            handleSort={handleSort}
          />
          <div className="mt-4 flex flex-col justify-center items-center">
            {/* <hr className="w-full my-2 border-2" /> */}
            {isLoading ?
              <Box
                sx={{ display: 'flex', minHeight: '300px' }}
              >
                <CircularProgress sx={{
                  margin: 'auto',
                }} />
              </Box> :
              <>
                <div className="grid grid-cols-2 mx-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2x:grid-cols-4 gap-8">
                  {shops.length > 0 && shops?.map((shop) => {
                    return <ShopCard key={shop.id} shop={shop} />
                  })}
                </div>
                <div className="my-8 flex justify-center items-center">
                  {shops.length > 0 &&
                    < Pagination
                      count={totalPage}
                      page={page}
                      color="secondary"
                      onChange={(e, value) => handleChangePage(e, value)}
                    />
                  }
                </div>
              </>
            }
          </div>
        </div>
      </Container >
    </div >
  )
}

export default Shops
