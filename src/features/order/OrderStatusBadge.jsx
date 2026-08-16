function OrderStatusBadge({ status }) {
  let classes = `
    inline-flex
    w-fit
    items-center
    rounded-full
    border
    px-3
    py-1.5
    text-xs
    font-semibold
    tracking-[-0.01em]
  `;

  let dotClasses = "mr-2 h-1.5 w-1.5 rounded-full";

  switch (status) {
    case "Pending":
      classes += " border-amber-200 bg-amber-50 text-amber-700";
      dotClasses += " bg-amber-500";
      break;

    case "Processing":
      classes += " border-blue-200 bg-blue-50 text-blue-700";
      dotClasses += " bg-blue-500";
      break;

    case "Shipped":
      classes += " border-purple-200 bg-purple-50 text-purple-700";
      dotClasses += " bg-purple-500";
      break;

    case "Delivered":
      classes += " border-green-200 bg-green-50 text-green-700";
      dotClasses += " bg-green-500";
      break;

    case "Cancelled":
      classes += " border-red-200 bg-red-50 text-red-700";
      dotClasses += " bg-red-500";
      break;

    default:
      classes += " border-gray-200 bg-gray-50 text-gray-700";
      dotClasses += " bg-gray-500";
  }

  return (
    <span className={classes}>
      <span className={dotClasses} />

      {status}
    </span>
  );
}

export default OrderStatusBadge;
