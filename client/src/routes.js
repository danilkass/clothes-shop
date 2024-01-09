import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket/Basket";
import ProductPage from "./pages/ProductPage/ProductPage";
import Shop from "./pages/Shop/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
];
