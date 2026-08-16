import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

import Container from "../common/Container";

const features = [
  {
    icon: Truck,
    number: "01",
    title: "Free Shipping",
    desc: "On orders above ₹999",
  },
  {
    icon: RotateCcw,
    number: "02",
    title: "Easy Returns",
    desc: "7-day hassle-free returns",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Secure Payment",
    desc: "Safe and encrypted checkout",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Customer Support",
    desc: "We're here whenever you need us",
  },
];

function Features() {
  return (
    <section className="bg-[#f6f6f4] py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
                The StyleHub standard
              </span>
            </div>

            <h2
              className="
                text-[34px]
                font-semibold
                leading-tight
                tracking-[-0.04em]
                text-gray-950

                sm:text-[42px]
              "
            >
              Designed around you.
            </h2>
          </div>

          <p className="max-w-[420px] text-sm leading-7 text-gray-500 sm:text-[15px]">
            From checkout to delivery, every part of your StyleHub experience is
            designed to be simple, secure, and effortless.
          </p>
        </div>

        {/* Features */}
        <div
          className="
            grid
            grid-cols-1
            divide-y
            divide-gray-200
            border-y
            border-gray-200

            sm:grid-cols-2
            sm:divide-x
            sm:divide-y-0

            lg:grid-cols-4
          "
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  px-1
                  py-8

                  sm:px-7
                  sm:py-10

                  lg:px-8
                  lg:py-10
                "
              >
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-gray-950
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:bg-gray-950
                      group-hover:text-white
                    "
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-[16px] font-semibold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Features;
