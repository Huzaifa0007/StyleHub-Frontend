import { TrendingUp } from "lucide-react";

function BestSellingProducts({ products = [] }) {
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
      <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-gray-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Performance
            </span>
          </div>

          <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-gray-950">
            Best Selling Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Top performing products by sales.
          </p>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex h-60 items-center justify-center px-6 text-sm text-gray-400">
          No sales data available.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/60 text-left">
                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Product
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Units Sold
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Revenue
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="group border-b border-gray-100 last:border-none hover:bg-gray-50/60"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <span className="max-w-[280px] truncate text-sm font-semibold text-gray-900">
                        {product.productName}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {product.totalSold} sold
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm font-bold text-gray-950">
                    ₹{Number(product.revenue).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BestSellingProducts;
