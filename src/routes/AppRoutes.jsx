import {
  Route,
  Routes,
} from 'react-router-dom';
import OverviewShop from '../components/overview/OverviewShop';
import ProductsShop from '../components/products/ProductsShop';
import ReviewsShop from '../components/review/ReviewsShop';
import Shops from '../components/shops/Shops';
import SignIn from '../components/AuthPage/Login';
import MuiBreadcrumbs from '../components/layout/MuiBreadcrumbs';
import HomePage from '../components/homePage/HomePage';
import ProductDetail from '../components/products/ProductDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="*"
        exact
        element={<HomePage />}
      />
      <Route
        path="/login"
        element={<SignIn />}
      />
      <Route
        path="/shop"
        element={
          <div className="flex flex-col">
            <Shops />
          </div>
        }
      />
      <Route
        path="/shop/:shopId/overview"
        element={
          <div className="flex flex-col">
            <MuiBreadcrumbs />
            <OverviewShop />
          </div>
        }
      />
      {/* <Route
        path="/shop/:shopId/products"
        element={
          <>
            <MuiBreadcrumbs />
            <ProductsShop />
          </>
        }
      />
      <Route
        path="/shop/:shopId/products/:productId"
        element={
          <>
            <MuiBreadcrumbs />
            <ProductDetail />
          </>
        }
      />
      <Route
        path="/shop/:shopId/reviews"
        element={
          <>
            <MuiBreadcrumbs />
            <ReviewsShop />
          </>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
