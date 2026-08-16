import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Loader from "../common/Loader";
import Empty from "../common/Empty";
import ProductCard from "../../features/products/ProductCard";
import { useGetProductsQuery } from "../../features/products/productApi";

function FeaturedProducts() {
  const { data, isLoading, isError } = useGetProductsQuery({
    limit: 8,
  });

  if (isLoading) {
    return (
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Loader />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Empty title="Unable to load products" />
      </section>
    );
  }

  const products = data?.data?.products || [];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
                Curated for you
              </span>
            </div>

            <h2
              className="
                text-[38px]
                font-semibold
                leading-none
                tracking-[-0.045em]
                text-gray-950

                sm:text-[46px]

                lg:text-[52px]
              "
            >
              Featured pieces
            </h2>

            <p
              className="
                mt-5
                max-w-[500px]
                text-sm
                leading-7
                text-gray-500

                sm:text-[15px]
              "
            >
              Discover pieces selected from our latest collections, designed to
              bring effortless style to your everyday wardrobe.
            </p>
          </div>

          {/* View All */}
          <Link
            to="/products"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border-b
              border-gray-300
              pb-2
              text-sm
              font-semibold
              text-gray-900
              transition-colors
              duration-300
              hover:border-gray-950
            "
          >
            View all products
            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-x-5
              gap-y-10

              sm:grid-cols-2
              sm:gap-x-6
              sm:gap-y-12

              lg:grid-cols-4
            "
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <Empty title="No products available" />
        )}
      </Container>
    </section>
  );
}

export default FeaturedProducts;
