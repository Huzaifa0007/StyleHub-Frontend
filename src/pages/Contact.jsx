import { useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

import Container from "../components/common/Container";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    toast.success(
      "Message received! Our team will review it and get back to you soon.",
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <Container>
      <div className="py-12 sm:py-16 lg:py-20">
        {/* HEADER */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white">
            <MessageCircle size={18} />
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
            Customer Support
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-[-0.055em] text-gray-950 sm:text-5xl lg:text-6xl">
            Let’s talk.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-8">
            Have a question, suggestion, or need help with your order? Our team
            would love to hear from you.
          </p>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Contact Details */}
          <div className="rounded-[24px] bg-gray-950 p-7 text-white sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Get In Touch
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.035em]">
              We’re here to help.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Whether you have a question about an order or simply want to share
              feedback, reach out and we’ll get back to you.
            </p>

            <div className="mt-9 space-y-3">
              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Email
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      support@stylehub.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Phone
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock3 size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Business Hours
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      Monday — Saturday
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      10:00 AM — 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-7">
              <MapPin size={15} className="text-white/40" />

              <span className="text-xs text-white/35">
                StyleHub Customer Experience
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[24px] border border-gray-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-9">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Send A Message
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950">
                How can we help?
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and our team will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-950"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    h-13
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    text-sm
                    text-gray-950
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-gray-950
                    focus:bg-white
                    focus:ring-4
                    focus:ring-gray-950/5
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-950"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="
                    h-13
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    text-sm
                    text-gray-950
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-gray-950
                    focus:bg-white
                    focus:ring-4
                    focus:ring-gray-950/5
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-gray-950"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us how we can help..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-gray-950
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-gray-950
                    focus:bg-white
                    focus:ring-4
                    focus:ring-gray-950/5
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  group
                  flex
                  h-13
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gray-950
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-black
                  hover:shadow-[0_14px_35px_rgba(0,0,0,0.15)]
                  active:translate-y-0
                "
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default Contact;
