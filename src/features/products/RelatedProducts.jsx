import { ArrowUpRight, Sparkles } from "lucide-react";

import ProductCard from "./ProductCard";

function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="mt-20 border-t border-gray-100 pt-14 sm:mt-28 sm:pt-20">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-950 text-white">
              <Sparkles size={13} />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Curated For You
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-[-0.04em] text-gray-950 sm:text-3xl">
            You May Also Like
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
            Discover more pieces that complement your style.
          </p>
        </div>

        <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:flex">
          Explore More
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Products */}
      <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
