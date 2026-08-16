import { Package } from "lucide-react";

import ProductRow from "./ProductRow";

function ProductTable({ products, onDelete }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-base font-bold text-gray-950">Product Catalog</h2>

          <p className="mt-0.5 text-xs text-gray-400">
            Manage products and inventory
          </p>
        </div>

        <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500 sm:flex">
          <Package size={17} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Product
              </th>

              <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Category
              </th>

              <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Price
              </th>

              <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Stock
              </th>

              <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Rating
              </th>

              <th className="px-5 py-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductRow
                  key={product._id}
                  product={product}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-16 text-center">
                  <div className="mx-auto flex max-w-sm flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-400">
                      <Package size={21} />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-gray-900">
                      No products found
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Try adjusting your search or add a new product.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
