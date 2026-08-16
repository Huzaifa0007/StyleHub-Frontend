import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0);

  if (!images?.length) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-gray-200 bg-gray-50 text-sm font-medium text-gray-400">
        No Image Available
      </div>
    );
  }

  const currentImage = images[selected];

  function showPrevious() {
    setSelected((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNext() {
    setSelected((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="w-full">
      {/* Main Gallery */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-gray-100
          bg-[#f7f7f5]
          shadow-[0_12px_45px_rgba(0,0,0,0.05)]
        "
      >
        {/* Image */}
        <div className="flex aspect-[4/5] items-center justify-center p-3 sm:p-5 lg:p-6">
          <img
            src={currentImage.url}
            alt=""
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.015]
            "
          />
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div
            className="
              absolute
              bottom-5
              right-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              bg-white/90
              px-3.5
              py-2
              text-xs
              font-semibold
              text-gray-700
              shadow-sm
              backdrop-blur-md
            "
          >
            <Images size={13} />

            <span>
              {selected + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Desktop Navigation */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="
                absolute
                left-5
                top-1/2
                hidden
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white/90
                text-gray-700
                opacity-0
                shadow-md
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white
                hover:text-gray-950
                group-hover:opacity-100
                sm:flex
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="
                absolute
                right-5
                top-1/2
                hidden
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white/90
                text-gray-700
                opacity-0
                shadow-md
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white
                hover:text-gray-950
                group-hover:opacity-100
                sm:flex
              "
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-5">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {images.map((image, index) => (
              <button
                key={image.public_id}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`View product image ${index + 1}`}
                className={`
                  group
                  relative
                  h-[76px]
                  w-[76px]
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  bg-[#f7f7f5]
                  transition-all
                  duration-200
                  sm:h-[82px]
                  sm:w-[82px]

                  ${
                    selected === index
                      ? "border-2 border-gray-950 shadow-[0_5px_18px_rgba(0,0,0,0.10)]"
                      : "border border-gray-200 hover:border-gray-400"
                  }
                `}
              >
                <img
                  src={image.url}
                  alt=""
                  className="
                    h-full
                    w-full
                    object-contain
                    p-1
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />

                {selected === index && (
                  <span className="absolute inset-0 rounded-[10px] ring-1 ring-inset ring-black/10" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
