import { AlertTriangle, Trash2 } from "lucide-react";

import Modal from "./Modal";
import Button from "./Button";

function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onCancel}>
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <AlertTriangle size={22} />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h2 className="text-xl font-bold tracking-[-0.02em] text-gray-950 sm:text-2xl">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">{message}</p>

          <div className="mt-4 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3">
            <p className="text-xs leading-5 text-red-700">
              This action cannot be undone. The selected item will be
              permanently removed.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            disabled={loading}
            onClick={onConfirm}
          >
            <Trash2 size={16} />

            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
