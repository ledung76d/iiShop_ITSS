import { Pagination } from "@mui/material"
import Container from "../Container"
import ShopCard from "./ShopCard"
import TopFilter from "./TopFilter"
import { useAuth } from "../AuthPage/hook/useAuth"
import { useEffect, useState } from "react"
import { dataShop } from "../../utils/test"
import { shopAPIs } from "../../service"

const Shops = () => {
  const { searchVal } = useAuth()
  const [shops, setShops] = useState(dataShop)
  const fetchShops = async () => {
    console.log('fetching')
    try {
      const res = await shopAPIs.test()
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchShops()
  }, [])

  useEffect(() => {
    if (searchVal) {
      const filterShops = dataShop.filter(shop => shop.name.toLowerCase().includes(searchVal.toLowerCase()))
      setShops(filterShops)
    } else {
      setShops(dataShop)
    }
  }, [searchVal])

  return (
    <div>
      <Container>
        <div className="m-4">
          <TopFilter />
          <div className="mt-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Kết quả</h1>
            <hr className="w-full my-4 border-2" />
            <div className="grid grid-cols-2 mx-20 mt-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x;:grid-cols-6 gap-8">
              {shops.map((shop) => {
                return <ShopCard key={shop.id} shop={shop} />
              })}
            </div>
            <div className="my-8 flex justify-center items-center">
              <Pagination count={10} color="secondary" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shops