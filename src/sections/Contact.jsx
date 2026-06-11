import qr from "../assets/images/qr-insta.png";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >
      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.02]
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          px-6
          py-20
        "
      >
        {/* Heading */}

        <div className="text-center">
          <p
            className="
              text-xs
              tracking-[0.4em]
              text-zinc-500
            "
          >
            CONTACT
          </p>

          <h2
            className="
              mt-5
              min-h-[80px]
              text-4xl
              font-semibold
              text-white
              md:text-6xl
            "
          >
            <Typewriter
              words={[
                "Let's Build Websites",
                "Let's Build Mobile Apps",
                "Let's Analyse Business Data",
                "Let's Build Something Together.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
        </div>

        {/* Main Content */}

        <div
          className="
            mt-16
            grid
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            items-center
          "
        >
          {/* QR Side */}

          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-xl
              "
            >
              <img
                src={qr}
                alt="Instagram QR"
                className="
                  h-[250px]
                  w-[250px]
                  object-contain
                "
              />
            </div>

            <div className="mt-5 text-center">
              <p
                className="
                  text-xs
                  tracking-[0.35em]
                  text-zinc-500
                "
              >
                SCAN TO CONNECT
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                  "
                />

                <span
                  className="
                    text-sm
                    text-zinc-400
                  "
                >
                  Available For Freelancing
                </span>
              </div>
            </div>
          </div>

          {/* Contact Card */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
            "
          >
            {/* Shine */}

            <div
              className="
                absolute
                -left-[150%]
                top-0
                h-full
                w-[120%]
                rotate-[20deg]
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-all
                duration-1000
                group-hover:left-[150%]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-xs
                  tracking-[0.35em]
                  text-zinc-500
                "
              >
                CONTACT CARD #0001
              </p>

              <h3
                className="
                  mt-6
                  text-4xl
                  font-semibold
                  text-white
                "
              >
                AJAY ARUMUGAM
              </h3>

              <p
                className="
                  mt-2
                  text-zinc-500
                "
              >
                Co-Founder • Duo Stack
              </p>

              <div
                className="
                  mt-8
                  h-px
                  bg-white/10
                "
              />

              <div
                className="
                  mt-8
                  space-y-3
                  text-zinc-400
                "
              >
                <p>• Web Development</p>
                <p>• Mobile Application Development</p>
                <p>• Data Analysis & Dashboarding</p>
              </div>

              <div
                className="
                  mt-8
                  h-px
                  bg-white/10
                "
              />

              {/* Social Links */}

              <div
                className="
                  mt-8
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    p-4
                    text-zinc-300
                    transition-all
                    hover:bg-white/5
                  "
                >
                  <FaEnvelope />
                  Email
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    p-4
                    text-zinc-300
                    transition-all
                    hover:bg-white/5
                  "
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    p-4
                    text-zinc-300
                    transition-all
                    hover:bg-white/5
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    p-4
                    text-zinc-300
                    transition-all
                    hover:bg-white/5
                  "
                >
                  <FaInstagram />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;