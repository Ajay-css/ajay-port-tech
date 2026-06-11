import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function IntroName({ showTerminal }) {
  const fullText = "AJAY ARUMUGAM";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={{
        scale: showTerminal ? 2 : 1,
        opacity: showTerminal ? 0.03 : 1,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <h1
        className="
          text-center
          font-semibold
          tracking-tight
          text-white
          select-none
          text-[10vw]
          md:text-[7vw]
          lg:text-[6vw]
        "
      >
        {text}
      </h1>
    </motion.div>
  );
}

export default IntroName;