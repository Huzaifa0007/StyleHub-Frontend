import { X } from "lucide-react";

function Modal({ open, onClose, title, children, width = "max-w-2xl" }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
      <div
        className={`relative w-full ${width} rounded-2xl bg-white shadow-xl`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-semibold">{title}</h2>

          <button onClick={onClose} className="rounded p-1 hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
