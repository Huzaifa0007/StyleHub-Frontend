function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      {/* =====================================================
          AUTH PAGE
      ===================================================== */}

      <div className="min-h-screen px-3 py-3 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <div
          className="
            flex
            min-h-[calc(100vh-24px)]
            w-full
            overflow-hidden
            bg-white

            sm:min-h-[calc(100vh-40px)]

          "
        >
          {/* =====================================================
              LEFT FASHION IMAGE PANEL
          ===================================================== */}

          <section
            className="
          rounded-tr-[20px]
          rounded-br-[20px]
          rounded-tl-[20px]
          rounded-bl-[20px]
       
    relative
    hidden
    overflow-hidden
    bg-[#111111]

    lg:flex
    lg:w-[47%]

    xl:w-[46%]
  "
          >
            {/* =================================================
                ACTUAL FASHION IMAGE
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                bg-no-repeat
              "
              style={{
                backgroundImage: "url('/images/auth-fashion.jpg')",
              }}
            />

            {/* Dark editorial overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/45
                via-black/20
                to-black/75
              "
            />

            {/* Subtle left-to-right gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/45
                via-transparent
                to-black/10
              "
            />

            {/* =================================================
                TOP BRAND
            ================================================= */}

            <div
              className="
                relative
                z-10
                mt-7
                
                items-center
                
                gap-3
                flex
                h-full
                w-full
                flex-col
                justify-between
                p-7

                sm:p-9

                xl:p-11
              "
            >
              <div className="flex items-center gap-3">
                {" "}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-black/20
                    backdrop-blur-md
                  "
                >
                  <span className="text-sm font-semibold text-white"></span>
                </div>
                <span
                  className="
                    text-[16px]
                    font-semibold
                    tracking-[0.32em]
                    text-white
                  "
                ></span>
              </div>

              {/* =================================================
                  CENTER CONTENT
              ================================================= */}

              <div className="max-w-[500px]">
                {/* Eyebrow */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-white/70" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.38em]
                      text-white/70
                    "
                  >
                    New collection
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
                    text-[48px]
                    font-semibold
                    leading-[0.92]
                    tracking-[-0.055em]
                    text-white

                    xl:text-[58px]

                    2xl:text-[66px]
                  "
                >
                  <span className="block">Wear</span>

                  <span className="block text-white/55">what</span>

                  <span className="block">defines you.</span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-7
                    max-w-[390px]
                    text-[13px]
                    leading-6
                    text-white/65

                    xl:text-[14px]
                    xl:leading-7
                  "
                >
                  Contemporary fashion curated for people who don't follow the
                  ordinary.
                </p>

                {/* Bottom information */}
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-16 bg-white/50" />

                  <span
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.3em]
                      text-white/55
                    "
                  >
                    STYLEHUB / 2026
                  </span>
                </div>
              </div>

              {/* =================================================
                  BOTTOM
              ================================================= */}

              <div className="flex items-end justify-between">
                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-wide
                    text-white/45
                  "
                >
                  Curated for your everyday style.
                </span>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT FORM SECTION
          ===================================================== */}

          <section
            className="
              flex
              w-full
              items-center
              justify-center
              bg-white
              px-5
              py-10

              sm:px-10
              sm:py-14

              lg:w-[53%]
              lg:px-14

              xl:w-[54%]
              xl:px-20
            "
          >
            <div className="w-full max-w-[500px]">
              {/* =================================================
                  MOBILE LOGO
              ================================================= */}

              <div
                className="
                  mb-10
                  flex
                  items-center
                  justify-center

                  lg:hidden
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-950
                      text-white
                    "
                  >
                    <span className="text-sm font-semibold">S</span>
                  </div>

                  <span
                    className="
                      text-lg
                      font-bold
                      tracking-[0.25em]
                      text-gray-950
                    "
                  >
                    STYLEHUB
                  </span>
                </div>
              </div>

              {/* =================================================
                  HEADER
              ================================================= */}

              <header>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gray-950" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-gray-400
                    "
                  >
                    Create account
                  </span>
                </div>

                <h1
                  className="
                    text-[38px]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.05em]
                    text-gray-950

                    sm:text-[42px]
                  "
                >
                  {title}
                </h1>

                <p
                  className="
                    mt-4
                    max-w-[460px]
                    text-[15px]
                    leading-6
                    text-gray-500

                    sm:text-base
                    sm:leading-7
                  "
                >
                  {subtitle}
                </p>
              </header>

              {/* =================================================
                  FORM
              ================================================= */}

              <div className="mt-8 sm:mt-9">{children}</div>

              {/* =================================================
                  SECURITY
              ================================================= */}

              <div className="mt-8 flex items-center justify-center gap-2">
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-50
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span className="text-xs font-medium text-gray-400">
                  Secure account access
                </span>

                <span className="text-gray-200">•</span>

                <span className="text-xs font-medium text-gray-400">
                  StyleHub
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
