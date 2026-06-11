import { motion } from "framer-motion";
import logo2 from "../assets/images/logo2.png";

function CreditCard({
  skill,
  icon,
  bank,
  division,
  number,
  chip,
}) {
  return (
    <motion.div
      whileHover={{
        rotateX: 4,
        rotateY: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="group [perspective:1200px]"
    >
      <div
        className="
    premium-card
    relative
    h-[215px]
    overflow-hidden
    rounded-[10px]
    border
    border-white/10
    bg-[#000000]
    shadow-[0_15px_50px_rgba(0,0,0,0.8)]
  "
      >
        {/* Shine */}
        {/* Hover Shine */}
        <div
          className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-opacity
    duration-300
    pointer-events-none
  "
        >
          <div
            className="
      absolute
      -left-[150%]
      top-0
      h-full
      w-[80%]
      rotate-[18deg]
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      animate-[cardshine_1.2s_linear_infinite]
    "
          />
        </div>

        {/* Gold Border Animation */}
        <div className="premium-border" >
          <span className="border-light" />
        </div>

        {/* Watermark */}
        <img
          src={icon}
          alt="card watermark"
          className="
            absolute
            right-4
            top-4
            h-24
            w-24
            opacity-[0.15]
            pointer-events-none
            select-none
          "
        />

        <div className="relative z-10 p-5 h-full flex flex-col">

          {/* Top */}
          <div className="flex justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-zinc-300">
                DUO STACK
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {bank}
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 max-w-[90px] text-right">
              {division}
            </p>
          </div>

          {/* Chip */}
          <img
            src={chip}
            alt="card chip"
            className="mt-5 h-11 w-11 rounded-md"
          />

          {/* Number */}
          <p
            className="
              mt-5
              font-mono
              text-[15px]
              tracking-[0.18em]
              text-white
            "
          >
            {number}
          </p>

          {/* Bottom */}
          <div className="mt-auto flex items-end justify-between">

            <div>
              {/* <p className="text-[9px] uppercase text-zinc-500">
                Skill Holder
              </p> */}

              <h3 className="mt-1 text-lg font-semibold text-white">
                {skill}
              </h3>

              {/* <div className="mt-2 flex gap-6">

                <div>
                  <p className="text-[8px] uppercase text-zinc-600">
                    Valid From
                  </p>

                  <p className="text-xs text-zinc-300">
                    {validFrom}
                  </p>
                </div>

                <div>
                  <p className="text-[8px] uppercase text-zinc-600">
                    Valid Thru
                  </p>

                  <p className="text-xs text-zinc-300">
                    {validThru}
                  </p>
                </div>

              </div> */}
            </div>

            {/* Mastercard */}
            <img
              src={logo2}
              alt="Duo Stack"
              className="
    h-10
    w-auto
    object-contain
    opacity-90
  "
            />

          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default CreditCard;