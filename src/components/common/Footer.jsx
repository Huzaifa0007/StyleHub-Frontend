import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Container from "./Container";

function Footer() {
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
    <footer className="bg-[#090909] pb-6 text-white">
      <Container
        className="
          !max-w-[1500px]
          !px-6
          sm:!px-10
          md:!px-12
          lg:!px-16
          xl:!px-20
        "
      >
        {/* MAIN FOOTER */}
        <div
          className="
            grid
            grid-cols-1
            gap-14
            border-b
            border-white/[0.10]
            py-12

            sm:gap-16
            sm:py-14

            md:grid-cols-2
            md:gap-x-20
            md:gap-y-20

            lg:grid-cols-[1.4fr_0.7fr_0.7fr_1.4fr]
            lg:gap-x-20
            lg:gap-y-24
            lg:py-24

            xl:gap-x-28
            xl:py-28
          "
        >
          {/* BRAND */}
          <div className="max-w-[390px]">
            <Link
              to="/"
              className="
                inline-block
                text-[28px]
                font-bold
                leading-tight
                tracking-[-0.045em]
                transition-opacity
                duration-200
                hover:opacity-80
                sm:text-[30px]
              "
            >
              Style<span className="text-red-500">Hub</span>
            </Link>

            <p
              className="
                mt-7
                max-w-[360px]
                text-[14px]
                leading-8
                text-white/45
                sm:text-[15px]
              "
            >
              Discover contemporary fashion curated for every version of you.
              Timeless pieces, modern essentials, and styles made to stand out.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-white/30" />

              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/35">
                Style your story
              </span>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.24em] text-white">
              Shop
            </h3>

            <ul className="mt-7 space-y-5">
              <li>
                <FooterLink to="/products?category=Men">Men</FooterLink>
              </li>

              <li>
                <FooterLink to="/products?category=Women">Women</FooterLink>
              </li>

              <li>
                <FooterLink to="/products?category=Accessories">
                  Accessories
                </FooterLink>
              </li>

              <li>
                <FooterLink to="/products">All Products</FooterLink>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.24em] text-white">
              Company
            </h3>

            <ul className="mt-7 space-y-5">
              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>

              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>

              <li>
                <FooterLink to="/privacy">Privacy</FooterLink>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="w-full max-w-[430px]">
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.24em] text-white">
              Stay in the loop
            </h3>

            <p className="mt-7 max-w-[400px] text-[14px] leading-7 text-white/45 sm:text-[15px] sm:leading-8">
              Get updates on new arrivals, exclusive pieces, and the latest from
              StyleHub.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="
                mt-7
                flex
                h-[54px]
                w-full
                items-center
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-white/[0.045]
                transition-all
                duration-200
                focus-within:border-white/25
                focus-within:bg-white/[0.07]
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-5
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-white/30
                  sm:px-6
                "
              />

              <button
                type="submit"
                className="
                  mr-1
                  inline-flex
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-black
                  transition-all
                  duration-200
                  hover:bg-gray-200
                  active:scale-[0.97]
                  sm:mr-1.5
                  sm:px-6
                "
              >
                Subscribe
                <ArrowUpRight size={14} />
              </button>
            </form>

            <p className="mt-4 text-[11px] leading-5 text-white/25">
              By subscribing, you agree to receive StyleHub updates.
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div
          className="
            flex
            flex-col
            gap-5
            py-7

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:py-8
          "
        >
          <p className="text-[12px] leading-5 text-white/30">
            © 2026 StyleHub. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-white/30
                sm:text-[10px]
              "
            >
              Fashion for every version of you
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* REUSABLE FOOTER LINK */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group
        inline-flex
        items-center
        gap-1
        text-[14px]
        leading-6
        text-white/45
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-white
        sm:text-[15px]
      "
    >
      {children}

      <ArrowUpRight
        size={13}
        className="
          opacity-0
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:opacity-60
        "
      />
    </Link>
  );
}

export default Footer;
