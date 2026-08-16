import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { useGetProductsQuery } from "../features/products/productApi";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";

import ProductCard from "../features/products/ProductCard";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filtersOpen, setFiltersOpen] = useState(false);

  /*
   * =========================================================
   * CURRENT URL VALUES
   * =========================================================
   */

  const currentCategory = searchParams.get("category") || "";

  const currentMinPrice = searchParams.get("price[gte]") || "";

  const currentMaxPrice = searchParams.get("price[lte]") || "";
  const currentSort = searchParams.get("sort") || "-createdAt";

  /*
   * =========================================================
   * FILTER STATE
   * =========================================================
   */

  const [selectedCategory, setSelectedCategory] = useState(currentCategory);

  const [minPrice, setMinPrice] = useState(currentMinPrice);

  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);

  /*
   * =========================================================
   * API PARAMETERS
   * =========================================================
   */

  const params = Object.fromEntries(searchParams.entries());

  const { data, isLoading } = useGetProductsQuery(params);

  /*
   * =========================================================
   * PRODUCT DATA
   * =========================================================
   */

  const products = data?.data?.products || [];

  const totalProducts = data?.data?.totalProducts || 0;

  const totalPages = data?.data?.totalPages || 1;

  const currentPage = data?.data?.currentPage || 1;

  /*
   * =========================================================
   * PAGE HEADING
   * =========================================================
   */

  const search = searchParams.get("search");

  const category = searchParams.get("category");

  let heading = "All Products";

  if (search) {
    heading = `Search Results for "${search}"`;
  } else if (category) {
    heading = `${category} Collection`;
  }

  /*
   * =========================================================
   * SORT OPTIONS
   * =========================================================
   */

  const sortOptions = [
    {
      label: "Featured",
      value: "-isFeatured -createdAt",
    },
    {
      label: "Newest",
      value: "-createdAt",
    },
    {
      label: "Price: Low to High",
      value: "price",
    },
    {
      label: "Price: High to Low",
      value: "-price",
    },
    {
      label: "Name: A-Z",
      value: "name",
    },
    {
      label: "Name: Z-A",
      value: "-name",
    },
  ];

  const selectedSort =
    sortOptions.find((option) => option.value === currentSort) ||
    sortOptions[0];

  /*
   * =========================================================
   * APPLY FILTERS
   * =========================================================
   */

  function applyFilters() {
    const nextParams = new URLSearchParams(searchParams);

    /*
     * Category
     */
    if (selectedCategory) {
      nextParams.set("category", selectedCategory);
    } else {
      nextParams.delete("category");
    }

    /*
     * Minimum price
     */
    if (minPrice) {
      nextParams.set("price[gte]", minPrice);
    } else {
      nextParams.delete("price[gte]");
    }

    if (maxPrice) {
      nextParams.set("price[lte]", maxPrice);
    } else {
      nextParams.delete("price[lte]");
    }

    /*
     * Always go back to page 1
     * after changing filters.
     */
    nextParams.set("page", "1");

    setSearchParams(nextParams);

    setFiltersOpen(false);
  }

  /*
   * =========================================================
   * CLEAR FILTERS
   * =========================================================
   */

  function clearFilters() {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.delete("category");
    nextParams.delete("price[gte]");
    nextParams.delete("price[lte]");
    nextParams.set("page", "1");

    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");

    setSearchParams(nextParams);
  }

  /*
   * =========================================================
   * SORT
   * =========================================================
   */

  function handleSort(value) {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set("sort", value);

    nextParams.set("page", "1");

    setSearchParams(nextParams);
  }

  /*
   * =========================================================
   * PAGINATION
   * =========================================================
   */

  function goToPage(page) {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    const nextParams = new URLSearchParams(searchParams);

    nextParams.set("page", String(page));

    setSearchParams(nextParams);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /*
   * =========================================================
   * PAGE NUMBERS
   * =========================================================
   */

  const pageNumbers = useMemo(() => {
    const pages = [];

    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }

    return pages;
  }, [totalPages]);

  /*
   * =========================================================
   * ACTIVE FILTER COUNT
   * =========================================================
   */

  const activeFilterCount = [
    currentCategory,
    currentMinPrice,
    currentMaxPrice,
  ].filter(Boolean).length;

  /*
   * =========================================================
   * LOADING
   * =========================================================
   */

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-white">
      <Container>
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="pb-8 pt-10 sm:pb-10 sm:pt-14 lg:pb-12 lg:pt-16">
          <div className="border-b border-gray-200 pb-8 sm:pb-10">
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 sm:text-[11px]">
                StyleHub Collection
              </span>
            </div>

            {/* Heading */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1
                  className="
                    max-w-4xl
                    text-[38px]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.045em]
                    text-gray-950
                    sm:text-[48px]
                    lg:text-[58px]
                  "
                >
                  {heading}
                </h1>

                {search && (
                  <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
                    Discover pieces selected for your search.
                  </p>
                )}

                {category && !search && (
                  <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
                    Discover pieces selected for your style.
                  </p>
                )}
              </div>

              {/* Product Count */}

              <div className="shrink-0">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                  {totalProducts} {totalProducts === 1 ? "Product" : "Products"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOLBAR
        ===================================================== */}

        <section className="pb-8">
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Filter Button */}

            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-gray-300
                bg-white
                px-5
                text-sm
                font-semibold
                text-gray-950
                transition
                duration-200
                hover:border-gray-950
                hover:bg-gray-950
                hover:text-white
              "
            >
              <SlidersHorizontal size={17} strokeWidth={1.8} />
              Filters
              {activeFilterCount > 0 && (
                <span
                  className="
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-950
                    px-1.5
                    text-[10px]
                    text-white
                  "
                >
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}

            <div className="relative flex items-center gap-3">
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:block">
                Sort by
              </span>

              <div className="relative">
                <select
                  value={currentSort}
                  onChange={(e) => handleSort(e.target.value)}
                  className="
                    h-11
                    appearance-none
                    rounded-full
                    border
                    border-gray-300
                    bg-white
                    py-0
                    pl-5
                    pr-11
                    text-sm
                    font-medium
                    text-gray-900
                    outline-none
                    transition
                    hover:border-gray-950
                    focus:border-gray-950
                  "
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACTIVE FILTERS
        ===================================================== */}

        {activeFilterCount > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Active:
            </span>

            {currentCategory && (
              <button
                type="button"
                onClick={() => {
                  const nextParams = new URLSearchParams(searchParams);

                  nextParams.delete("category");
                  nextParams.set("page", "1");

                  setSelectedCategory("");
                  setSearchParams(nextParams);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-800 transition hover:bg-gray-200"
              >
                {currentCategory}
                <X size={13} />
              </button>
            )}

            {currentMinPrice && (
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-800">
                Min ₹{currentMinPrice}
              </span>
            )}

            {currentMaxPrice && (
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-800">
                Max ₹{currentMaxPrice}
              </span>
            )}

            <button
              type="button"
              onClick={clearFilters}
              className="ml-1 text-xs font-semibold text-gray-500 underline underline-offset-4 transition hover:text-gray-950"
            >
              Clear all
            </button>
          </div>
        )}

        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        {products.length === 0 ? (
          <section className="pb-24">
            <Empty
              title={
                search
                  ? `No products found for "${search}"`
                  : category
                    ? `No ${category} products found`
                    : "No Products Found"
              }
            />
          </section>
        ) : (
          <section className="pb-16 sm:pb-20 lg:pb-24">
            <div
              className="
                grid
                grid-cols-2
                gap-x-4
                gap-y-10
                sm:gap-x-6
                sm:gap-y-12
                lg:grid-cols-3
                lg:gap-x-7
                lg:gap-y-14
                xl:grid-cols-4
                xl:gap-x-8
              "
            >
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            PAGINATION
        ===================================================== */}

        {products.length > 0 && totalPages > 1 && (
          <section className="border-t border-gray-200 py-10 sm:py-12">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              {/* Result Information */}

              <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                Page {currentPage} of {totalPages}
              </p>

              {/* Pagination */}

              <div className="flex items-center gap-2">
                {/* Previous */}

                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => goToPage(currentPage - 1)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    transition
                    hover:border-gray-950
                    hover:bg-gray-950
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                  aria-label="Previous page"
                >
                  <ChevronLeft size={17} />
                </button>

                {/* Pages */}

                <div className="flex items-center gap-1">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      className={`
                        flex
                        h-10
                        min-w-10
                        items-center
                        justify-center
                        rounded-full
                        px-3
                        text-sm
                        font-semibold
                        transition
                        ${
                          page === currentPage
                            ? "bg-gray-950 text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next */}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    transition
                    hover:border-gray-950
                    hover:bg-gray-950
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                  aria-label="Next page"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </section>
        )}
      </Container>

      {/* =======================================================
          FILTER DRAWER OVERLAY
      ======================================================= */}

      {filtersOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-[2px]"
          onClick={() => setFiltersOpen(false)}
        >
          {/* Drawer */}

          <aside
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-full
              max-w-md
              flex-col
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}

            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Refine
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                  Filters
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition hover:bg-gray-950 hover:text-white"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Content */}

            <div className="flex-1 overflow-y-auto px-6 py-7">
              {/* Category */}

              <div className="border-b border-gray-200 pb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-950">
                  Category
                </p>

                <div className="mt-5 space-y-3">
                  {["", "Men", "Women", "Accessories"].map((item) => {
                    const label = item || "All Products";

                    const checked = selectedCategory === item;

                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setSelectedCategory(item)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-gray-50"
                      >
                        <span
                          className={`text-sm ${
                            checked
                              ? "font-semibold text-gray-950"
                              : "text-gray-600"
                          }`}
                        >
                          {label}
                        </span>

                        <span
                          className={`
                              flex
                              h-5
                              w-5
                              items-center
                              justify-center
                              rounded-full
                              border
                              ${
                                checked
                                  ? "border-gray-950 bg-gray-950 text-white"
                                  : "border-gray-300"
                              }
                            `}
                        >
                          {checked && <Check size={12} strokeWidth={2.5} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price */}

              <div className="border-b border-gray-200 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-950">
                  Price
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2 block text-xs text-gray-400">
                      Minimum
                    </label>

                    <div className="flex h-12 items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-gray-950 focus-within:bg-white">
                      <span className="mr-2 text-sm text-gray-400">₹</span>

                      <input
                        type="number"
                        min="0"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="0"
                        className="w-full bg-transparent text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs text-gray-400">
                      Maximum
                    </label>

                    <div className="flex h-12 items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-gray-950 focus-within:bg-white">
                      <span className="mr-2 text-sm text-gray-400">₹</span>

                      <input
                        type="number"
                        min="0"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Any"
                        className="w-full bg-transparent text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}

            <div className="border-t border-gray-200 bg-white px-6 py-5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    h-12
                    flex-1
                    rounded-full
                    border
                    border-gray-300
                    text-sm
                    font-semibold
                    text-gray-900
                    transition
                    hover:border-gray-950
                  "
                >
                  Clear all
                </button>

                <button
                  type="button"
                  onClick={applyFilters}
                  className="
                    h-12
                    flex-[1.5]
                    rounded-full
                    bg-gray-950
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-red-500
                  "
                >
                  Apply filters
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Products;
