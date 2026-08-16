import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";

import { useAddToCartMutation } from "../cart/cartAPI";

import useWishlist from "../../hooks/useWishlist";

function ProductInfo({ product }) {
  const [size, setSize] = useState(product.sizes[0] || "");
  const [color, setColor] = useState(product.colors[0] || "");
  const [quantity, setQuantity] = useState(1);

  const [addToCart, { isLoading }] = useAddToCartMutation();

  const {
    isWishlisted,
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist(product._id);

  const discount =
    product.price > product.discountPrice
      ? product.price - product.discountPrice
      : 0;

  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="h-px w-7 bg-gray-300" />

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
          {product.brand}
        </p>
      </div>

      {/* Product Name */}
      <h1
        className="
          mt-4
          max-w-2xl
          text-3xl
          font-bold
          leading-[1.08]
          tracking-[-0.045em]
          text-gray-950
          sm:text-4xl
          lg:text-[44px]
        "
      >
        {product.name}
      </h1>

      {/* Price */}
      <div className="mt-7 border-y border-gray-100 py-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[30px] font-bold tracking-[-0.04em] text-gray-950">
            ₹{product.discountPrice}
          </span>

          {discount > 0 && (
            <>
              <span className="text-base text-gray-400 line-through">
                ₹{product.price}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-600">
                Save ₹{discount}
              </span>
            </>
          )}
        </div>

        <p className="mt-2 text-xs text-gray-400">
          Inclusive of applicable taxes
        </p>
      </div>

      {/* Stock */}
      <div className="mt-5">
        {product.stock > 0 ? (
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-100 bg-gray-50 px-4 py-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
              <Check size={12} className="text-green-600" strokeWidth={3} />
            </span>

            <span className="text-sm font-semibold text-gray-800">
              In Stock
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-300" />

            <span className="text-sm text-gray-500">
              {product.stock} available
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-red-50 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />

            <span className="text-sm font-semibold text-red-600">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-7">
        <p className="max-w-2xl text-[14px] leading-7 text-gray-500 sm:text-[15px]">
          {product.description}
        </p>
      </div>

      {/* Size */}
      {product.sizes?.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-950">Select Size</h3>

            <span className="text-xs font-medium text-gray-400">Required</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {product.sizes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSize(item)}
                className={`
                  min-w-[54px]
                  rounded-xl
                  border
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gray-950
                  focus:ring-offset-2

                  ${
                    size === item
                      ? "border-gray-950 bg-gray-950 text-white shadow-[0_5px_15px_rgba(0,0,0,0.12)]"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color */}
      {product.colors?.length > 0 && (
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-950">Select Color</h3>

            <span className="text-xs font-medium text-gray-400">Required</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {product.colors.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setColor(item)}
                className={`
                  rounded-xl
                  border
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gray-950
                  focus:ring-offset-2

                  ${
                    color === item
                      ? "border-gray-950 bg-gray-950 font-semibold text-white shadow-[0_5px_15px_rgba(0,0,0,0.12)]"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Actions */}
      <div className="mt-8">
        <h3 className="text-sm font-bold text-gray-950">Quantity</h3>

        <div className="mt-3 flex flex-wrap gap-3">
          {/* Quantity */}
          <div className="inline-flex h-14 items-center overflow-hidden rounded-xl border border-gray-200 bg-white">
            <button
              type="button"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="
                flex
                h-full
                w-12
                items-center
                justify-center
                text-gray-500
                transition
                hover:bg-gray-50
                hover:text-gray-950
              "
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>

            <span className="flex h-full min-w-14 items-center justify-center border-x border-gray-100 px-4 text-sm font-bold text-gray-950">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                quantity < product.stock && setQuantity(quantity + 1)
              }
              className="
                flex
                h-full
                w-12
                items-center
                justify-center
                text-gray-500
                transition
                hover:bg-gray-50
                hover:text-gray-950
              "
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="mt-5 flex gap-3">
        <Button
          className="flex-1"
          disabled={isLoading || product.stock <= 0}
          onClick={async () => {
            try {
              await addToCart({
                productId: product._id,
                quantity,
                size,
                color,
              }).unwrap();

              toast.success("Added to cart");
            } catch (err) {
              toast.error(err?.data?.message || "Failed to add to cart");
            }
          }}
        >
          <ShoppingBag size={18} />

          {isLoading ? "Adding..." : "Add To Cart"}
        </Button>

        <button
          type="button"
          disabled={wishlistLoading}
          onClick={() =>
            toggleWishlist({
              size,
              color,
              quantity,
            })
          }
          aria-label="Add to wishlist"
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-[12px]
            border
            transition-all
            duration-200

            ${
              isWishlisted
                ? "border-red-500 bg-red-500 text-white shadow-[0_8px_20px_rgba(239,68,68,0.18)]"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            }

            disabled:cursor-not-allowed
            disabled:opacity-50
          `}
        >
          <Heart
            size={21}
            fill={isWishlisted ? "currentColor" : "none"}
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* Product Benefits */}
      <div className="mt-7 grid grid-cols-3 border-y border-gray-100 py-5">
        <div className="flex flex-col items-center gap-2 border-r border-gray-100 px-2 text-center">
          <Truck size={18} className="text-gray-700" />

          <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
            Fast Delivery
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 border-r border-gray-100 px-2 text-center">
          <ShieldCheck size={18} className="text-gray-700" />

          <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
            Secure Order
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 px-2 text-center">
          <Check size={18} className="text-gray-700" />

          <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
            Quality Assured
          </span>
        </div>
      </div>

      {/* Payment Note */}
      <p className="mt-4 text-center text-xs text-gray-400">
        Cash on Delivery available
      </p>
    </div>
  );
}

export default ProductInfo;
