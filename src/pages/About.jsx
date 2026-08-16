import { ArrowRight, Check, Gem, Heart, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";

function About() {
  return (
    <Container>
      <div className="py-12 sm:py-16 lg:py-20">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gray-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gray-200/50 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-white">
                <Sparkles size={15} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400 sm:text-[11px]">
                About StyleHub
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.055em] text-gray-950 sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Fashion that fits
              <span className="block text-gray-400">your way of life.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8">
              StyleHub is a modern fashion destination built around simple
              discovery, thoughtful design, and an effortless online shopping
              experience.
            </p>

            <Link
              to="/products"
              className="
                mt-8
                inline-flex
                h-12
                items-center
                gap-2
                rounded-xl
                bg-gray-300
                px-6
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.15)]
              "
            >
              Explore StyleHub
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
            Our Story
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-gray-950 sm:text-4xl">
            Built for people who care about style.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-8">
            We believe shopping for fashion should feel inspiring rather than
            complicated. StyleHub brings products, categories, personal
            preferences, and everyday essentials together in one refined
            experience.
          </p>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}
        <section className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-2">
          <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
              <Heart size={18} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              01 — Our Mission
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950">
              Make fashion easier to discover.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Our mission is to provide customers with a smooth online shopping
              experience where they can discover quality fashion products,
              explore different categories, manage their cart, and place orders
              with ease.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-950">
              <Gem size={18} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              02 — What We Offer
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950">
              A curated world of fashion.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              StyleHub offers a curated collection of men's fashion, women's
              fashion, and accessories. Search, filtering, wishlist, cart,
              address management, and order tracking make the experience simple
              from discovery to delivery.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-950">
              <Zap size={18} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              03 — Technology
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950">
              Powered by modern technology.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              StyleHub is built using modern full-stack technologies including
              React, Node.js, Express.js, MongoDB, JWT authentication,
              Cloudinary, Redux Toolkit, and Tailwind CSS.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
              <Sparkles size={18} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              04 — Our Goal
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950">
              Keep evolving the experience.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              We aim to continuously improve the platform and provide a
              reliable, user-friendly, and modern shopping experience for
              fashion enthusiasts.
            </p>
          </div>
        </section>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <section className="mt-16 rounded-[24px] bg-gray-950 px-6 py-12 text-center text-white sm:mt-20 sm:px-10 sm:py-16">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <Check size={17} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
            Style your story.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/50">
            Discover pieces that feel like you and make every everyday look your
            own.
          </p>
        </section>
      </div>
    </Container>
  );
}

export default About;
