import { motion } from "framer-motion";

function ProjectCard({
  project,
  index,
  activeIndex,
}) {
  const passed = index < activeIndex;

  const stackOffset =
    (index - activeIndex) * 22;

  return (
    <motion.div
      animate={{
        y: passed
          ? 900
          : Math.max(stackOffset, 0),

        scale: passed
          ? 0.92
          : 1 - Math.max(stackOffset, 0) * 0.0008,

        opacity: passed ? 0 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-1/2
        top-0
        w-full
        max-w-5xl
        -translate-x-1/2
      "
      style={{
        zIndex: 100 - index,
      }}
    >
      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-[#070707]
          shadow-[0_25px_80px_rgba(0,0,0,0.65)]
        "
      >
        {/* Mac Header */}

        <div
          className="
            flex
            items-center
            border-b
            border-white/10
            px-5
            py-3
            bg-[#0d0d0d]
          "
        >
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <p
            className="
              ml-4
              text-xs
              text-zinc-500
            "
          >
            {project.title}
          </p>
        </div>

        {/* Screenshot */}

        <div className="bg-black p-3">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              rounded-xl
              border
              border-white/5

              object-contain
              object-top

              h-[220px]
              sm:h-[320px]
              md:h-[520px]
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;