import { useState } from "react";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

import Container from "../common/Container";

function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    toast.success(
      "You're subscribed! We'll keep you updated with the latest from StyleHub.",
    );

    setEmail("");
  }

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#0a0a0a]
            px-6
            py-14
            text-white

            sm:px-10
            sm:py-16

            lg:px-16
            lg:py-20
          "
        >
          {/* Decorative background */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-white/[0.04]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              bg-red-500/[0.06]
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-white/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
                Stay in the loop
              </span>

              <span className="h-px w-7 bg-white/30" />
            </div>

            {/* Heading */}
            <h2
              className="
                text-[34px]
                font-semibold
                leading-tight
                tracking-[-0.04em]

                sm:text-[44px]

                lg:text-[52px]
              "
            >
              Your next favorite piece
              <span className="block text-white/40">starts here.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-5
                max-w-[540px]
                text-sm
                leading-7
                text-white/50

                sm:text-[15px]
                sm:leading-7
              "
            >
              Get first access to new arrivals, exclusive pieces, seasonal
              edits, and inspiration from StyleHub.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubscribe}
              className="
                mx-auto
                mt-9
                flex
                w-full
                max-w-[560px]
                flex-col
                gap-3

                sm:flex-row
                sm:rounded-full
                sm:border
                sm:border-white/10
                sm:bg-white/[0.04]
                sm:p-1
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="
                  h-14
                  min-w-0
                  flex-1
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-5
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-white/30

                  sm:border-0
                  sm:bg-transparent
                  sm:px-6
                "
              />

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  h-14
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  text-sm
                  font-semibold
                  text-gray-950
                  transition-all
                  duration-300
                  hover:bg-gray-200
                  active:scale-[0.98]
                "
              >
                Subscribe
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-5 text-[10px] leading-5 text-white/25">
              No spam. Just style, new arrivals, and occasional exclusive
              offers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;
