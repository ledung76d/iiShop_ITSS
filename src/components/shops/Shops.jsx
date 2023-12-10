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
    name: 'DESC',
    rating: 'DESC',
    date: 'DESC',
    credibility: 'DESC'
  })

  const handleSort = (name, type) => {
    setSort({
      ...sort,
      [name]: 'DESC' === type ? 'ASC' : 'DESC'
    })
  }

  const fetchShops = async () => {
    setIsLoading(true)
    try {
      const param = {
        page: page - 1,
        limit: 8,
        search: searchVal,
        name: sort.name,
        rating: sort.rating,
        date: sort.date,
        credibility: sort.credibility
      }
      const res = await shopAPIs.getAll(param);
      if (res.data.EC === 200) {
        setShops(res.data.data)
        console.log(res.data.data)
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
  }, [page, searchVal])

  useEffect(() => {
    if (searchVal) {
      const filterShops = shops.filter(shop => shop.name.toLowerCase().includes(searchVal.toLowerCase()))
      setShops(filterShops)
    } else {
      fetchShops()
    }
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
            <hr className="w-full my-2 border-2" />
            {isLoading ?
              <Box
                sx={{ display: 'flex', minHeight: '300px' }}
              >
                <CircularProgress sx={{
                  margin: 'auto',
                }} />
              </Box> :
              <>
                <div className="grid grid-cols-2 mx-20 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2x:grid-cols-4 gap-8">
                  {shops.length > 0 && shops?.map((shop) => {
                    return <ShopCard key={shop.id} shop={shop} />
                  })}
                </div>
                <div className="my-8 flex justify-center items-center">
                  {shops.length > 0 &&
                    < Pagination
                      count={totalPage}
                      defaultPage={1}
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
      </Container>
    </div>
  )
}

export default Shops
