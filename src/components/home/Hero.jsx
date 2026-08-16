import { ArrowRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5]">
      <Container
        className="
          !max-w-[1500px]
          !px-5
          sm:!px-8
          md:!px-10
          lg:!px-14
          xl:!px-16
          2xl:!px-20
        "
      >
        <div
          className="
            grid
            items-center
            gap-10
            py-10

            sm:gap-12
            sm:py-14

            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
            lg:py-16

            xl:gap-20
            xl:py-20

            2xl:gap-24
            2xl:py-24
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="relative z-10 min-w-0">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="h-px w-8 bg-gray-900 sm:w-10" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gray-500
                  sm:text-[11px]
                "
              >
                New Collection · 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[680px]
                text-[50px]
                font-semibold
                leading-[0.94]
                tracking-[-0.06em]
                text-gray-950

                sm:text-[62px]

                md:text-[70px]

                lg:text-[64px]

                xl:text-[78px]

                2xl:text-[88px]
              "
            >
              Wear what
              <span className="block text-gray-400">defines</span>
              <span className="block">you.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[510px]
                text-[14px]
                leading-7
                text-gray-500

                sm:mt-8
                sm:text-[15px]
                sm:leading-8

                lg:mt-9
                lg:text-base
              "
            >
              Discover contemporary pieces designed to elevate your everyday
              wardrobe — from timeless essentials to statement styles.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                my-5
                sm:my-9

                sm:mt-9
                sm:flex-row
                sm:items-center
              "
            >
              <Link
                to="/products"
                className="
                  inline-flex
                  h-14
                  w-40
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  px-7
                  text-sm
                  font-semibold
                  whitespace-nowrap
                  text-gray-900
                  transition-all
                  duration-300

                   hover:-translate-y-0.5
                  hover:bg-red-500
                  hover:shadow-lg

                  sm:w-40
                  sm:px-10
                "
              >
                <span>Shop Collection</span>
              </Link>

              <Link
                to="/products"
                className="
                  inline-flex
                  h-14
                  w-30
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  px-7
                  text-sm
                  font-semibold
                  whitespace-nowrap
                  text-gray-900
                  transition-all
                  duration-300

                   hover:-translate-y-0.5
                  hover:bg-red-500
                  hover:shadow-lg

                  sm:w-32
                  sm:px-10
                "
              >
                Explore all
              </Link>
            </div>

            {/* =================================================
                CREDIBILITY ROW
            ================================================= */}

            <div
              className="
                mt-9
                grid
                grid-cols-3
                border-t
                border-gray-200
                pt-5

                sm:mt-11
                sm:pt-6
              "
            >
              {/* Item */}
              <div className="pr-3">
                <p
                  className="
                    text-base
                    font-semibold
                    tracking-tight
                    text-gray-950

                    sm:text-lg
                  "
                >
                  2026
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-gray-400

                    sm:text-[10px]
                    sm:tracking-[0.18em]
                  "
                >
                  Latest collection
                </p>
              </div>

              <div className="border-l border-gray-200 px-4">
                <p
                  className="
                    text-base
                    font-semibold
                    tracking-tight
                    text-gray-950

                    sm:text-lg
                  "
                >
                  Premium
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-gray-400

                    sm:text-[10px]
                    sm:tracking-[0.18em]
                  "
                >
                  Everyday fashion
                </p>
              </div>

              <div className="border-l border-gray-200 pl-4">
                <p
                  className="
                    text-base
                    font-semibold
                    tracking-tight
                    text-gray-950

                    sm:text-lg
                  "
                >
                  StyleHub
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-gray-400

                    sm:text-[10px]
                    sm:tracking-[0.18em]
                  "
                >
                  Your style identity
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <div className="relative min-w-0">
            <div
              className="
                group
                relative
                aspect-[4/5]
                w-full
                overflow-hidden
                rounded-[24px]
                bg-gray-200
                shadow-[0_25px_70px_-30px_rgba(0,0,0,0.35)]

                sm:rounded-[28px]

                lg:aspect-[0.88]
                lg:rounded-[32px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1400&q=90"
                alt="StyleHub fashion collection"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                "
              />

              {/* Image gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-black/5
                "
              />

              {/* Top label */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  border
                  border-white/20
                  bg-black/25
                  px-4
                  py-2
                  backdrop-blur-md

                  sm:left-7
                  sm:top-7
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-white

                    sm:text-[10px]
                  "
                >
                  StyleHub / 01
                </span>
              </div>

              {/* Bottom content */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                  gap-4
                  mb-9
            
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.28em]
                      text-white/65

                      sm:text-[10px]
                    "
                  >
                    Featured edit
                  </p>

                  <p
                    className="
                      mt-2
                      text-lg
                      font-medium
                      tracking-tight
                      text-white

                      sm:text-2xl
                    "
                  >
                    Effortless essentials.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-gray-950
                    transition-all
                    duration-300

                    hover:scale-105
                    hover:bg-red-500
                    hover:text-white
                  "
                  aria-label="Explore collection"
                >
                  <MoveUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Decorative card */}
            <div
              className="
                absolute
                -bottom-5
                -left-3
                hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                px-5
                py-4
                mt-10
                shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25)]

                sm:block

                lg:-left-6
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-gray-400
                "
              >
                Curated for you
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-950">
                Dress outside the ordinary.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
