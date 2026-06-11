import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Data Analyst",
  "Mobile App Developer",
  "UI/UX Designer",
];

function TerminalWindow({ show }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!show) return;

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentRole.substring(0, displayText.length + 1)
        );

        if (displayText === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length - 1)
        );

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, show]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 250,
        scale: 0.92,
      }}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 250,
        scale: show ? 1 : 0.92,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-4xl
        overflow-hidden
        rounded-[32px]
        border
        border-zinc-800
        bg-black
        shadow-[0_30px_120px_rgba(0,0,0,0.9)]
      "
    >
      {/* Header */}
      <div className="flex items-center border-b border-zinc-800 px-5 py-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-[#28c840]" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-zinc-500">
          ajay-portfolio.sh
        </div>
      </div>

      {/* Body */}
      <div
        className="
          flex
          min-h-[420px]
          flex-col
          justify-center
          px-8
          py-10
          md:min-h-[400px]
          md:px-12
          font-mono
        "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10"
        >
          <p className="mb-3 text-zinc-500">
            $ whoami
          </p>

          <p className="text-lg text-zinc-100 md:text-xl">
            Ajay Arumugam
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ delay: 1.3 }}
          className="mb-10"
        >
          <p className="mb-3 text-zinc-500">
            $ role
          </p>

          <div className="flex items-center gap-1">
            <span className="text-lg text-zinc-100 md:text-xl">
              {displayText}
            </span>

            <span className="animate-pulse text-lg text-white">
              |
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ delay: 1.8 }}
        >
          <p className="mb-3 text-zinc-500">
            $ status
          </p>

          <p className="max-w-xl text-zinc-100">
            Building Modern Digital Experiences and Analysing Business Insights.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TerminalWindow;