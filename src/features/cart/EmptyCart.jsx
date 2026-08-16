import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";

function EmptyCart() {
  return (
    <main className="bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[70vh]
          w-full
          max-w-7xl
          items-center
          justify-center
          px-4
          py-20

          sm:px-6

          lg:px-8
        "
      >
        <div className="w-full max-w-xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
            <ShoppingBag
              size={25}
              strokeWidth={1.5}
              className="text-gray-700"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gray-200" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-400
              "
            >
              Your Selection
            </span>

            <span className="h-px w-8 bg-gray-200" />
          </div>

          {/* Heading */}
          <h1
            className="
              mt-5
              text-[38px]
              font-semibold
              leading-[0.95]
              tracking-[-0.045em]
              text-gray-950

              sm:text-[48px]
            "
          >
            Your Cart is Empty
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-md
              text-sm
              leading-7
              text-gray-500

              sm:text-[15px]
            "
          >
            Looks like you haven't added anything yet. Discover our latest
            pieces and find something you'll love.
          </p>

          {/* CTA */}
          <Link to="/products" className="mx-auto mt-8 block max-w-xs">
            <Button>
              Continue Shopping
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EmptyCart;
