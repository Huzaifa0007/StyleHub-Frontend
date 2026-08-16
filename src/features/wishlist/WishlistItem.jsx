import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, Minus, Plus, ArrowUpRight } from "lucide-react";

import toast from "react-hot-toast";
import { useState } from "react";

import { useUpdateWishlistItemMutation } from "./wishlistAPI";

function WishlistItem({ item, onRemove, onMove, loading }) {
  const product = item.product;

  const [size, setSize] = useState(item.size || "");
  const [color, setColor] = useState(item.color || "");
  const [quantity, setQuantity] = useState(item.quantity);

  const [updateWishlistItem, { isLoading: updating }] =
    useUpdateWishlistItemMutation();

  if (!product) return null;

  const price = product.discountPrice || product.price;
  const hasDiscount = product.discountPrice < product.price;

  async function updateOptions(
    newSize = size,
    newColor = color,
    newQuantity = quantity,
  ) {
    try {
      await updateWishlistItem({
        itemId: item._id,
        size: newSize,
        color: newColor,
        quantity: newQuantity,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update wishlist");
    }
  }

  async function changeSize(newSize) {
    setSize(newSize);

    await updateOptions(newSize, color, quantity);
  }

  async function changeColor(newColor) {
    setColor(newColor);

    await updateOptions(size, newColor, quantity);
  }

  async function increaseQuantity() {
    if (quantity >= product.stock) {
      toast.error(`Only ${product.stock} items available`);
      return;
    }

    const newQuantity = quantity + 1;

    setQuantity(newQuantity);

    await updateOptions(size, color, newQuantity);
  }

  async function decreaseQuantity() {
    if (quantity <= 1) return;

    const newQuantity = quantity - 1;

    setQuantity(newQuantity);

    await updateOptions(size, color, newQuantity);
  }

  const busy = loading || updating;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[22px]
        border
        border-gray-200
        bg-white
        transition-all
        duration-300
        hover:border-gray-300
        hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex flex-col lg:flex-row">
        {/* =====================================================
            PRODUCT IMAGE
        ===================================================== */}
        <Link
          to={`/products/${product.slug}`}
          className="
            relative
            block
            w-full
            shrink-0
            overflow-hidden
            bg-gray-100

            sm:h-[390px]

            lg:h-auto
            lg:min-h-[330px]
            lg:w-[270px]
          "
        >
          {product.images?.[0]?.url ? (
            <img
              src={product.images[0].url}
              alt={product.name}
              loading="lazy"
              className="
                h-full
                min-h-[330px]
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.035]
              "
            />
          ) : (
            <div className="flex min-h-[330px] items-center justify-center text-sm text-gray-400">
              No image
            </div>
          )}

          {/* Image Overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {/* Sale Badge */}
          {hasDiscount && (
            <span
              className="
                absolute
                left-5
                top-5
                rounded-full
                bg-black
                px-3.5
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Sale
            </span>
          )}

          {/* View Product */}
          <span
            className="
              absolute
              bottom-5
              right-5
              flex
              h-10
              w-10
              translate-y-2
              items-center
              justify-center
              rounded-full
              bg-white
              text-gray-950
              opacity-0
              shadow-sm
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </span>
        </Link>

        {/* =====================================================
            PRODUCT CONTENT
        ===================================================== */}
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-7 lg:p-8">
          {/* Top */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p
                className="
                  mb-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                "
              >
                {product.brand}
              </p>

              <Link
                to={`/products/${product.slug}`}
                className="
                  block
                  text-xl
                  font-semibold
                  leading-tight
                  tracking-[-0.02em]
                  text-gray-950
                  transition-colors
                  duration-200
                  hover:text-gray-500

                  sm:text-2xl
                "
              >
                {product.name}
              </Link>
            </div>

            {/* Price */}
            <div className="shrink-0 sm:text-right">
              <p className="text-lg font-semibold text-gray-950 sm:text-xl">
                ₹{price}
              </p>

              {hasDiscount && (
                <p className="mt-1 text-xs text-gray-400 line-through">
                  ₹{product.price}
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gray-100 sm:my-7" />

          {/* =====================================================
              OPTIONS
          ===================================================== */}
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {/* Size */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Size
                </p>

                {size && (
                  <span className="text-xs font-medium text-gray-900">
                    {size}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((itemSize) => (
                  <button
                    key={itemSize}
                    type="button"
                    disabled={busy}
                    onClick={() => changeSize(itemSize)}
                    className={`
                      min-w-[42px]
                      rounded-full
                      border
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-200
                      disabled:cursor-not-allowed
                      disabled:opacity-50

                      ${
                        size === itemSize
                          ? "border-gray-950 bg-gray-950 text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-950 hover:text-gray-950"
                      }
                    `}
                  >
                    {itemSize}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Color
                </p>

                {color && (
                  <span className="text-xs font-medium text-gray-900">
                    {color}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {product.colors?.map((itemColor) => (
                  <button
                    key={itemColor}
                    type="button"
                    disabled={busy}
                    onClick={() => changeColor(itemColor)}
                    className={`
                      rounded-full
                      border
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-200
                      disabled:cursor-not-allowed
                      disabled:opacity-50

                      ${
                        color === itemColor
                          ? "border-gray-950 bg-gray-950 text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-950 hover:text-gray-950"
                      }
                    `}
                  >
                    {itemColor}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM ACTIONS
          ===================================================== */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-5
              border-t
              border-gray-100
              pt-6

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            {/* Quantity */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Quantity
              </p>

              <div
                className="
                  flex
                  h-11
                  w-fit
                  items-center
                  overflow-hidden
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                "
              >
                <button
                  type="button"
                  disabled={busy || quantity <= 1}
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    text-gray-600
                    transition-colors
                    hover:bg-gray-200
                    hover:text-gray-950
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                >
                  <Minus size={15} strokeWidth={1.8} />
                </button>

                <span className="min-w-10 text-center text-sm font-semibold text-gray-950">
                  {quantity}
                </span>

                <button
                  type="button"
                  disabled={busy || quantity >= product.stock}
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    text-gray-600
                    transition-colors
                    hover:bg-gray-200
                    hover:text-gray-950
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                >
                  <Plus size={15} strokeWidth={1.8} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex w-full gap-2 sm:w-auto">
              <button
                type="button"
                disabled={busy}
                onClick={onMove}
                className="
                  flex
                  h-11
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gray-950
                  px-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-gray-800
                  hover:shadow-lg
                  disabled:cursor-not-allowed
                  disabled:opacity-50

                  sm:flex-none
                "
              >
                <ShoppingCart size={15} strokeWidth={1.8} />

                {busy ? "Processing..." : "Move to Cart"}
              </button>

              <button
                type="button"
                disabled={busy}
                onClick={onRemove}
                aria-label={`Remove ${product.name} from wishlist`}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-gray-500
                  transition-all
                  duration-300
                  hover:border-red-200
                  hover:bg-red-50
                  hover:text-red-500
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <Trash2 size={16} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default WishlistItem;
