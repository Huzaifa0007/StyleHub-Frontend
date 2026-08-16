import { Pencil, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";

function ProductRow({ product, onDelete }) {
  const stockStatus =
    product.stock === 0
      ? {
          label: "Out of stock",
          className: "bg-red-50 text-red-600",
          dot: "bg-red-500",
        }
      : product.stock <= 5
        ? {
            label: "Low stock",
            className: "bg-amber-50 text-amber-700",
            dot: "bg-amber-500",
          }
        : {
            label: "In stock",
            className: "bg-emerald-50 text-emerald-700",
            dot: "bg-emerald-500",
          };

  return (
    <tr className="border-b border-gray-100 last:border-none transition-colors hover:bg-gray-50/60">
      {/* Product */}
      <td className="px-5 py-4">
        <div className="flex min-w-[250px] items-center gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
            {product.images?.[0]?.url ? (
              <img
                src={product.images[0].url}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                No image
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-950">
              {product.name}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {product.brand || "StyleHub"}
            </p>
          </div>
        </div>
      </td>

      {/* Category */}
      <td className="px-4">
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
          {product.category}
        </span>
      </td>

      {/* Price */}
      <td className="px-4">
        <div>
          <p className="text-sm font-semibold text-gray-950">
            ₹{Number(product.price).toLocaleString()}
          </p>

          {product.discountPrice < product.price && (
            <p className="mt-0.5 text-xs text-gray-400">
              ₹{Number(product.discountPrice).toLocaleString()}
            </p>
          )}
        </div>
      </td>

      {/* Stock */}
      <td className="px-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-gray-900">
            {product.stock}
          </span>

          <span
            className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${stockStatus.className}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${stockStatus.dot}`} />

            {stockStatus.label}
          </span>
        </div>
      </td>

      {/* Rating */}
      <td className="px-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1.5">
          <Star size={13} className="fill-amber-400 text-amber-400" />

          <span className="text-xs font-semibold text-gray-700">
            {product.ratings || 0}
          </span>
        </div>
      </td>

      {/* Actions */}
      <td className="px-5 text-right">
        <div className="flex justify-end gap-2">
          <Link
            to={`/admin/products/${product._id}/edit`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950"
            aria-label={`Edit ${product.name}`}
          >
            <Pencil size={16} />
          </Link>

          <button
            type="button"
            onClick={() => onDelete(product)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            aria-label={`Delete ${product.name}`}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
