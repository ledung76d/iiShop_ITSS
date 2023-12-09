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

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/login"
        element={<SignIn />}
      />
      <Route
        path="/shop"
        element={
          <div className="flex flex-col px-10">
            <Shops />
          </div>
        }
      />
      <Route
        path="/shop/:shopId/overview"
        element={
          <div className="flex flex-col px-10">
            <MuiBreadcrumbs />
            <OverviewShop />
          </div>
        }
      />
      <Route
        path="/shop/:shopId/products"
        element={
          <>
            <MuiBreadcrumbs />
            <ProductsShop />
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
      />
    </Routes>
  );
};

export default AppRoutes;
