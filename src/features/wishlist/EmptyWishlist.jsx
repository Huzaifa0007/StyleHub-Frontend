import { Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <main className="bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-180px)]
          w-full
          max-w-7xl
          items-center
          justify-center
          px-4
          py-20

          sm:px-6
          sm:py-24

          lg:px-8
          lg:py-28
        "
      >
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
            <Heart size={30} strokeWidth={1.3} className="text-gray-950" />
          </div>

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gray-300" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
              Your Selection
            </span>

            <span className="h-px w-8 bg-gray-300" />
          </div>

          {/* Heading */}
          <h1
            className="
              text-[40px]
              font-semibold
              leading-none
              tracking-[-0.045em]
              text-gray-950

              sm:text-[52px]

              lg:text-[60px]
            "
          >
            Nothing saved yet.
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-gray-500

              sm:text-[15px]
            "
          >
            Save the pieces you love and build your personal collection. They'll
            be waiting here whenever you're ready.
          </p>

          {/* CTA */}
          <Link
            to="/products"
            className="
              group
              mx-auto
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gray-200
              px-6
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.1em]
              text-white
              transition-all
              duration-300
              hover:bg-gray-300
              hover:shadow-lg
            "
          >
            Explore Products
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EmptyWishlist;
