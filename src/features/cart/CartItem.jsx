import { Trash2, Minus, Plus } from "lucide-react";

import toast from "react-hot-toast";

import { useState } from "react";

import { useUpdateCartMutation } from "./cartAPI";

function CartItem({ item, onRemove, loading }) {
  const product = item.product;

  const [size, setSize] = useState(item.size || "");
  const [color, setColor] = useState(item.color || "");
  const [quantity, setQuantity] = useState(item.quantity);

  const [updateCart, { isLoading: updating }] = useUpdateCartMutation();

  if (!product) return null;

  const price = product.discountPrice || product.price;

  async function updateOptions(
    newSize = size,
    newColor = color,
    newQuantity = quantity,
  ) {
    try {
      await updateCart({
        itemId: item._id,
        quantity: newQuantity,
        size: newSize,
        color: newColor,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update cart");

      // Restore local state if update fails.
      setSize(item.size || "");
      setColor(item.color || "");
      setQuantity(item.quantity);
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
    <div
      className="
        overflow-hidden
        rounded-[20px]
        border
        border-gray-200
        bg-white
        transition-all
        duration-300
        hover:border-gray-300
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
      "
    >
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col gap-5 sm:flex-row">
          {/* Product Image */}
          <div
            className="
              relative
              h-48
              w-full
              shrink-0
              overflow-hidden
              rounded-[16px]
              bg-gray-100

              sm:h-44
              sm:w-32

              lg:h-48
              lg:w-36
            "
          >
            {product.images?.[0]?.url ? (
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.04]
                "
              />
            ) : (
              <div className="flex h-full items-center justify-center text-xs text-gray-400">
                No image
              </div>
            )}

            {/* Subtle Image Overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-1/3
                bg-gradient-to-t
                from-black/10
                to-transparent
              "
            />
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Product Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p
                  className="
                    mb-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-gray-400
                  "
                >
                  {product.brand}
                </p>

                <h2
                  className="
                    truncate
                    text-[17px]
                    font-semibold
                    leading-6
                    tracking-[-0.01em]
                    text-gray-950
                    sm:text-lg
                  "
                >
                  {product.name}
                </h2>

                {/* Price */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[17px] font-semibold text-gray-950">
                    ₹{price}
                  </span>

                  {product.discountPrice < product.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.price}
                    </span>
                  )}

                  {product.discountPrice < product.price && (
                    <span
                      className="
                        rounded-full
                        bg-gray-950
                        px-2.5
                        py-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-white
                      "
                    >
                      Sale
                    </span>
                  )}
                </div>
              </div>

              {/* Remove */}
              <button
                type="button"
                disabled={busy}
                onClick={onRemove}
                aria-label={`Remove ${product.name} from cart`}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-gray-500
                  transition-all
                  duration-200
                  hover:border-red-200
                  hover:bg-red-50
                  hover:text-red-500
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <Trash2 size={16} strokeWidth={1.8} />
              </button>
            </div>

            {/* Options */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {/* Size */}
              <div>
                <div className="mb-2.5 flex items-center justify-between">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-gray-400
                    "
                  >
                    Size
                  </p>

                  {size && (
                    <span className="text-[11px] font-medium text-gray-900">
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

                        ${
                          size === itemSize
                            ? "border-gray-950 bg-gray-950 text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                        }

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      `}
                    >
                      {itemSize}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <div className="mb-2.5 flex items-center justify-between">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-gray-400
                    "
                  >
                    Color
                  </p>

                  {color && (
                    <span className="text-[11px] font-medium text-gray-900">
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

                        ${
                          color === itemColor
                            ? "border-gray-950 bg-gray-950 text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                        }

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      `}
                    >
                      {itemColor}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div
              className="
                mt-6
                flex
                flex-col
                gap-5
                border-t
                border-gray-100
                pt-5

                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              {/* Quantity */}
              <div>
                <p
                  className="
                    mb-2.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                  "
                >
                  Quantity
                </p>

                <div
                  className="
                    inline-flex
                    h-10
                    items-center
                    overflow-hidden
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                  "
                >
                  <button
                    type="button"
                    disabled={busy || quantity <= 1}
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      text-gray-600
                      transition-colors
                      hover:bg-gray-50
                      hover:text-gray-950
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                  >
                    <Minus size={14} strokeWidth={2} />
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
                      h-10
                      w-10
                      items-center
                      justify-center
                      text-gray-600
                      transition-colors
                      hover:bg-gray-50
                      hover:text-gray-950
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="sm:text-right">
                <p className="text-[11px] text-gray-400">
                  ₹{price} × {quantity}
                </p>

                <p
                  className="
                    mt-1
                    text-[22px]
                    font-semibold
                    tracking-[-0.03em]
                    text-gray-950
                  "
                >
                  ₹{price * quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
