import { Box, CircularProgress, Pagination } from "@mui/material";
import Container from "../Container"
import Heading from "../Heading"
import ProductCard from "./ProductCard"
import { useAuth } from "../AuthPage/hook/useAuth";
import { shopAPIs } from "../../service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsShop = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLogged } = useAuth();

  const { shopId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [dataFinal, setDataFinal] = useState([])

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const param = {
        storeId: shopId,
      }
      const res = await shopAPIs.getStoreDetail(param);
      // console.log('res', res)
      if (res.data.EC === 200) {
        const listProduct = res.data.data.products
        setProducts(listProduct)
        const countPage = Math.ceil(listProduct.length / 8)
        setTotalPage(countPage)
        setDataFinal(listProduct.slice(0, 8))
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const handleChangePage = (event, value) => {
    setPage(value)
    setDataFinal(products.slice((value - 1) * 8, value * 8))
  }

  useEffect(() => {
    fetchProducts()
  }, [shopId])

  return (
    <div>
      <Container>
        <div className="my-4">
          <Heading title="Sản phẩm cửa hàng" />
        </div>
        <div className="grid grid-cols-2 mt-5 mx-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2x:grid-cols-4 gap-8">
          {dataFinal.length > 0 && dataFinal?.map((product) => {
            return <ProductCard key={product._id} product={product} />
          })}
        </div>
        <div className="my-8 flex justify-center items-center">
          {!isLoading ?
            <Pagination
              count={totalPage}
              page={page}
              color="secondary"
              onChange={(event, value) => handleChangePage(event, value)}
            /> :
            <Box
              sx={{ display: 'flex', minHeight: '300px' }}
            >
              <CircularProgress sx={{
                margin: 'auto',
              }} />
            </Box>
          }
        </div>
      </Container>
    </div>
  )
}

export default ProductsShop