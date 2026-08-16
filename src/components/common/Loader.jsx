function Loader({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-4">
      <div className="relative h-11 w-11">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-black" />
      </div>

      <p className="text-sm font-medium text-gray-500">{text}</p>
    </div>
  );
}

export default Loader;
