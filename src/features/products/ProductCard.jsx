import { Link } from "react-router-dom";
import { Heart, ArrowUpRight } from "lucide-react";

import useWishlist from "../../hooks/useWishlist";

function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist, loading } = useWishlist(product._id);

  const hasDiscount = product.discountPrice < product.price;

  return (
    <div className="group relative">
      {/* =====================================================
          IMAGE
      ===================================================== */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[20px]
          bg-gray-100

          sm:rounded-[24px]
        "
      >
        <Link to={`/products/${product.slug}`} className="block">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={product.images[0]?.url}
              alt={product.name}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.05]
              "
            />
          </div>
        </Link>

        {/* =================================================
            DISCOUNT BADGE
        ================================================= */}
        {hasDiscount && (
          <div
            className="
              absolute
              left-3
              top-3
              z-10

              rounded-full
              bg-white
              px-3
              py-1.5

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-gray-950

              shadow-sm

              sm:left-4
              sm:top-4
            "
          >
            Sale
          </div>
        )}

        {/* =================================================
            WISHLIST
        ================================================= */}
        <button
          disabled={loading}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            toggleWishlist();
          }}
          className={`
            absolute
            right-3
            top-3
            z-20

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            border
            border-white/70

            shadow-sm
            backdrop-blur-md

            transition-all
            duration-300

            sm:right-4
            sm:top-4
            sm:h-11
            sm:w-11

            ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-900 hover:bg-gray-950 hover:text-white"
            }
          `}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        {/* =================================================
            QUICK VIEW / ARROW
        ================================================= */}
        <Link
          to={`/products/${product.slug}`}
          className="
            absolute
            bottom-3
            right-3
            z-10

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            bg-white
            text-gray-950

            opacity-0
            shadow-md

            transition-all
            duration-300

            group-hover:opacity-100
            group-hover:translate-y-0

            translate-y-2

            hover:bg-gray-950
            hover:text-white

            sm:bottom-4
            sm:right-4
            sm:h-11
            sm:w-11
          "
          aria-label={`View ${product.name}`}
        >
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </Link>
      </div>

      {/* =====================================================
          PRODUCT DETAILS
      ===================================================== */}
      <Link to={`/products/${product.slug}`} className="mt-4 block sm:mt-5">
        {/* Brand */}
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-gray-400

            sm:text-[11px]
          "
        >
          {product.brand}
        </p>

        {/* Product name */}
        <h3
          className="
            mt-2
            line-clamp-2
            min-h-[42px]

            text-[14px]
            font-medium
            leading-5
            tracking-[-0.01em]
            text-gray-950

            transition-colors
            duration-200

            group-hover:text-gray-600

            sm:text-[15px]
            sm:leading-6
          "
        >
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[15px] font-semibold text-gray-950 sm:text-base">
            ₹{product.discountPrice}
          </span>

          {hasDiscount && (
            <span className="text-xs text-gray-400 line-through sm:text-sm">
              ₹{product.price}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
