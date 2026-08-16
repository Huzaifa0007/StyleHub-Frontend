import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const categories = [
  {
    number: "01",
    title: "Men",
    subtitle: "Modern essentials",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1000&q=90",
  },
  {
    number: "02",
    title: "Women",
    subtitle: "Contemporary styles",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&q=90",
  },
  {
    number: "03",
    title: "Accessories",
    subtitle: "The finishing touch",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000&q=90",
  },
];

function Categories() {
  return (
    <section className="bg-white pt-20 sm:pt-24 lg:pt-28 pb-15 sm:pb-15 lg:pb-15">
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
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6

            sm:mb-12

            lg:mb-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-gray-400
                "
              >
                Explore the collection
              </span>
            </div>

            <h2
              className="
                text-[38px]
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
                text-gray-950

                sm:text-[46px]

                lg:text-[52px]
              "
            >
              Shop by category
            </h2>
          </div>

          <p
            className="
              max-w-[430px]
              text-[14px]
              leading-7
              text-gray-500

              sm:text-[15px]
              sm:leading-7
            "
          >
            Explore carefully selected collections designed to make everyday
            dressing feel effortless, personal, and distinctly yours.
          </p>
        </div>

        {/* =====================================================
            CATEGORY GRID
        ===================================================== */}

        <div
          className="
            grid
            gap-5

            sm:gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/products?category=${category.title}`}
              className="
                group
                relative
                min-h-[430px]
                overflow-hidden
                rounded-[24px]
                bg-gray-100
                shadow-sm
                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-xl

                sm:min-h-[480px]

                lg:min-h-[540px]
                lg:rounded-[28px]
              "
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.06]
                "
              />

              {/* Dark gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/15
                  to-black/5
                  transition-all
                  duration-500

                  group-hover:from-black/80
                "
              />

              {/* Top number */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  h-9
                  min-w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-3
                  backdrop-blur-md

                  sm:left-6
                  sm:top-6
                "
              >
                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-white
                  "
                >
                  {category.number}
                </span>
              </div>

              {/* Arrow */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-gray-950
                  transition-all
                  duration-300

                  group-hover:rotate-45
                  group-hover:bg-red-500
                  group-hover:text-white

                  sm:right-6
                  sm:top-6
                "
              >
                <ArrowUpRight size={18} />
              </div>

              {/* Bottom content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6

                  sm:p-7

                  lg:p-8
                "
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-white/60
                  "
                >
                  {category.subtitle}
                </p>

                <h3
                  className="
                    mt-2
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white

                    sm:text-4xl
                  "
                >
                  {category.title}
                </h3>

                <div
                  className="
                    mt-4
                    h-px
                    w-8
                    bg-white/50
                    transition-all
                    duration-500

                    group-hover:w-16
                  "
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
