import { AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function LowStockProducts({ products = [] }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200/80
        bg-white
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
      "
    >
      {/* Header */}
      <div className="border-b border-gray-100 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <AlertTriangle size={15} className="text-amber-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Attention needed
              </span>
            </div>

            <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-gray-950">
              Low Stock
            </h2>
          </div>

          {products.length > 0 && (
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-600">
              {products.length} items
            </span>
          )}
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            ✓
          </div>

          <p className="mt-3 text-sm font-semibold text-gray-700">
            Inventory looks good
          </p>

          <p className="mt-1 text-xs text-gray-400">
            No products are currently low on stock.
          </p>
        </div>
      ) : (
        <>
          <div className="divide-y divide-gray-100">
            {products.map((product) => (
              <div
                key={product._id}
                className="flex items-center gap-3 p-4 transition-colors hover:bg-gray-50/60 sm:p-5"
              >
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                    <p className="text-xs font-medium text-red-600">
                      {product.stock} left
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 p-4">
            <Link
              to="/admin/products"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-200
                px-4
                py-2.5
                text-xs
                font-semibold
                text-gray-900
                transition-all
                hover:border-gray-500
                hover:bg-gray-500
                hover:text-white
              "
            >
              Manage inventory
              <ArrowRight size={14} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default LowStockProducts;
