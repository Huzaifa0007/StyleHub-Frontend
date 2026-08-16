import { X, MapPin } from "lucide-react";

import AddressForm from "./AddressForm";

function AddressModal({
  open,
  onClose,
  title,
  initialData,
  onSubmit,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
        {/* Header */}

        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white shadow-sm">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Shipping Address
              </p>

              <h2 className="mt-1 text-xl font-bold tracking-[-0.02em] text-gray-950">
                {title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-gray-400
              transition-all
              hover:bg-gray-100
              hover:text-gray-950
              focus:outline-none
              focus:ring-2
              focus:ring-gray-950
              focus:ring-offset-2
            "
            aria-label="Close"
          >
            <X size={19} />
          </button>
        </div>

        {/* Form */}

        <div className="overflow-y-auto px-5 py-6 sm:px-7 sm:py-7">
          <AddressForm
            initialData={initialData}
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
