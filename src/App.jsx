import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderDetails from "./pages/OrderDetails";
import AdminProducts from "./pages/AdminProducts";
import ProductForm from "./pages/ProductForm";

import Cart from "./pages/Cart";
import Addresses from "./pages/Addresses";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";

import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

import useAuthLoader from "./hooks/useAuthLoader";

function App() {
  useAuthLoader();

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy" element={<Privacy />} />

          <Route path="/products/:slug" element={<Product />} />

          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/change-password"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/addresses"
            element={
              <ProtectedRoute>
                <Addresses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <AdminProducts />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/products/new"
            element={
              <AdminRoute>
                <ProductForm />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/products/:id/edit"
            element={
              <AdminRoute>
                <ProductForm />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <AdminOrders />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsers />
              </AdminRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
