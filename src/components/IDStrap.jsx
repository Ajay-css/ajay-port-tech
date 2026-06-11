import { motion } from "framer-motion";

function IDStrap() {
  return (
    <motion.div
      animate={{
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-[-220px] -translate-x-1/2"
    >
      <svg
        width="380"
        height="260"
        viewBox="0 0 380 260"
      >
        {/* Left Strap */}
        <path
          d="M120 0
             C40 60,
             40 170,
             160 240"
          stroke="#202020"
          strokeWidth="32"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right Strap */}
        <path
          d="M260 0
             C340 60,
             340 170,
             220 240"
          stroke="#202020"
          strokeWidth="32"
          fill="none"
          strokeLinecap="round"
        />

        {/* Branding */}
        <text
          x="72"
          y="70"
          fill="#3a3a3a"
          fontSize="11"
          fontWeight="700"
          transform="rotate(-34 72 70)"
        >
          AJAY • AJAY • AJAY
        </text>

        <text
          x="220"
          y="70"
          fill="#3a3a3a"
          fontSize="11"
          fontWeight="700"
          transform="rotate(34 220 70)"
        >
          AJAY • AJAY • AJAY
        </text>

        {/* Connector */}
        <circle
          cx="190"
          cy="240"
          r="12"
          fill="#2a2a2a"
        />
      </svg>
    </motion.div>
  );
}

export default IDStrap;