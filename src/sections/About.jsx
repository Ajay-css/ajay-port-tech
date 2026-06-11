import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import IDCard from "../components/IDCard";

import strap from "../assets/images/strap.png";
import logo from "../assets/images/logo.png";

const slides = [
  {
    title: "Creating Digital Experiences",
    description:
      "I enjoy building modern websites, mobile applications and interactive user experiences.",
  },

  {
    title: "Turning Data Into Business Insights",
    description:
      "Exploring data, discovering patterns and transforming information into meaningful decisions.",
  },

  {
    title: "Building Powerful Agency Duo Stack",
    description:
      "A freelance journey where ideas become real-world products, together with my friend.",
  },

  {
    title: "Always Exploring Real World Datas",
    description:
      "From sports to business, I dive into real-world datasets to uncover insights and tell compelling stories through data.",
  },
];

function About() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-16
          px-6
          lg:flex-row
          lg:justify-between
        "
      >

        {/* LEFT */}
        <div className="w-full max-w-xl mt-[100px] lg:mt-0">

          <p className="mb-4 text-xs tracking-[0.35em] text-zinc-500">
            ABOUT ME
          </p>

          <AnimatePresence mode="wait">

            <motion.div
              key={activeSlide}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
                {slides[activeSlide].title}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
                {slides[activeSlide].description}
              </p>
            </motion.div>

          </AnimatePresence>

          {/* Indicators */}
          <div className="mt-8 flex gap-3">

            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index
                    ? "w-10 bg-white"
                    : "w-4 bg-zinc-700"
                  }`}
              />
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative
    mt-44
    mb-24
    flex
    justify-center

    lg:mt-0
    lg:mb-0">
          <IDCard
            strap={strap}
            logo={logo}
            unlocked={unlocked}
            setUnlocked={setUnlocked}
          />
        </div>

      </div>
    </section>
  );
}

export default About;