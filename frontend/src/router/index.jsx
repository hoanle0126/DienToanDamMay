import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import LandingPage from "../pages/ClientPage/LandingPage";
import AdminLayout from "@/layouts/AdminLayout";
import DashboardPage from "@/pages/AdminPage/DashboardPage";
import ProductPage from "@/pages/AdminPage/ProductPage";
import HeathyBeautyPage from "@/pages/AdminPage/HeathyBeautyPage";
import HeathyBeautyAddPage from "@/pages/AdminPage/HeathyBeautyPage/AddPage";
import HeathyBeautyViewPage from "@/pages/AdminPage/HeathyBeautyPage/ViewPage";
import BrandPage from "@/pages/AdminPage/BrandPage";
import OrderPage from "@/pages/AdminPage/OrderPage";
import DermaHairPage from "@/pages/AdminPage/DermaHairPage";
import ClinicPage from "@/pages/AdminPage/ClinicPage";
import BrandAddPage from "@/pages/AdminPage/BrandPage/AddPage";
import BrandViewPage from "@/pages/AdminPage/BrandPage/ViewPage";
import AddProductPage from "@/pages/AdminPage/ProductPage/AddPage";
import ViewProductPage from "@/pages/AdminPage/ProductPage/UpdatePage";
import HotDealsPage from "@/pages/AdminPage/HotDealsPage";
import FlashDealsPage from "@/pages/AdminPage/FlashDealsPage";
import HotDealsAddPage from "@/pages/AdminPage/HotDealsPage/AddPage";
import HotDealsViewPage from "@/pages/AdminPage/HotDealsPage/ViewPage";
import ProductDetail from "@/pages/ClientPage/ProductDetail";
import CheckoutPage from "@/pages/ClientPage/CheckoutPage";
import AddressPage from "@/pages/ClientPage/AddressPage";
import CustomerLayout from "@/layouts/ClientLayout/CustomerLayout";
import AccountPage from "@/pages/ClientPage/AccountPage";
import AccountEditPage from "@/pages/ClientPage/AccountEditPage";
import LoyaltyPage from "@/pages/ClientPage/LoyaltyPage";
import ListOrderPage from "@/pages/ClientPage/ListOrderPage";
import BookingPage from "@/pages/ClientPage/BookingPage";
import WishlistPage from "@/pages/ClientPage/WishlistPage";
import RepurchasePage from "@/pages/ClientPage/RepurchasePage";
import QuestionPage from "@/pages/ClientPage/QuestionPage";
import AddressAddPage from "@/pages/ClientPage/AddressPage/AddPage";
import AddressViewPage from "@/pages/ClientPage/AddressPage/ViewPage";
import CartPage from "@/pages/ClientPage/CartPage";
import CheckoutLayout from "@/layouts/CheckoutLayout";
import DiscountCodePage from "@/pages/AdminPage/DiscountCodePage";
import VoucherPage from "@/pages/AdminPage/VoucherPage";
import CategoryProductsPage from "@/pages/ClientPage/CategoryProductsPage";
import BrandProductPage from "@/pages/ClientPage/BrandProductPage";
import BrandClientPage from "@/pages/ClientPage/BrandsPage";
import HotDealClientPage from "@/pages/ClientPage/HotDealPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/san-pham/:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout/cart",
        element: <CartPage />,
      },
      {
        path: "/danh-muc/:id",
        element: <CategoryProductsPage />,
      },
      {
        path: "/thuong-hieu",
        element: <BrandClientPage />,
      },
      {
        path: "/thuong-hieu/:id",
        element: <BrandProductPage />,
      },
      {
        path: "/campaign/wow",
        element: <HotDealClientPage />,
      },
      {
        path: "customer",
        element: <CustomerLayout />,
        children: [
          { path: "address/index", element: <AddressPage /> },
          { path: "address/new", element: <AddressAddPage /> },
          { path: "address/edit/:id", element: <AddressViewPage /> },
          { path: "account/index", element: <AccountPage /> },
          { path: "account/edit", element: <AccountEditPage /> },
          { path: "loyalty/home", element: <LoyaltyPage /> },
          { path: "order/history", element: <ListOrderPage /> },
          { path: "booking/history", element: <BookingPage /> },
          { path: "wishlist/index", element: <WishlistPage /> },
          { path: "repurchase-product", element: <RepurchasePage /> },
          { path: "question", element: <QuestionPage /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <DashboardPage />,
      },
      {
        path: "/admin/products",
        element: <ProductPage />,
      },
      {
        path: "/admin/products/create",
        element: <AddProductPage />,
      },
      {
        path: "/admin/products/:id",
        element: <ViewProductPage />,
      },
      {
        path: "/admin/categories/heathy-&-beauty",
        element: <HeathyBeautyPage />,
      },
      {
        path: "/admin/categories/hasaki-clinic-&-spa",
        element: <ClinicPage />,
      },
      {
        path: "/admin/categories/dermahair",
        element: <DermaHairPage />,
      },
      {
        path: "/admin/categories/heathy-&-beauty/create",
        element: <HeathyBeautyAddPage />,
      },
      {
        path: "/admin/categories/heathy-&-beauty/:id",
        element: <HeathyBeautyViewPage />,
      },
      {
        path: "/admin/brands",
        element: <BrandPage />,
      },
      {
        path: "/admin/brands/create",
        element: <BrandAddPage />,
      },
      {
        path: "/admin/brands/:id",
        element: <BrandViewPage />,
      },
      {
        path: "/admin/deals/hot-deals",
        element: <HotDealsPage />,
      },
      {
        path: "/admin/deals/hot-deals/create",
        element: <HotDealsAddPage />,
      },
      {
        path: "/admin/deals/hot-deals/:id",
        element: <HotDealsViewPage />,
      },
      {
        path: "/admin/deals/flash-deals",
        element: <FlashDealsPage />,
      },
      {
        path: "/admin/orders",
        element: <OrderPage />,
      },
      {
        path: "/admin/discounts",
        element: <DiscountCodePage />,
      },
    ],
  },
  {
    path: "/",
    element: <CheckoutLayout />,
    children: [
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
