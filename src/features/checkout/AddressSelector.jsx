import { MapPin, Plus, Check } from "lucide-react";

import Button from "../../components/ui/Button";

function AddressSelector({
  addresses,
  selectedAddress,
  setSelectedAddress,
  onAddAddress,
}) {
  return (
    <section>
      {/* Section Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
              1
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                Step 1
              </p>

              <h2 className="mt-0.5 text-2xl font-bold tracking-tight text-gray-950">
                Shipping Address
              </h2>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Choose where you want your order delivered.
          </p>
        </div>

        <Button className="h-12 w-full sm:w-auto" onClick={onAddAddress}>
          <Plus size={18} />
          Add Address
        </Button>
      </div>

      {!addresses.length ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50/70 px-6 py-14 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
            <MapPin size={24} className="text-gray-500" />
          </div>

          <h3 className="mt-5 text-xl font-bold text-gray-950">
            No Shipping Address
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Add a shipping address to continue with your order.
          </p>

          <Button
            className="mx-auto mt-6 h-12 w-auto px-6"
            onClick={onAddAddress}
          >
            <Plus size={18} />
            Add Address
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {addresses.map((address, index) => {
            const selected = selectedAddress === address._id;

            return (
              <label
                key={address._id}
                className={`
                  group
                  relative
                  block
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  sm:p-6

                  ${
                    selected
                      ? "border-gray-950 shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
                      : "border-gray-200 shadow-sm hover:-translate-y-[1px] hover:border-gray-400 hover:shadow-md"
                  }
                `}
              >
                {/* Selected Indicator */}

                {selected && (
                  <div className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-gray-950 text-white">
                    <Check size={15} strokeWidth={2.5} />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Radio */}

                  <div className="pt-1">
                    <input
                      type="radio"
                      checked={selected}
                      onChange={() => setSelectedAddress(address._id)}
                      className="h-4 w-4 accent-black"
                    />
                  </div>

                  {/* Address Content */}

                  <div className="min-w-0 flex-1 pr-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-bold text-gray-950">
                        {address.fullName}
                      </p>

                      {address.isDefault && (
                        <span className="rounded-full bg-gray-950 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                          Default
                        </span>
                      )}

                      {!address.isDefault && (
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                          Address {index + 1}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm font-medium text-gray-600">
                      {address.phone}
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm leading-5 text-gray-500">
                      <p>{address.addressLine1}</p>

                      {address.addressLine2 && <p>{address.addressLine2}</p>}

                      <p>
                        {address.city}, {address.state}
                      </p>

                      <p>
                        {address.country} - {address.postalCode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Selected Label */}

                {selected && (
                  <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-700">
                    <Check size={14} />
                    Shipping address selected
                  </div>
                )}
              </label>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default AddressSelector;
