import { Pagination } from "@mui/material";
import Container from "../Container"
import Heading from "../Heading"
import ProductCard from "./ProductCard"
import { useAuth } from "../AuthPage/hook/useAuth";

const ProductsShop = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLogged } = useAuth();
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Dell Latitude 3520`,
    price: 10000000 + (i + 1) * 500000,
    image: `https://cdn-amz.woka.io/images/I/715s65DmFlL.jpg`,
    color: [
      {
        name: "Đen",
        value: "#000"
      },
      {
        name: "Trắng",
        value: "#fff"
      }
    ],
    discount: (i + 1) % 3 === 0 ? 10 : 0,
  }));


  return (
    <div>
      <Container>
        <div className="my-4">
          <Heading title="Sản phẩm cửa hàng" />
        </div>
        <div className="grid grid-cols-2 mt-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x:grid-cols-6 gap-8">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
        <div className="my-8 flex justify-center items-center">
          <Pagination count={10} color="secondary" />
        </div>
      </Container>
    </div>
  )
}

export default ProductsShop