import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { useGetCartQuery } from "../../features/cart/cartAPI";
import { logout } from "../../features/auth/authSlice";

import Logo from "./Logo";
import useWishlist from "../../hooks/useWishlist";
import Container from "./Container";

function Navbar() {
  const [searchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentSearch = searchParams.get("search") || "";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { wishlistCount } = useWishlist();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const { data } = useGetCartQuery(undefined, {
    skip: !isAuthenticated,
  });

  const cart = data?.data;

  const cartCount =
    cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function handleLogout() {
    dispatch(logout());

    toast.success("Logged out successfully");

    closeMobileMenu();
    navigate("/login");
  }

  function handleSearch(event) {
    event.preventDefault();

    const searchValue = event.currentTarget.search.value.trim();

    closeMobileMenu();

    if (!searchValue) {
      navigate("/products");
      return;
    }

    navigate(`/products?search=${encodeURIComponent(searchValue)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4 sm:h-20">
          {/* =====================================================
              LOGO
          ===================================================== */}
          <Logo />

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            <Link
              to="/"
              className="text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            >
              Shop
            </Link>

            <Link
              to="/products?category=Men"
              className="text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            >
              Men
            </Link>

            <Link
              to="/products?category=Women"
              className="text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            >
              Women
            </Link>

            <Link
              to="/products?category=Accessories"
              className="text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            >
              Accessories
            </Link>
          </nav>

          {/* =====================================================
              DESKTOP SEARCH
          ===================================================== */}
          <form
            onSubmit={handleSearch}
            className="
              hidden
              h-11
              w-[280px]
              items-center
              rounded-full
              border
              border-gray-200
              bg-gray-50
              px-4
              transition-all
              duration-200
              hover:border-gray-300
              hover:bg-white
              focus-within:border-gray-300
              focus-within:bg-white
              focus-within:shadow-[0_6px_24px_rgba(0,0,0,0.07)]
              lg:flex
              xl:w-[320px]
            "
          >
            <Search
              size={18}
              strokeWidth={1.8}
              className="shrink-0 text-gray-500"
            />

            <input
              name="search"
              type="text"
              defaultValue={currentSearch}
              placeholder="Search products..."
              className="
                ml-2
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-sm
                font-medium
                text-gray-900
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              type="submit"
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                text-gray-500
                transition
                hover:bg-gray-100
                hover:text-gray-900
                active:scale-95
              "
              aria-label="Search products"
            >
              <Search size={16} />
            </button>
          </form>

          {/* =====================================================
              RIGHT ACTIONS
          ===================================================== */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-gray-900 transition hover:text-red-500"
              aria-label="Wishlist"
            >
              <Heart size={25} strokeWidth={1.8} />

              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-900 transition hover:text-red-500"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={25} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile / Login */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="text-gray-900 transition hover:text-red-500"
                aria-label="Login"
              >
                <User size={25} strokeWidth={1.8} />
              </Link>
            ) : (
              <div className="hidden items-center gap-4 sm:flex">
                {user?.role === "admin" && (
                  <Link
                    to="/admin"
                    title="Admin Dashboard"
                    className="text-gray-900 transition hover:text-red-500"
                  >
                    <LayoutDashboard size={23} strokeWidth={1.8} />
                  </Link>
                )}

                <Link
                  to="/profile"
                  title={user?.name}
                  className="text-gray-900 transition hover:text-red-500"
                >
                  <User size={25} strokeWidth={1.8} />
                </Link>

                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="text-gray-900 transition hover:text-red-500"
                >
                  <LogOut size={25} strokeWidth={1.8} />
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-gray-900
                transition
                hover:bg-gray-100
                lg:hidden
              "
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={27} strokeWidth={1.8} />
              ) : (
                <Menu size={27} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            lg:hidden
            ${
              mobileMenuOpen
                ? "max-h-[520px] border-t border-gray-100 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="py-5 sm:py-6">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <div
                className="
                  flex
                  h-12
                  items-center
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  transition
                  focus-within:border-gray-400
                  focus-within:bg-white
                "
              >
                <Search
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-gray-500"
                />

                <input
                  name="search"
                  type="text"
                  defaultValue={currentSearch}
                  placeholder="Search products..."
                  className="
                    ml-3
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                <button
                  type="submit"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-gray-500
                    transition
                    hover:bg-gray-200
                    hover:text-gray-900
                  "
                  aria-label="Search products"
                >
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="divide-y divide-gray-100 border-y border-gray-100">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition hover:text-red-500"
              >
                Home
                <ArrowUpRight size={17} className="text-gray-400" />
              </Link>

              <Link
                to="/products"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition hover:text-red-500"
              >
                Shop
                <ArrowUpRight size={17} className="text-gray-400" />
              </Link>

              <Link
                to="/products?category=Men"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition hover:text-red-500"
              >
                Men
                <ArrowUpRight size={17} className="text-gray-400" />
              </Link>

              <Link
                to="/products?category=Women"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition hover:text-red-500"
              >
                Women
                <ArrowUpRight size={17} className="text-gray-400" />
              </Link>

              <Link
                to="/products?category=Accessories"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition hover:text-red-500"
              >
                Accessories
                <ArrowUpRight size={17} className="text-gray-400" />
              </Link>
            </nav>

            {/* Mobile Account Actions */}
            {isAuthenticated && (
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                <Link
                  to="/profile"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 text-sm font-medium text-gray-800"
                >
                  <User size={19} />
                  My Account
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-red-500"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}

            {/* Admin */}
            {isAuthenticated && user?.role === "admin" && (
              <Link
                to="/admin"
                onClick={closeMobileMenu}
                className="mt-3 flex items-center gap-3 rounded-2xl bg-gray-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-500"
              >
                <LayoutDashboard size={18} />
                Admin Dashboard
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
