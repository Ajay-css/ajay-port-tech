import { motion } from "framer-motion";

function VaultCard({
  project,
  selected,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300

        ${
          selected
            ? "border-emerald-500 bg-emerald-500/10"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      {/* Scan Line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          bg-emerald-400
          opacity-0
          group-hover:opacity-100
          group-hover:animate-pulse
        "
      />

      <p
        className="
          text-[11px]
          tracking-[0.3em]
          text-zinc-500
        "
      >
        CLASSIFIED
      </p>

      <h3
        className="
          mt-3
          text-xl
          font-semibold
          text-white
        "
      >
        {project.code}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-zinc-400
        "
      >
        {project.title}
      </p>
    </motion.button>
  );
}

export default VaultCard;