import {
  FileText,
  LockKeyhole,
  ShieldCheck,
  CreditCard,
  RefreshCw,
} from "lucide-react";

import Container from "../components/common/Container";

function Privacy() {
  const sections = [
    {
      number: "01",
      title: "Information We Collect",
      icon: FileText,
      text: "When you use StyleHub, we may collect information required to provide our services, such as your name, email address, phone number, shipping address, account information, and order information.",
    },
    {
      number: "02",
      title: "How We Use Your Information",
      icon: ShieldCheck,
      text: "Information collected through the platform may be used to manage user accounts, process orders, provide customer support, manage deliveries, and improve the overall shopping experience.",
    },
    {
      number: "03",
      title: "Account Security",
      icon: LockKeyhole,
      text: "StyleHub uses authentication and security mechanisms to help protect user accounts and personal information. Users should also keep their account credentials confidential.",
    },
    {
      number: "04",
      title: "Payment Information",
      icon: CreditCard,
      text: "Currently, StyleHub supports Cash on Delivery for orders. Payment-related information is therefore limited to what is necessary to process and fulfill the order.",
    },
    {
      number: "05",
      title: "Changes to This Policy",
      icon: RefreshCw,
      text: "This privacy policy may be updated from time to time as the StyleHub platform and its services evolve.",
    },
  ];

  return (
    <Container>
      <div className="py-12 sm:py-16 lg:py-20">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <section className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white">
            <LockKeyhole size={17} />
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
            StyleHub Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-[-0.055em] text-gray-950 sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-8">
            Your privacy matters to us. Here’s how StyleHub handles information
            provided by users while using the platform.
          </p>
        </section>

        {/* =====================================================
            PRIVACY NOTICE
        ===================================================== */}
        <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-950 shadow-sm">
              <ShieldCheck size={18} />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-950">
                Your information, handled responsibly.
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We only use information where it is necessary to operate
                StyleHub, fulfill orders, support customers, and improve the
                platform.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            POLICY SECTIONS
        ===================================================== */}
        <section className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[24px] border border-gray-200 bg-white">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <article
                key={section.number}
                className={`
                  p-6
                  sm:p-8
                  ${
                    index !== sections.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }
                `}
              >
                <div className="flex gap-5 sm:gap-7">
                  {/* Number */}
                  <div className="hidden shrink-0 pt-1 sm:block">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-gray-300">
                      {section.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
                        <Icon size={17} />
                      </div>

                      <h2 className="text-lg font-bold tracking-[-0.025em] text-gray-950 sm:text-xl">
                        {section.title}
                      </h2>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-8">
                      {section.text}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-gray-400">
          This policy may be updated as StyleHub and its services continue to
          evolve.
        </p>
      </div>
    </Container>
  );
}

export default Privacy;
