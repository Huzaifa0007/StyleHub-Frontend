import { Edit3, Trash2, Star, MapPin, Check, Phone } from "lucide-react";

function AddressCard({ address, onEdit, onDelete, onSetDefault }) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        sm:p-6

        ${
          address.isDefault
            ? "border-gray-950 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "border-gray-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
        }
      `}
    >
      {/* Default indicator */}

      {address.isDefault && (
        <div className="absolute left-0 top-0 h-full w-1 bg-gray-950" />
      )}

      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          {/* Location Icon */}

          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${
                address.isDefault
                  ? "bg-gray-950 text-white"
                  : "bg-gray-100 text-gray-600"
              }
            `}
          >
            <MapPin size={19} />
          </div>

          {/* Name */}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold tracking-[-0.02em] text-gray-950">
                {address.fullName}
              </h2>

              {address.isDefault && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-950 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                  <Check size={11} />
                  Default
                </span>
              )}
            </div>

            <div className="mt-1.5 flex items-center gap-2 text-sm text-gray-500">
              <Phone size={14} />

              <span>{address.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-gray-100" />

      {/* Address */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-start gap-3">
          <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />

          <div className="space-y-1 text-sm leading-6 text-gray-600">
            <p className="font-medium text-gray-900">{address.addressLine1}</p>

            {address.addressLine2 && <p>{address.addressLine2}</p>}

            <p>
              {address.city}, {address.state}
            </p>

            <p>
              {address.country} <span className="mx-1 text-gray-300">•</span>
              {address.postalCode}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => onEdit(address)}
          className="
            inline-flex
            h-10
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-gray-200
            bg-white
            px-4
            text-sm
            font-semibold
            text-gray-700
            transition-all
            hover:border-gray-300
            hover:bg-gray-50
            hover:text-gray-950
            focus:outline-none
            focus:ring-2
            focus:ring-gray-950
            focus:ring-offset-2
          "
        >
          <Edit3 size={15} />
          Edit
        </button>

        <button
          onClick={() => onDelete(address._id)}
          className="
            inline-flex
            h-10
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-red-100
            bg-red-50/50
            px-4
            text-sm
            font-semibold
            text-red-600
            transition-all
            hover:border-red-200
            hover:bg-red-50
            focus:outline-none
            focus:ring-2
            focus:ring-red-500
            focus:ring-offset-2
          "
        >
          <Trash2 size={15} />
          Delete
        </button>

        {!address.isDefault && (
          <button
            onClick={() => onSetDefault(address._id)}
            className="
              inline-flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-gray-200
              bg-white
              px-4
              text-sm
              font-semibold
              text-gray-700
              transition-all
              hover:border-gray-950
              hover:bg-gray-950
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-gray-950
              focus:ring-offset-2
            "
          >
            <Star size={15} />
            Make Default
          </button>
        )}
      </div>
    </div>
  );
}

export default AddressCard;
